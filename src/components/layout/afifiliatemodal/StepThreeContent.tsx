import { useState } from "react";
import { UserPlus, Send } from "lucide-react";

interface StepThreeContentProps {
  onClose: () => void;
  onNext: () => void;
}

const StepThreeContent = ({ onClose, onNext }: StepThreeContentProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [form, setForm] = useState({
    username: "",
    fullName: "",
    ktp: "",
    whatsapp: "",
    email: "",
    password: "",
    confirmPassword: "",
    province: "",
    city: "",
    district: "",
    address: "",
    otp: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate loading for 2 seconds
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);

      // Close modal after showing success
      setTimeout(() => {
        onNext();
      }, 2000);
    }, 2000);
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60]">
          <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full"></div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-[60]">
          <div className="bg-gray-900 border border-green-700 rounded-xl p-6 m-4 max-w-sm w-full text-center shadow-lg shadow-green-900/30">
            <div className="text-green-500 text-xl font-semibold">
              Selamat Bergabung di Keluarga PT Berkah Abadi
            </div>
          </div>
        </div>
      )}

      <div className="px-4 pb-6 space-y-4 bg-gray-900 text-gray-300">
        <div className="space-y-2">
          <p className="text-sm text-gray-400">
            Silakan lengkapi data berikut untuk memulai kemitraan Anda dengan DK
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Username<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Masukkan username"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nama Lengkap<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Sesuai KTP"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Nomor KTP<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="16 digit"
                maxLength={16}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                WhatsApp<span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                placeholder="08xxxxxxxxxx"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Email<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Min. 8 karakter"
                minLength={8}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Konfirmasi Password<span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                placeholder="Ulangi password"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Provinsi<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Pilih Provinsi</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Kabupaten/Kota<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Pilih Kabupaten/Kota</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Kecamatan<span className="text-red-500">*</span>
              </label>
              <select
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                required
              >
                <option value="">Pilih Kecamatan</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Alamat Lengkap<span className="text-red-500">*</span>
              </label>
              <textarea
                placeholder="Alamat lengkap"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                rows={3}
                required
              />
            </div>

            <div className="flex gap-2">
              <div className="flex-1">
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  Kode OTP<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Masukkan kode OTP"
                  className="w-full px-3 py-2 bg-gray-800 border border-gray-700 text-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  required
                />
              </div>
              <button
                type="button"
                className="px-4 py-2 mt-6 bg-gray-800 border border-gray-700 text-gray-300 rounded-lg hover:bg-gray-700 flex items-center gap-1"
              >
                <Send size={16} />
                Kirim OTP
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="sticky bottom-0 bg-gray-900 border-t border-gray-700 p-3 flex gap-2">
        <button
          onClick={onClose}
          className="flex-1 py-2.5 px-4 rounded-lg border border-gray-700 text-sm font-medium text-gray-300 hover:bg-gray-800"
        >
          Batal
        </button>
        <button
          onClick={handleSubmit}
          className="flex-1 py-2.5 px-4 rounded-lg bg-green-700 text-white text-sm font-medium hover:bg-green-600 shadow-md"
        >
          Daftar Sekarang
        </button>
      </div>
    </>
  );
};

export default StepThreeContent;
