import { Leaf, Shield, Award, ArrowLeft } from 'lucide-react';

type HomePageProps = {
  onNavigate: (page: 'products') => void;
};

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div>
      <section className="relative bg-gradient-to-bl from-green-50 to-white py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-green-800 mb-6 leading-tight">
              نعتني بمزارعك...
              <br />
              <span className="text-green-600">لأرض أكثر إنتاجًا</span>
            </h1>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              نوفر لك أفضل المبيدات الزراعية والحلول المتكاملة لحماية محاصيلك وزيادة إنتاجيتها
            </p>
            <button
              onClick={() => onNavigate('products')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-bold shadow-lg hover:shadow-xl transition-all flex items-center gap-2 mx-auto"
            >
              استكشف المنتجات
              <ArrowLeft className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-green-800 mb-12">لماذا نحن؟</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-green-50">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">منتجات طبيعية</h3>
              <p className="text-gray-600 leading-relaxed">
                نستخدم مكونات طبيعية آمنة للبيئة والإنسان
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-green-50">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">حماية فعالة</h3>
              <p className="text-gray-600 leading-relaxed">
                فعالية مثبتة في مكافحة الآفات والأمراض الزراعية
              </p>
            </div>

            <div className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow bg-green-50">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-green-800 mb-3">جودة معتمدة</h3>
              <p className="text-gray-600 leading-relaxed">
                منتجات من شركات عالمية موثوقة ومعتمدة دوليًا
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
