
import { User, Home } from "lucide-react";
import { useNavigate } from "react-router-dom";
import vbicon from "../../assets/images/vbproicon.png";
import dkicon from "../../assets/images/dkicon.png";
import pribumiicon from "../../assets/images/pribumiicon.png";
import othericon from "../../assets/images/othericon.png";

interface ProductSidebarProps {
  activeProduct: string;
  setActiveProduct: (id: string) => void;
  setActiveTab: (tab: string) => void;
}

const ProductSidebar = ({
  activeProduct,
  setActiveProduct,
  setActiveTab,
}: ProductSidebarProps) => {
  const navigate = useNavigate();
  const products = [
    { id: "VBPRO", name: "VBPRO NUSANTARA", logo: vbicon },
    { id: "HERBAL", name: "DRAJAT KARUNIA", logo: dkicon },
    { id: "ROKOK", name: "ROKOK", logo: pribumiicon },
    { id: "OTHER", name: "PRODUK LAINNYA", logo: othericon },
  ];

  return (
    <div className="w-20 fixed left-0 top-0 bottom-0 bg-gray-900 shadow-lg z-40 flex flex-col border-r border-green-900">
      <button
        onClick={() => navigate("/profile")}
        className="w-full p-4 flex flex-col items-center border-b border-green-900"
      >
        <User className="w-6 h-6 text-gray-300" />
        <span className="text-[10px] mt-1 text-center font-medium text-gray-300">
          Profile
        </span>
      </button>

      <div className="flex-1 flex flex-col pt-6">
        {products.map((product) => (
          <button
            key={product.id}
            onClick={() => setActiveProduct(product.id)}
            className={`w-full p-2 flex flex-col items-center justify-center h-24 border-b border-green-900 ${
              activeProduct === product.id
                ? "bg-green-900/30 border-r-4 border-r-green-600"
                : ""
            }`}
          >
            <img src={product.logo} alt={product.name} className="w-10 h-10 object-contain rounded-lg mb-1" />
            <span className="text-[10px] text-center font-medium text-gray-300">
              {product.name}
            </span>
          </button>
        ))}
      </div>

      <button
        onClick={() => {
          setActiveTab("home");
          navigate("/", { state: { activeTab: "home" } });
        }}
        className="w-full p-4 flex flex-col items-center border-t border-green-900"
      >
        <Home className="w-6 h-6 text-gray-300" />
        <span className="text-[10px] mt-1 text-center font-medium text-gray-300">Home</span>
      </button>
    </div>
  );
};

export default ProductSidebar;
