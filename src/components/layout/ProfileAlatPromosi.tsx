import React from "react";
import { ArrowLeft, Download } from "lucide-react";
import { useNavigate } from "react-router-dom";

const promoItems = [
  {
    title: "Banner Horizontal",
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800",
    downloadUrl: "/assets/banner-horizontal.jpg",
    dimensions: "1200 x 628 px",
  },
  {
    title: "Banner Vertical",
    image: "https://images.unsplash.com/photo-1557682260-96773eb01377?w=800",
    downloadUrl: "/assets/banner-vertical.jpg",
    dimensions: "628 x 1200 px",
  },
  {
    title: "Media Promosi Digital",
    image: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5?w=800",
    downloadUrl: "/assets/digital-promo.jpg",
    dimensions: "1080 x 1080 px",
  },
];

const ProfileAlatPromosi = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 pt-14 pb-24">
      <div className="bg-gray-800 shadow-md border-b border-gray-700 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => navigate("/profile")}
            className="p-2 hover:bg-gray-700 rounded-lg text-gray-300"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-lg font-semibold text-gray-100">
            Daftar Alat Promosi
          </h1>
        </div>
      </div>

      <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {promoItems.map((item, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl shadow-md border border-gray-700 overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-1 text-gray-200">
                {item.title}
              </h3>
              <p className="text-sm text-gray-400 mb-4">{item.dimensions}</p>
              <button
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = item.downloadUrl;
                  link.download = `${item.title.toLowerCase().replace(/\s+/g, "-")}.jpg`;
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="w-full py-2 px-4 bg-green-700 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 shadow-md"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileAlatPromosi;
