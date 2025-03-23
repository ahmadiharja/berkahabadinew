import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import CardProdukCart from "./CardProdukCart";

const Cart = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location.state?.from || "/profile";

  return (
    <div className="min-h-screen bg-gray-900 pt-14 pb-24">
      <div className="bg-gray-800 shadow-md border-b border-gray-700 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate(fromPage)}
            className="p-2 hover:bg-gray-700 rounded-lg text-gray-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-gray-100">
            Keranjang Saya
          </h1>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {orders.map((order, index) => (
          <CardProdukCart key={index} {...order} />
        ))}
      </div>
    </div>
  );
};

const orders = [
  {
    productName: "VBPRO Original 250ml",
    quantity: 2,
    price: 25000,
    shippingAddress: "Jl. Merdeka No. 123, Jakarta Selatan",
    status: "Menunggu Pembayaran",
    image: "https://placehold.co/100x100/png",
  },
  {
    productName: "Herbal Drink Premium",
    quantity: 1,
    price: 35000,
    shippingAddress: "Jl. Sudirman No. 45, Jakarta Pusat",
    status: "Dibayar",
    image: "https://placehold.co/100x100/png",
  },
  {
    productName: "VBPRO Max Power 500ml",
    quantity: 3,
    price: 45000,
    shippingAddress: "Jl. Gatot Subroto No. 67, Jakarta Barat",
    status: "Diproses",
    image: "https://placehold.co/100x100/png",
  },
  {
    productName: "Herbal Tea Classic",
    quantity: 4,
    price: 15000,
    shippingAddress: "Jl. Thamrin No. 89, Jakarta Pusat",
    status: "Dikirim",
    image: "https://placehold.co/100x100/png",
  },
  {
    productName: "VBPRO Energy Pack",
    quantity: 2,
    price: 55000,
    shippingAddress: "Jl. Asia Afrika No. 12, Jakarta Selatan",
    status: "Diterima",
    image: "https://placehold.co/100x100/png",
  },
] as const;

export default Cart;
