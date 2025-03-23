import { Info, CheckCircle, Zap, ChevronRight } from "lucide-react";

interface StepOneContentProps {
  onClose: () => void;
  onNext: () => void;
}

const StepOneContent = ({ onClose, onNext }: StepOneContentProps) => {
  return (
    <>
      <div className="px-4 pb-6 space-y-4 bg-gray-900 text-gray-300">
        <p className="text-sm text-gray-400">
          Sebelum bergabung, penting bagi Anda untuk memahami bagaimana sistem
          ini bekerja dan mengapa ini bukan MLM yang merugikan.
        </p>

        <div className="space-y-3">
          <div className="bg-gray-800 border-l-4 border-green-600 p-3 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-1.5 flex items-center gap-1.5">
              <Info size={16} />
              Sistem Afiliasi Satu Kaki
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Anda bisa mendapatkan komisi dari setiap produk yang Anda jual dan
              dari transaksi mitra langsung Anda. Tidak ada sistem piramida
              bertingkat.
            </p>
          </div>

          <div className="bg-gray-800 border-l-4 border-green-600 p-3 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-1.5 flex items-center gap-1.5">
              <CheckCircle size={16} />
              Produk Nyata
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Fokus pada penjualan Rokok DK – Drajat Karunia, rokok herbal
              alami. Tidak ada kewajiban stok minimum, sistem transparan.
            </p>
          </div>

          <div className="bg-gray-800 border-l-4 border-green-600 p-3 rounded-lg">
            <h3 className="text-sm font-semibold text-green-400 mb-1.5 flex items-center gap-1.5">
              <Zap size={16} />
              Bisnis Berkah
            </h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              Bukan skema cepat kaya. Keuntungan dari penjualan produk dan
              pembangunan jaringan yang wajar.
            </p>
          </div>
        </div>

        <div className="border border-gray-700 rounded-lg p-3">
          <h3 className="text-sm font-semibold text-gray-200 mb-2">
            Perbandingan Sistem
          </h3>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <h4 className="text-xs font-medium text-green-500 mb-1">
                Sistem Afiliasi DK
              </h4>
              <ul className="text-[11px] space-y-1 text-gray-400">
                <li>• Komisi langsung</li>
                <li>• Fokus produk</li>
                <li>• Tanpa stok minimum</li>
                <li>• Sistem transparan</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-gray-400 mb-1">
                MLM Konvensional
              </h4>
              <ul className="text-[11px] space-y-1 text-gray-500">
                <li>• Komisi bertingkat</li>
                <li>• Fokus rekrutmen</li>
                <li>• Wajib stok</li>
                <li>• Sistem kompleks</li>
              </ul>
            </div>
          </div>
        </div>

        <p className="text-[11px] text-gray-400 border-t border-gray-700 pt-3">
          <strong>Kesimpulan:</strong> Dapatkan komisi langsung dari penjualan
          pribadi dan mitra, tanpa sistem MLM bertingkat.
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

export default StepOneContent;
