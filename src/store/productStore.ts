import { create } from 'zustand';
import { Product, ProductFilters } from '../types';
import { supabase } from '../lib/supabase';

interface ProductState {
  products: Product[];
  loading: boolean;
  filters: ProductFilters;
  setFilters: (filters: ProductFilters) => void;
  fetchProducts: () => Promise<void>;
  createProduct: (product: Omit<Product, 'id' | 'created_at' | 'user_id'>) => Promise<void>;
  updateProduct: (id: string, product: Partial<Product>) => Promise<void>;
  deleteProduct: (id: string) => Promise<void>;
}

export const useProductStore = create<ProductState>((set, get) => ({
  products: [],
  loading: false,
  filters: {},
  setFilters: (filters) => set({ filters }),
  fetchProducts: async () => {
    set({ loading: true });
    try {
      let query = supabase
        .from('products')
        .select('*');

      const { filters } = get();
      
      if (filters.category) {
        query = query.eq('category', filters.category);
      }
      if (filters.minPrice) {
        query = query.gte('price', filters.minPrice);
      }
      if (filters.maxPrice) {
        query = query.lte('price', filters.maxPrice);
      }
      if (filters.minRating) {
        query = query.gte('rating', filters.minRating);
      }
      if (filters.search) {
        query = query.or(`name.ilike.%${filters.search}%,description.ilike.%${filters.search}%`);
      }

      const { data, error } = await query;
      if (error) throw error;
      set({ products: data as Product[] });
    } finally {
      set({ loading: false });
    }
  },
  createProduct: async (product) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) throw new Error('Not authenticated');

    const { error } = await supabase
      .from('products')
      .insert([{ ...product, user_id: user.id }]);

    if (error) throw error;
    get().fetchProducts();
  },
  updateProduct: async (id, product) => {
    const { error } = await supabase
      .from('products')
      .update(product)
      .eq('id', id);

    if (error) throw error;
    get().fetchProducts();
  },
  deleteProduct: async (id) => {
    const { error } = await supabase
      .from('products')
      .delete()
      .eq('id', id);

    if (error) throw error;
    get().fetchProducts();
  },
}));