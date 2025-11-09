import { useState } from 'react';
import { Search } from 'lucide-react';
import { Product } from '../App';
import { products } from '../data/products';
import ProductCard from './ProductCard';

type ProductsPageProps = {
  onProductSelect: (product: Product) => void;
};

export default function ProductsPage({ onProductSelect }: ProductsPageProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('الكل');

  const categories = ['الكل', 'مبيد حشري', 'مبيد فطري', 'مغذي نباتي'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.الصنف.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.الشركة.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'الكل' || product.النوع === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="py-8 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-green-800 text-center mb-8">منتجاتنا</h1>

        <div className="mb-8 max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="ابحث عن منتج أو شركة..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pr-12 pl-4 py-3 border-2 border-gray-200 rounded-lg focus:border-green-500 focus:outline-none text-lg"
            />
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-lg font-bold transition-all ${
                selectedCategory === category
                  ? 'bg-green-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-green-50 border-2 border-gray-200'
              }`}
            >
              {category === 'الكل' ? 'كل المبيدات' : category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductSelect(product)}
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-500">لا توجد منتجات مطابقة للبحث</p>
          </div>
        )}
      </div>
    </div>
  );
}
