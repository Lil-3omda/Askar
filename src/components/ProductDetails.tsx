import { ArrowRight, Building2, Droplet, FileText } from 'lucide-react';
import { Product } from '../App';

type ProductDetailsProps = {
  product: Product;
  onBack: () => void;
};

export default function ProductDetails({ product, onBack }: ProductDetailsProps) {
  return (
    <div className="py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-green-600 hover:text-green-700 mb-6 font-bold"
        >
          <ArrowRight className="w-5 h-5" />
          العودة للمنتجات
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 h-96 bg-gray-200">
              <img
                src={product.الصورة}
                alt={product.الصنف}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="md:w-1/2 p-8">
              <div className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
                {product.النوع}
              </div>

              <h1 className="text-4xl font-bold text-green-800 mb-4">{product.الصنف}</h1>

              <div className="flex items-center gap-2 text-gray-700 mb-6 text-lg">
                <Building2 className="w-5 h-5 text-green-600" />
                <span className="font-bold">الشركة المنتجة:</span>
                <span>{product.الشركة}</span>
              </div>

              <div className="space-y-6">
                <div className="border-r-4 border-green-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">الاستخدامات</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{product.الاستخدامات}</p>
                </div>

                <div className="border-r-4 border-green-600 pr-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Droplet className="w-5 h-5 text-green-600" />
                    <h3 className="text-xl font-bold text-gray-800">طريقة التطبيق</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{product.طريقة_التطبيق}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-green-50 border-r-4 border-green-600 p-6 rounded-lg">
          <h3 className="text-xl font-bold text-green-800 mb-3">تحذيرات هامة</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>يجب ارتداء معدات الحماية الشخصية عند الاستخدام</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>احفظ المنتج بعيدًا عن متناول الأطفال والحيوانات</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>اتبع التعليمات المدونة على العبوة بدقة</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 font-bold">•</span>
              <span>لا تخلط المبيد مع منتجات أخرى إلا بعد استشارة المختصين</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
