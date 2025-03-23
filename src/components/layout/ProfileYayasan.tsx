import React from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ProfileYayasanCard from "./profiles/ProfileYayasanCard";

const yayasanList = [
  {
    image: "https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?w=800",
    name: "Yayasan Peduli Anak",
    address: "Jl. Raya Bogor No. 123, Jakarta Timur",
    phone: "(021) 8765432",
    website: "https://pedulianak.org",
    totalDonation: 125000000,
  },
  {
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=800",
    name: "Yayasan Kasih Bunda",
    address: "Jl. Gatot Subroto No. 45, Jakarta Selatan",
    phone: "(021) 9876543",
    website: "https://kasihbunda.org",
    totalDonation: 98500000,
  },
  {
    image: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800",
    name: "Yayasan Harapan Bangsa",
    address: "Jl. Sudirman No. 78, Jakarta Pusat",
    phone: "(021) 2345678",
    website: "https://harapanbangsa.org",
    totalDonation: 157000000,
  },
];

const ProfileYayasan = () => {
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
            Daftar Yayasan
          </h1>
        </div>
      </div>

      <div className="p-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {yayasanList.map((yayasan, index) => (
          <ProfileYayasanCard key={index} {...yayasan} />
        ))}
      </div>
    </div>
  );
};

export default ProfileYayasan;
