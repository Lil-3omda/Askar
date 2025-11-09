import { Sprout } from 'lucide-react';

type NavigationProps = {
  currentPage: string;
  onNavigate: (page: 'home' | 'products' | 'contact') => void;
};

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  return (
    <nav className="bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <Sprout className="w-8 h-8" />
            <h1 className="text-xl font-bold">مبيدات زراعية</h1>
          </div>

          <div className="flex gap-1">
            <button
              onClick={() => onNavigate('home')}
              className={`px-6 py-2 rounded-lg transition-all ${
                currentPage === 'home'
                  ? 'bg-white text-green-700 font-bold'
                  : 'hover:bg-green-500'
              }`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => onNavigate('products')}
              className={`px-6 py-2 rounded-lg transition-all ${
                currentPage === 'products' || currentPage === 'details'
                  ? 'bg-white text-green-700 font-bold'
                  : 'hover:bg-green-500'
              }`}
            >
              المنتجات
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className={`px-6 py-2 rounded-lg transition-all ${
                currentPage === 'contact'
                  ? 'bg-white text-green-700 font-bold'
                  : 'hover:bg-green-500'
              }`}
            >
              اتصل بنا
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
