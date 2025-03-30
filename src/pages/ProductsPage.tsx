import React, { useEffect, useState } from 'react';
import { useProductStore } from '../store/productStore';
import { ProductList } from '../components/ProductList';
import { ProductForm } from '../components/ProductForm';
import { ProductFilters } from '../components/ProductFilters';
import { Plus, X } from 'lucide-react';

export function ProductsPage() {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const { fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 flex flex-col items-center py-12 px-6">
      <div className="w-full max-w-7xl flex justify-between items-center mb-10">
        <h1 className="text-4xl font-extrabold text-white drop-shadow-md animate-fade-in">Products</h1>
        <button
          onClick={() => setShowCreateForm(true)}
          className="flex items-center gap-2 px-5 py-3 bg-white text-indigo-700 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
        >
          <Plus className="h-5 w-5" />
          Add Product
        </button>
      </div>

      <div className="w-full max-w-7xl space-y-6 animate-slide-up">
        <ProductFilters />
        <ProductList />
      </div>
      
      {showCreateForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-lg animate-fade-in"
          onClick={() => setShowCreateForm(false)}
        >
          <div
            className="relative bg-white/90 p-6 rounded-2xl shadow-2xl w-96 transition-all duration-300 animate-pop-up"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Create Product</h2>
              <button
                onClick={() => setShowCreateForm(false)}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <ProductForm onClose={() => setShowCreateForm(false)} />
          </div>
        </div>
      )}
    </div>
  );
}
