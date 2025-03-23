import React from "react";
import { ChevronRight, ArrowRight } from "lucide-react";
import ReactDOM from "react-dom/client";
import AffiliateModal from "../components/layout/afifiliatemodal/AffiliateModal";
import daunpanda from "../assets/images/komposisi/daunpanda.jpg";
import mesoyi from "../assets/images/komposisi/mesoyi.jpg";
import madu from "../assets/images/komposisi/madu.jpg";
import kencur from "../assets/images/komposisi/kencur.jpg";
import kelambet from "../assets/images/komposisi/kelambet.jpg";
import jintanhitam from "../assets/images/komposisi/jintanhitam.jpg";
import jahemerah from "../assets/images/komposisi/jahemerah.jpg";
import bungalawang from "../assets/images/komposisi/bungalawang.jpg";
import keningar from "../assets/images/komposisi/keningar.jpg";
import kayumanis from "../assets/images/komposisi/kayumanis.jpg";
import kapulaga from "../assets/images/komposisi/kapulaga.jpg";
import daunsalam from "../assets/images/komposisi/daunsalam.jpg";
import heroImagevb from "../assets/images/homepagevbpro.png";
import heroImagedk from "../assets/images/homepagedk.png";
import vbLogo from "../assets/images/vblogohorizontal.png";
import dkLogo from "../assets/images/dklogohorizontal.png";
import vbLogogray from "../assets/images/vblogohorizontal_gray.png";
import dkLogogray from "../assets/images/dklogohorizontal_gray.png";


import NavigationMenu from "../components/layout/NavigationMenu";

