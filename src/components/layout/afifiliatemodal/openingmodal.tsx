import { useState, useEffect } from "react";
import { X } from "lucide-react";

import AffiliateModal from "./AffiliateModal";

const OpeningModal = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [showStepOne, setShowStepOne] = useState(false);
  const [showStepTwo, setShowStepTwo] = useState(false);
  const [showStepThree, setShowStepThree] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStartClick = () => {
    setIsOpen(false);
    setShowStepOne(true);
  };

  const handleBack = () => {
    if (showStepThree) {
      setShowStepThree(false);
      setShowStepTwo(true);
    } else if (showStepTwo) {
      setShowStepTwo(false);
      setShowStepOne(true);
    } else if (showStepOne) {
      setShowStepOne(false);
      setIsOpen(true);
    }
  };

  if (!isOpen && !showStepOne && !showStepTwo && !showStepThree) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-[9999]">
        <div className="bg-gray-900 border border-green-800 w-full max-w-sm rounded-2xl p-6 animate-fade-in-up shadow-lg shadow-green-900/30">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-xl font-bold text-green-500">
              Selamat Datang di PT Berkah Abadi
            </h2>
            <button
              onClick={closeModal}
              className="p-1 hover:bg-gray-800 rounded-lg text-gray-400"
            >
              <X size={20} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-800 border-l-4 border-green-600 rounded-xl">
              <p className="text-green-400 text-sm leading-relaxed">
                Rokok herbal inovatif dengan 12 rempah pilihan. Sehat, nikmat,
                dan penuh manfaat!
              </p>
            </div>

            <div className="p-4 bg-gray-800 border-l-4 border-green-600 rounded-xl">
              <p className="text-green-400 text-sm leading-relaxed">
                Nikmati & Raih Keuntungan – Dapatkan komisi dari penjualan
                pribadi dan mitra Anda.
              </p>
            </div>

            <div className="p-4 bg-gray-800 border-l-4 border-green-600 rounded-xl">
              <p className="text-green-400 text-sm leading-relaxed">
                Berjualan Sambil Berdonasi – Usaha yang berkah, sukses dunia
                akhirat.
              </p>
            </div>
          </div>

          <button
            onClick={handleStartClick}
            className="w-full mt-6 bg-green-700 text-white py-3 rounded-xl font-medium hover:bg-green-600 transition-colors shadow-md"
          >
            Mulai Sekarang
          </button>
        </div>
      </div>
      <AffiliateModal
        isOpen={showStepOne || showStepTwo || showStepThree}
        onClose={() => {
          setShowStepOne(false);
          setShowStepTwo(false);
          setShowStepThree(false);
        }}
        currentStep={showStepThree ? 3 : showStepTwo ? 2 : 1}
        onBack={handleBack}
        onNext={() => {
          if (showStepOne) {
            setShowStepOne(false);
            setShowStepTwo(true);
          } else if (showStepTwo) {
            setShowStepTwo(false);
            setShowStepThree(true);
          } else if (showStepThree) {
            setShowStepThree(false);
            // Perlu menambahkan definisi onClose atau mengubah ini
            setShowStepThree(false);
          }
        }}
      />
    </>
  );
};

export default OpeningModal;
