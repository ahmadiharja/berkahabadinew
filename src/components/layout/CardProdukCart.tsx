import React from "react";

interface CardProdukCartProps {
  productName: string;
  quantity: number;
  price: number;
  shippingAddress: string;
  status:
    | "Menunggu Pembayaran"
    | "Dibayar"
    | "Diproses"
    | "Dikirim"
    | "Diterima";
  image: string;
}

const CardProdukCart: React.FC<CardProdukCartProps> = ({
  productName,
  quantity,
  price,
  shippingAddress,
  status,
  image,
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "Menunggu Pembayaran":
        return "bg-yellow-900/40 text-yellow-400 border-yellow-800";
      case "Dibayar":
        return "bg-blue-900/40 text-blue-400 border-blue-800";
      case "Diproses":
        return "bg-purple-900/40 text-purple-400 border-purple-800";
      case "Dikirim":
        return "bg-orange-900/40 text-orange-400 border-orange-800";
      case "Diterima":
        return "bg-green-900/40 text-green-400 border-green-800";
      default:
        return "bg-gray-800 text-gray-400 border-gray-700";
    }
  };

  return (
    <div className="bg-gray-800 rounded-xl border border-gray-700 shadow-md overflow-hidden mb-3 mx-2">
      <div className="p-3 border-b border-gray-700">
        <div className="flex justify-between items-center">
          <h3 className="font-medium text-sm text-gray-200 line-clamp-1">
            {productName}
          </h3>
          <div className="text-right">
            <span className="text-sm font-semibold text-green-500">
              Rp {(price * quantity).toLocaleString("id-ID")}
            </span>
          </div>
        </div>
      </div>

      <div className="p-3">
        <div className="flex gap-3">
          <div className="w-20 h-20 rounded-lg bg-gray-700 overflow-hidden flex-shrink-0">
            <img
              src={image}
              alt={productName}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 space-y-2">
            <div className="flex items-center">
              <span className="text-xs text-gray-400 mr-2">Qty:</span>
              <span className="text-sm font-medium text-gray-300">
                {quantity}
              </span>
            </div>

            <div>
              <span className="text-xs text-gray-400 block mb-1">
                Alamat Pengiriman:
              </span>
              <p className="text-xs text-gray-300 line-clamp-2">
                {shippingAddress}
              </p>
            </div>

            <div>
              <span
                className={`text-xs px-2.5 py-1 rounded-full border ${getStatusColor(status)}`}
              >
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardProdukCart;
