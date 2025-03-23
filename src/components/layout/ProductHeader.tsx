
import { Home, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductHeaderProps {
  activeProduct: string;
}

const ProductHeader = ({ activeProduct }: ProductHeaderProps) => {
  const navigate = useNavigate();

  return (
    <div className="fixed top-0 left-20 right-0 h-14 bg-gray-900 shadow-lg z-50 flex items-center justify-between px-4 border-b border-green-900">
      <h1 className="text-lg font-semibold text-gray-100">Katalog Produk</h1>
      <button 
        onClick={() => navigate('/profile/cart', { state: { from: '/products' } })}
        className="p-2 hover:bg-gray-800 rounded-lg"
      >
        <ShoppingCart className="text-green-500 w-6 h-6" />
      </button>
    </div>
  );
};

export default ProductHeader;
