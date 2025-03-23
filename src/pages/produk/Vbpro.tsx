import { useState } from "react";
import { Star, ChevronUp, ChevronDown } from "lucide-react";
import ProductImageOne from '../../assets/images/VB-PNS-12_bg1.jpg';
import daunpanda from '../../assets/images/komposisi/daunpanda.jpg';
import mesoyi from '../../assets/images/komposisi/mesoyi.jpg';
import madu from '../../assets/images/komposisi/madu.jpg';
import kencur from '../../assets/images/komposisi/kencur.jpg';
import kelambet from '../../assets/images/komposisi/kelambet.jpg';
import jintanhitam from '../../assets/images/komposisi/jintanhitam.jpg';
import jahemerah from '../../assets/images/komposisi/jahemerah.jpg';
import bungalawang from '../../assets/images/komposisi/bungalawang.jpg';
import keningar from '../../assets/images/komposisi/keningar.jpg';
import kayumanis from '../../assets/images/komposisi/kayumanis.jpg';
import kapulaga from '../../assets/images/komposisi/kapulaga.jpg';
import daunsalam from '../../assets/images/komposisi/daunsalam.jpg';



const Vbpro = () => {
  const [expandedAccordion, setExpandedAccordion] = useState(-1);

  const herbs = [
    {
      name: "Bunga Lawang",
      image: bungalawang,
    },
    {
      name: "Daun Pandan", 
      image: daunpanda,
    },
    {
      name: "Daun Salam",
      image: daunsalam,
    },
    {
      name: "Jahe Merah",
      image: jahemerah,
    },
    {
      name: "Jintan Hitam",
      image: jintanhitam,
    },
    {
      name: "Kapulaga",
      image: kapulaga,
    },
    {
      name: "Kayu Manis",
      image: kayumanis,
    },
    {
      name: "Kelambet",
      image: kelambet,
    },
    {
      name: "Kencur",
      image: kencur,
    },
    {
      name: "Keningar",
      image: keningar,
    },
    {
      name: "Mesoyi",
      image: mesoyi,
    },
    {
      name: "Madu",
      image: madu,
    }
  ];

  const benefits = [
    "Perut Nyaman & Imun Kuat dengan Kapulaga",
    "Redakan Nyeri & Hangatkan Tubuh dengan Jahe Merah dan Kencur", 
    "Relaksasi Alami dengan Bunga Lawang & Keningar",
    "Kontrol Gula & Tekanan Darah dengan Daun Salam & Pandan",
    "Tingkatkan Stamina & Daya Tahan dengan Madu Alami",
    "Dukung Imun & Lawan Peradangan dengan Jintan Hitam & Mesoyi",
  ];

  return (
    <div className="flex-1 overflow-y-auto pt-14 pb-20">
      {/* Product Header */}
      <div className="bg-gray-800 p-4 text-gray-100"> {/* Updated */}
        <div className="aspect-square max-w-sm mx-auto mb-4">
          <img
            src={ProductImageOne}
            alt="VBPRO NUSANTARA"
            className="w-full h-full object-contain"
          />
        </div>
        <h1 className="text-xl font-bold text-gray-100 mb-1">
          VBPRO NUSANTARA
        </h1>
        <div className="flex items-center gap-2 mb-2">
          <div className="flex text-yellow-400">
            {[1,2,3,4,5].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <span className="text-sm text-gray-300">(120 ulasan)</span>
        </div>
        <p className="text-sm text-gray-300 mb-4">
          Aromaterapi Herbal for medication and relaxation, terbuat dari 12
          bahan rempah pilihan
        </p>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-green-700">Rp 20.000</span>
            <span className="text-sm text-gray-300">/pack</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm font-semibold text-gray-700">Harga Slop</div>
              <div className="text-green-700 font-bold">Rp 200.000</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm font-semibold text-gray-700">Harga Grosir</div>
              <div className="text-green-700 font-bold">Rp 200.000</div>
            </div>
          </div>
        </div>
      </div>

      {/* Herbs Section */}
      <div className="mt-2 bg-gray-800 p-4 text-gray-100"> {/* Updated */}
        <h2 className="text-lg font-bold mb-4">12 REMPAH PILIHAN</h2>
        <div className="grid grid-cols-4 gap-3">
          {herbs.map((herb, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-full aspect-square rounded-lg overflow-hidden bg-gray-100 mb-1">
                <img
                  src={herb.image}
                  alt={herb.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] text-center text-gray-300">{herb.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Accordion */}
      <div className="mt-2 bg-gray-800 p-4 text-gray-100"> {/* Updated */}
        <h2 className="text-lg font-bold mb-4">MANFAAT</h2>
        <div className="space-y-2">
          {benefits.map((benefit, index) => (
            <div key={index} className="border rounded-lg overflow-hidden">
              <button
                className="w-full p-3 flex justify-between items-center bg-gray-700 text-gray-100"
                onClick={() =>
                  setExpandedAccordion(
                    expandedAccordion === index ? -1 : index
                  )
                }
              >
                <span className="text-sm font-medium text-left w-full">{benefit}</span>
                {expandedAccordion === index ? (
                  <ChevronUp className="w-5 h-5 text-gray-300" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-300" />
                )}
              </button>
              {expandedAccordion === index && (
                <div className="p-3 bg-gray-700 text-gray-100 border-t">
                  <p className="text-sm text-gray-300">
                    {[
                      "Mengandung kapulaga yang membantu meredakan gangguan pencernaan dan mual, serta meningkatkan sistem kekebalan tubuh.",
                      "Jahe merah dan kencur membantu meredakan nyeri sendi dan otot, serta memberikan efek menghangatkan tubuh.",
                      "Kombinasi bunga lawang dan keningar membantu merilekskan pikiran dan memberikan ketenangan alami.",
                      "Daun salam dan daun pandan membantu mengontrol kadar gula darah dan tekanan darah.",
                      "Madu alami memberikan nutrisi dan antioksidan untuk meningkatkan stamina dan daya tahan tubuh.",
                      "Jintan hitam dan mesoyi membantu meningkatkan sistem imun dan memiliki sifat anti-inflamasi.",
                    ][index]}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Gallery Section */}
      <div className="mt-2 bg-gray-800 p-4 text-gray-100"> {/* Updated */}
        <h2 className="text-lg font-bold mb-4">GALLERY PRODUK</h2>
        <div className="grid grid-cols-3 gap-2">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="aspect-square rounded-lg overflow-hidden shadow-sm">
              <img
                src={`https://placehold.co/300x300?text=Produk+${item}`}
                alt={`Product ${item}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mt-2 bg-gray-800 p-4 text-gray-100 mb-24"> {/* Updated */}
        <h2 className="text-lg font-bold mb-4">TESTIMONI PEMBELI</h2>
        <div className="space-y-4">
          {[
            {
              name: "Ahmad Rizki",
              rating: 5,
              date: "20 Jan 2024",
              comment: "Produknya sangat berkualitas, aromanya enak dan membantu tidur lebih nyenyak. Pengiriman juga cepat!",
              image: "https://placehold.co/100x100?text=Product"
            },
            {
              name: "Siti Nurhaliza",
              rating: 5,
              date: "18 Jan 2024",
              comment: "Sudah 2 minggu menggunakan produk ini, badan terasa lebih segar dan stamina meningkat. Recommended!",
              image: "https://placehold.co/100x100?text=Product"
            },
            {
              name: "Budi Santoso",
              rating: 4,
              date: "15 Jan 2024",
              comment: "Packaging rapi dan aman, kualitas produk sesuai deskripsi. Harga sebanding dengan manfaatnya.",
              image: "https://placehold.co/100x100?text=Product"
            }
          ].map((review, index) => (
            <div key={index} className="border rounded-lg p-3">
              <div className="flex gap-3">
                <img
                  src={review.image}
                  alt="Product"
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-sm text-gray-100">{review.name}</h3>
                      <div className="flex text-yellow-400">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-3 h-3 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                    <span className="text-xs text-gray-300">{review.date}</span>
                  </div>
                  <p className="text-sm text-gray-300 mt-2">{review.comment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vbpro;