const HomePage = () => {
  const [selectedBrand, setSelectedBrand] = React.useState(1);

  const herbImages = [
    daunpanda,
    mesoyi,
    madu,
    kencur,
    kelambet,
    jintanhitam,
    jahemerah,
    bungalawang,
    keningar,
    kayumanis,
    kapulaga,
    daunsalam,
  ];

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] pt-14">
      <main>
        {/* Main product showcase */}
        <div className="relative flex-grow">
          <div className="h-[70vh] w-full overflow-hidden relative">
            <img
              key={selectedBrand}
              src={selectedBrand === 1 ? heroImagevb : heroImagedk}
              alt="Herbal drink"
              className="w-full h-full object-cover hero-image visible absolute inset-0"
            />
          </div>

          {/* Product selection card */}
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4">
            <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700">
              <div className="bg-green-800 p-3">
                <h2 className="text-gray-100 text-center font-medium">
                  Rokok Herbal Millenial
                </h2>
              </div>
              <div className="p-4">
                <div className="grid grid-cols-2 gap-4">
                  <button
                    onClick={() => setSelectedBrand(1)}
                    className="p-2 rounded"
                  >
                    <img
                      src={
                        selectedBrand === 1
                          ? vbLogo
                          : vblogogray
                      }
                      alt="VB Pro"
                      className="w-full h-auto"
                    />
                  </button>
                  <button
                    onClick={() => setSelectedBrand(2)}
                    className="p-2 rounded"
                  >
                    <img
                      src={
                        selectedBrand === 2
                          ? dkLogo
                          : dklogogray
                      }
                      alt="Drajat Karunia"
                      className="w-full h-auto"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Persuasive text section */}
        <div className="mt-24 px-6 pb-10">
          <p className="text-[var(--text-primary)] text-center leading-relaxed">
            Mari bergabung dan rasakan perubahan: tinggalkan kebiasaan yang
            merugikan, dan mulai langkah baru menuju kesehatan jasmani dan
            rohani, serta persiapkan bekal terbaik untuk kehidupan akhirat
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="px-6 pb-8">
          <div className="grid grid-cols-3 gap-2">
            <div className="bg-gray-800 rounded-lg p-2 text-center border border-gray-700">
              <div className="text-green-500 font-bold text-sm sm:text-base">
                5000+
              </div>
              <div className="text-gray-300 text-xs">Mitra Aktif</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-2 text-center border border-gray-700">
              <div className="text-green-500 font-bold text-sm sm:text-base">
                25+
              </div>
              <div className="text-gray-300 text-xs">Kota</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-2 text-center border border-gray-700">
              <div className="text-green-500 font-bold text-sm sm:text-base">
                95%
              </div>
              <div className="text-gray-300 text-xs">Mitra Puas</div>
            </div>
          </div>
        </div>

        {/* Horizontal banner section */}
        <div className="px-6 pb-10">
          <div
            className="bg-[var(--card-bg)] rounded-lg flex justify-between items-center cursor-pointer"
            onClick={() => {
              const openingModal = document.createElement("div");
              openingModal.id = "affiliate-modal";
              document.body.appendChild(openingModal);
              const root = ReactDOM.createRoot(openingModal);
              root.render(
                <AffiliateModal
                  isOpen={true}
                  onClose={() => {
                    root.unmount();
                    document.body.removeChild(openingModal);
                  }}
                  currentStep={1}
                  onNext={() => {
                    root.render(
                      <AffiliateModal
                        isOpen={true}
                        onClose={() => {
                          root.unmount();
                          document.body.removeChild(openingModal);
                        }}
                        currentStep={2}
                        onNext={() => {
                          root.render(
                            <AffiliateModal
                              isOpen={true}
                              onClose={() => {
                                root.unmount();
                                document.body.removeChild(openingModal);
                              }}
                              currentStep={3}
                              onNext={() => {
                                root.unmount();
                                document.body.removeChild(openingModal);
                              }}
                              onBack={() => {
                                root.render(
                                  <AffiliateModal
                                    isOpen={true}
                                    currentStep={2}
                                    onClose={() => {
                                      root.unmount();
                                      document.body.removeChild(openingModal);
                                    }}
                                    onNext={() => {}}
                                    onBack={() => {}}
                                  />,
                                );
                              }}
                            />,
                          );
                        }}
                        onBack={() => {
                          root.render(
                            <AffiliateModal
                              isOpen={true}
                              currentStep={1}
                              onClose={() => {
                                root.unmount();
                                document.body.removeChild(openingModal);
                              }}
                              onNext={() => {}}
                              onBack={() => {}}
                            />,
                          );
                        }}
                      />,
                    );
                  }}
                />,
              );
            }}
          >
            <img
              src="/src/assets/images/affiliatebanner.png"
              alt="Pribumi Banner"
              className="w-full h-full object-cover rounded-lg"
            />
            <ChevronRight size={24} className="text-gray-300" />
          </div>
        </div>

        {/* Herbal Drink Premium Section */}
        <div className="px-6 pb-10">
          {/* Title with horizontal lines */}
          <div className="flex items-center justify-center mb-6">
            <div className="h-px bg-[var(--text-primary)] flex-grow"></div>
            <h2 className="text-[var(--text-primary)] font-bold px-4 text-center">
              ROKOK HERBAL PREMIUM
            </h2>
            <div className="h-px bg-[var(--text-primary)] flex-grow"></div>
          </div>

          {/* Center-aligned text */}
          <p className="text-[var(--text-primary)] text-center mb-8">
            12 Komposisi Herbal & Rempah Nusantara
          </p>
        </div>

        {/* Benefits Section (Two Columns) */}
        <div className="px-6 pb-24">
          <div className="grid grid-cols-2 gap-3 sm:gap-6">
            {/* Left Column: Benefits Card */}
            <div className="bg-gray-800 rounded-lg overflow-hidden flex border border-gray-700">
              <div className="w-2 bg-yellow-400"></div>
              <div className="p-2 sm:p-4 flex-1">
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <h3 className="font-bold text-sm sm:text-lg text-gray-100">
                    Manfaat
                  </h3>
                  <ArrowRight size={16} className="text-gray-400" />
                </div>
                <p className="text-gray-300 text-xs sm:text-base">
                  Rokok herbal ini memberikan manfaat unik, termasuk membantu
                  relaksasi, meredakan stres, mendukung pernapasan lebih nyaman,
                  dan memberikan sensasi alami yang menenangkan. Bahan-bahan
                  herbal yang digunakan telah dikenal secara tradisional
                  memiliki sifat menyejukkan dan dapat membantu menjaga
                  keseimbangan tubuh.
                </p>
              </div>
            </div>

            {/* Right Column: Wheel Picker Style Cards */}
            <div className="relative h-80">
              <div className="absolute inset-0 overflow-y-auto pr-2 space-y-3 custom-scrollbar wheel-picker-container">
                {/* Cards */}
                {[
                  "Membantu memberikan efek relaksasi dan menenangkan pikiran secara alami.",
                  "Mendukung pernapasan lebih nyaman dengan aroma herbal yang menyegarkan.",
                  "Mengurangi stres dan ketegangan untuk keseimbangan mental yang lebih baik.",
                  "Membantu meningkatkan kualitas tidur dengan sensasi yang menenangkan.",
                  "Menyediakan alternatif merokok dengan bahan alami tanpa zat adiktif buatan.",
                  "Menyegarkan rongga mulut dengan kandungan herbal pilihan.",
                  "Membantu menjaga fokus dan konsentrasi dengan efek yang lebih ringan.",
                  "Memberikan sensasi merokok yang lebih halus tanpa zat kimia berbahaya.",
                  "Menyediakan pengalaman merokok yang lebih alami dan beraroma khas.",
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-[var(--card-bg)] rounded-lg shadow-md p-2 sm:p-4 transform transition-transform hover:scale-[1.02]"
                  >
                    <p className="text-[var(--card-text)] text-xs sm:text-base">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
              {/* Gradient masks */}
              <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[var(--bg-primary)] to-transparent pointer-events-none z-10"></div>
              <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[var(--bg-primary)] to-transparent pointer-events-none z-10"></div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
        <div className="bg-gray-900 px-4 py-8 mt-auto pb-24">
          <div className="max-w-lg mx-auto">
            <h2 className="text-lg font-bold text-green-500 text-center mb-1">
              Berkah Abadi
            </h2>
            <p className="text-sm text-gray-300 text-center mb-4">
              Partner Bisnis Terpercaya Anda
            </p>

            <p className="text-xs text-gray-400 text-center mb-6 leading-relaxed">
              Berkah Abadi adalah perusahaan distribusi produk kesehatan dan
              kecantikan yang beroperasi dengan sistem afiliasi multi-level.
              Kami fokus pada penyediaan produk berkualitas tinggi dan peluang
              bisnis yang adil dan transparan bagi seluruh mitra.
            </p>

            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-lg">✨</span>
                </div>
                <p className="text-xs text-gray-300">
                  Berkah Sehat Nikmat Dunia Akhirat
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-lg">📜</span>
                </div>
                <p className="text-xs text-gray-300">
                  Legalitas lengkap dan terdaftar resmi
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-lg">🤝</span>
                </div>
                <p className="text-xs text-gray-300">
                  Sistem afiliasi adil dan menguntungkan
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-900/50 flex items-center justify-center flex-shrink-0">
                  <span className="text-green-500 text-lg">✅</span>
                </div>
                <p className="text-xs text-gray-300">
                  Produk berkualitas dengan sertifikasi lengkap
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
