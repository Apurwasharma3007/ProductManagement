
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 to-purple-600 flex flex-col items-center justify-center text-white text-center px-6">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Our Product Store</h1>
      <p className="text-lg max-w-2xl mb-6 animate-slide-up">
        Discover the best products curated just for you. Sign in to explore our collection and manage your inventory with ease.
      </p>
      <Link
        to="/login"
        className="px-6 py-3 text-lg font-medium bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-gray-200 transition duration-300 animate-bounce"
      >
        Get Started
      </Link>
    </div>
  );
}
