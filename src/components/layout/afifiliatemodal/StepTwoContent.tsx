import { Award, Heart, Gift, Trophy, ChevronRight } from "lucide-react";

interface StepTwoContentProps {
  onClose: () => void;
  onNext: () => void;
}

const StepTwoContent = ({ onClose, onNext }: StepTwoContentProps) => {
  return (
    <>
      <div className="px-4 pb-6 space-y-4 bg-gray-900 text-gray-300">
        <p className="text-sm text-gray-400">
          Setelah memahami bagaimana sistemnya bekerja dengan adil dan
          transparan, kini saatnya melihat keuntungan lebih yang bisa Anda
          dapatkan.
        </p>

        <div className="space-y-3">
          <div className="bg-gray-800 border-l-4 border-green-600 p-3 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-1.5 flex items-center gap-1.5">
              <Trophy size={16} />
              Program Ambassador
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Jika Anda aktif berjualan dan mengajak mitra lain dengan baik,
              Anda berkesempatan mendapatkan bonus tambahan dan akses ke
              pelatihan eksklusif. Program ini membantu Anda membangun bisnis
              jangka panjang.
            </p>
          </div>

          <div className="bg-gray-800 border-l-4 border-green-600 p-3 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-1.5 flex items-center gap-1.5">
              <Heart size={16} />
              Program Donasi
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Sebagian keuntungan dari setiap transaksi akan disalurkan untuk
              amal. Program donasi rutin ke panti asuhan, pesantren, dan
              kegiatan sosial lainnya yang bisa Anda ikuti secara langsung.
            </p>
          </div>
        </div>

        <div className="border border-gray-700 rounded-lg p-3">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">
            Keuntungan Mitra DK
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-2">
              <div className="p-2 bg-gray-800 rounded-lg">
                <h4 className="text-xs font-medium text-green-500 mb-1 flex items-center gap-1">
                  <Award size={14} />
                  Komisi Langsung
                </h4>
                <p className="text-[11px] text-gray-400">
                  Dapatkan komisi dari setiap penjualan produk
                </p>
              </div>
              <div className="p-2 bg-gray-800 rounded-lg">
                <h4 className="text-xs font-medium text-green-500 mb-1 flex items-center gap-1">
                  <Trophy size={14} />
                  Bonus Prestasi
                </h4>
                <p className="text-[11px] text-gray-400">
                  Raih bonus saat mencapai target
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="p-2 bg-gray-800 rounded-lg">
                <h4 className="text-xs font-medium text-green-500 mb-1 flex items-center gap-1">
                  <Heart size={14} />
                  Komisi Jaringan
                </h4>
                <p className="text-[11px] text-gray-400">
                  Terima komisi dari transaksi mitra
                </p>
              </div>
              <div className="p-2 bg-gray-800 rounded-lg">
                <h4 className="text-xs font-medium text-green-500 mb-1 flex items-center gap-1">
                  <Gift size={14} />
                  Reward Eksklusif
                </h4>
                <p className="text-[11px] text-gray-400">
                  Hadiah spesial untuk yang berprestasi
                </p>
              </div>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-gray-400 border-t border-gray-700 pt-3">
          <strong>Kesimpulan:</strong> Selain mendapat penghasilan, Anda bisa
          berkembang lebih jauh dalam ekosistem BERKAH ABADI dan ikut
          berkontribusi dalam kebaikan sosial.
        </p>
      </div>

      <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-3 flex gap-2">
        <button
          onClick={onClose}
          className="flex-1 py-2.5 px-4 rounded-lg border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
        >
          Tutup
        </button>
        <button
          onClick={onNext}
          className="flex-1 py-2.5 px-4 rounded-lg bg-green-700 text-white text-sm font-medium hover:bg-green-600 flex items-center justify-center gap-1.5 shadow-md"
        >
          Lanjutkan
          <ChevronRight size={16} />
        </button>
      </div>
    </>
  );
};

export default StepTwoContent;
