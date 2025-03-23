
import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  image: string;
  priceRetail: string;
  priceBox: string;
  priceWholesale: string;
}

const CardRokok = ({
  name,
  image,
  priceRetail,
  priceBox,
  priceWholesale,
}: ProductCardProps) => {
  return (
    <div className="w-[160px] flex-shrink-0 snap-center">
      <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
        <div className="p-2">
          <div className="aspect-square w-full bg-gray-700 rounded-md mb-2">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-gray-100 text-xs leading-tight">
              {name}
            </h3>
            <div className="text-base font-bold text-gray-100">
              {priceRetail}
            </div>
            <div className="bg-gray-700 p-1.5 rounded-md">
              <div className="flex justify-between items-center text-sm">
                <div>
                  <span className="text-xs text-gray-400">Slop: </span>
                  <span className="font-semibold text-gray-100">
                    {priceBox}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400">Grosir: </span>
                  <span className="font-semibold text-gray-100">
                    {priceWholesale}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="flex-1 h-10 bg-green-700 hover:bg-green-600 rounded-full text-white text-sm font-medium">
                Beli
              </button>
              <button className="w-10 h-10 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center">
                <ShoppingCart className="w-5 h-5 text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardRokok;
