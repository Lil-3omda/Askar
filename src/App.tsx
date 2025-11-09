import { useState } from 'react';
import HomePage from './components/HomePage';
import ProductsPage from './components/ProductsPage';
import ProductDetails from './components/ProductDetails';
import ContactPage from './components/ContactPage';
import Navigation from './components/Navigation';

export type Product = {
  id: number;
  الصنف: string;
  الشركة: string;
  النوع: string;
  الاستخدامات: string;
  طريقة_التطبيق: string;
  الصورة: string;
};

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'products' | 'details' | 'contact'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductSelect = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('details');
  };

  const handleNavigate = (page: 'home' | 'products' | 'contact') => {
    setCurrentPage(page);
    if (page !== 'details') {
      setSelectedProduct(null);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50" dir="rtl">
      <Navigation currentPage={currentPage} onNavigate={handleNavigate} />

      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'products' && <ProductsPage onProductSelect={handleProductSelect} />}
      {currentPage === 'details' && selectedProduct && (
        <ProductDetails product={selectedProduct} onBack={() => setCurrentPage('products')} />
      )}
      {currentPage === 'contact' && <ContactPage />}
    </div>
  );
}

export default App;
