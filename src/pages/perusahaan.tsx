
import React from "react";
import { ChevronDown } from "lucide-react";

const CompanyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-primary)] pt-14">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-900 to-green-950 text-white p-8 shadow-lg">
        <div className="max-w-3xl mx-auto text-center">
          <img
            src="/company-logo.png"
            alt="Logo Perusahaan"
            className="h-24 w-auto mx-auto mb-6"
          />
          <h1 className="text-3xl font-bold mb-4">Nama Perusahaan</h1>
          <p className="text-green-100">Membangun Masa Depan yang Lebih Sehat</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="flex-1 px-4 py-8 space-y-8 max-w-3xl mx-auto w-full">
        {/* Introduction */}
        <section className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-white/10">
          <div className="border-l-4 border-green-500 pl-4">
            <h2 className="text-2xl font-bold text-white mb-4">Pendahuluan</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            Kami adalah perusahaan yang berkomitmen untuk menghadirkan produk berkualitas
            dengan mengedepankan nilai-nilai kesehatan dan keberlanjutan. Berdiri sejak
            tahun 2020, kami telah melayani ribuan pelanggan setia di seluruh Indonesia.
          </p>
        </section>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-6">
          <section className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-green-300 text-xl">V</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Visi</h2>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Menjadi perusahaan terdepan dalam industri herbal dan kesehatan yang
              mengutamakan kualitas dan inovasi untuk kesejahteraan masyarakat Indonesia.
            </p>
          </section>

          <section className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-white/10">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-green-900 rounded-full flex items-center justify-center">
                <span className="text-green-300 text-xl">M</span>
              </div>
              <h2 className="text-2xl font-bold text-white">Misi</h2>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Menghadirkan produk herbal berkualitas tinggi
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Mendukung kesejahteraan mitra dan karyawan
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Berkontribusi pada pembangunan ekonomi nasional
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                Mengedepankan inovasi dalam pengembangan produk
              </li>
            </ul>
          </section>
        </div>

        {/* Programs */}
        <section className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Program-Program</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-4 rounded-lg bg-green-900/30 hover:bg-green-900/50 transition-colors">
              <h3 className="font-semibold text-lg text-green-300 mb-2">
                Program Pemberdayaan Mitra
              </h3>
              <p className="text-gray-300">
                Memberikan pelatihan dan pendampingan bagi mitra untuk mengembangkan
                bisnis mereka secara berkelanjutan.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-900/30 hover:bg-green-900/50 transition-colors">
              <h3 className="font-semibold text-lg text-green-300 mb-2">
                Program Edukasi Kesehatan
              </h3>
              <p className="text-gray-300">
                Menyelenggarakan seminar dan workshop tentang manfaat produk herbal
                dan gaya hidup sehat.
              </p>
            </div>
            <div className="p-4 rounded-lg bg-green-900/30 hover:bg-green-900/50 transition-colors">
              <h3 className="font-semibold text-lg text-green-300 mb-2">
                Program Sosial
              </h3>
              <p className="text-gray-300">
                Memberikan bantuan sosial dan mendukung kegiatan-kegiatan
                kemasyarakatan.
              </p>
            </div>
          </div>
        </section>

        {/* Religious Leaders Views */}
        <section className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Pandangan Tokoh Agama
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800/50 rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center">
                  <img
                    src={`/tokoh-${item}.jpg`}
                    alt={`Tokoh ${item}`}
                    className="w-20 h-20 rounded-full object-cover border-4 border-green-900 mb-4"
                  />
                  <h3 className="font-semibold text-white mb-2">KH. Ahmad Subandi</h3>
                  <p className="text-sm text-gray-300">
                    "Produk herbal yang halal dan berkualitas sangat penting untuk
                    kesehatan umat. Perusahaan ini telah membuktikan komitmennya."
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Gallery */}
        <section className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Galeri Kami
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="aspect-square rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
              >
                <img
                  src={`/gallery-${item}.jpg`}
                  alt={`Gallery ${item}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            ))}
          </div>
          <div className="mt-8 relative">
            <div className="overflow-x-auto hide-scrollbar">
              <div className="flex gap-4 p-2">
                {[1, 2, 3, 4, 5].map((index) => (
                  <div key={index} className="flex-none w-full md:w-[600px]">
                    <div className="aspect-video rounded-lg overflow-hidden shadow-lg bg-gray-800/50">
                      <video
                        controls
                        className="w-full h-full object-cover"
                        poster={`/video-thumbnail-${index}.jpg`}
                      >
                        <source src={`/company-video-${index}.mp4`} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <p className="text-center mt-2 text-green-300 font-medium">
                      Company Video {index}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[var(--bg-primary)] to-transparent w-12 pointer-events-none"/>
            <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-[var(--bg-primary)] to-transparent w-12 pointer-events-none"/>
          </div>
        </section>
        {/* Contact Section */}
        <section className="bg-gray-900/50 backdrop-blur-xl rounded-xl p-6 shadow-xl hover:shadow-2xl transition-shadow border border-white/10">
          <div className="border-l-4 border-green-500 pl-4">
            <h2 className="text-2xl font-bold text-white mb-4">Hubungi Kami</h2>
          </div>
          <div className="space-y-4 text-gray-300">
            <p className="flex items-start gap-2">
              <span className="flex-shrink-0">📍</span>
              <span>Jl. Kutilang 159 RT 002 RW 003, Desa Lamong, Kec.Badas, Kab. Kediri, Jawa Timur</span>
            </p>
            <p className="flex items-center gap-2">
              <span>📱</span>
              <a href="tel:+6282288332332" className="hover:text-green-400">+62 822 8833 2332</a>
            </p>
            <p className="flex items-center gap-2">
              <span>📧</span>
              <a href="mailto:okegasindonesiaemas@gmail.com" className="hover:text-green-400">okegasindonesiaemas@gmail.com</a>
            </p>
            <p className="flex items-center gap-2">
              <span>🕒</span>
              <span>Senin - Jumat: 09:00 - 17:00 WIB</span>
            </p>
          </div>
        </section>

        {/* Add padding at bottom to prevent content from being hidden by navigation menu */}
        <div className="pb-24"></div>
      </div>
    </div>
  );
};

export default CompanyPage;
