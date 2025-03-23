import React, { useState } from "react";
import { ArrowLeft, Gift } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface BonusCard {
  id: number;
  title: string;
  points: number;
  description: string;
}

const ProfileBonus = () => {
  const navigate = useNavigate();
  const [bonusCards, setBonusCards] = useState<BonusCard[]>([
    {
      id: 1,
      title: "Bonus Welcome",
      points: 50000,
      description: "Bonus untuk member baru bergabung",
    },
    {
      id: 2,
      title: "Bonus Referral",
      points: 75000,
      description: "Bonus mengundang 5 member baru",
    },
    {
      id: 3,
      title: "Bonus Transaksi",
      points: 100000,
      description: "Bonus total transaksi 10 juta",
    },
  ]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBonus, setSelectedBonus] = useState<BonusCard | null>(null);

  const handleClaimBonus = (bonus: BonusCard) => {
    setSelectedBonus(bonus);
    setShowModal(true);
  };

  const handleConfirmClaim = () => {
    setBonusCards((cards) =>
      cards.filter((card) => card.id !== selectedBonus?.id),
    );
    setShowModal(false);
  };

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
            Bonus Tersedia
          </h1>
        </div>
      </div>

      <div className="p-4 grid gap-4">
        {bonusCards.map((bonus) => (
          <div
            key={bonus.id}
            className="bg-gray-800 rounded-xl shadow-md border border-gray-700 p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 bg-gray-700 rounded-lg">
                <Gift className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-200">{bonus.title}</h3>
                <p className="text-sm text-gray-400">{bonus.description}</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-green-500">
                Rp {bonus.points.toLocaleString("id-ID")}
              </span>
              <button
                onClick={() => handleClaimBonus(bonus)}
                className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-600 shadow-md"
              >
                Ambil Bonus
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && selectedBonus && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-gray-900 border border-green-700 rounded-xl p-6 m-4 max-w-sm w-full shadow-lg shadow-green-900/30">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 bg-gray-800 rounded-full">
                <Gift className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-semibold text-gray-100">Selamat!</h3>
              <p className="text-gray-400">
                Anda berhasil mendapatkan {selectedBonus.title} sebesar Rp{" "}
                {selectedBonus.points.toLocaleString("id-ID")}
              </p>
              <button
                onClick={handleConfirmClaim}
                className="w-full py-2 bg-green-700 text-white rounded-lg hover:bg-green-600 shadow-md"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileBonus;
