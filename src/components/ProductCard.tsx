import { Product } from '../App';

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

export default function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden group"
    >
      <div className="relative h-48 overflow-hidden bg-gray-200">
        <img
          src={product.الصورة}
          alt={product.الصنف}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
          {product.النوع}
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-green-800 mb-2">{product.الصنف}</h3>
        <p className="text-gray-600 mb-4 flex items-center gap-2">
          <span className="font-semibold">الشركة:</span>
          <span>{product.الشركة}</span>
        </p>
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-bold transition-colors">
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
}
