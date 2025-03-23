import { useState } from "react";
import { User, ShoppingCart, Home, ChevronDown, ChevronUp, Star } from "lucide-react";

const ProductsPage = () => {
  const [activeProduct, setActiveProduct] = useState("VBPRO");
  const [expandedAccordion, setExpandedAccordion] = useState(-1);

  const products = [
    { id: "VBPRO", name: "VBPRO NUSANTARA" },
    { id: "HERBAL", name: "DRAJAT KARUNIA" },
    { id: "ROKOK", name: "ROKOK" },
    { id: "OTHER", name: "PRODUK LAINNYA" }
  ];

  const herbs = [
    {
      name: "Bunga Lawang",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Daun Pandan",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Daun Salam",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Jahe Merah",
      image: "https://placehold.co/100x100", 
    },
    {
      name: "Jintan Hitam",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Kapulaga",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Kayu Manis",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Kelambet",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Kencur",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Keningar",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Mesoyi",
      image: "https://placehold.co/100x100",
    },
    {
      name: "Madu",
      image: "https://placehold.co/100x100",
    }
  ];

  const benefits = [
    "Benefit Title Accordion 1",
    "Benefit Title Accordion 2",
    "Benefit Title Accordion 3",
    "Benefit Title Accordion 4",
    "Benefit Title Accordion 5",
    "Benefit Title Accordion 6",
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-20 fixed left-0 top-0 bottom-0 bg-white shadow-lg z-40 flex flex-col">
        {/* Profile at top */}
        <button className="w-full p-4 flex flex-col items-center border-b">
          <User className="w-8 h-8 text-gray-600" />
          <span className="text-[10px] mt-1 text-center font-medium">Profile</span>
        </button>

        {/* Products in middle */}
        <div className="flex-1 flex flex-col justify-center">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setActiveProduct(product.id)}
              className={`w-full p-2 flex flex-col items-center justify-center h-24 border-b ${
                activeProduct === product.id ? 'bg-green-50 border-r-4 border-r-green-600' : ''
              }`}
            >
              <div className="w-10 h-10 bg-gray-100 rounded-full mb-1" />
              <span className="text-[10px] text-center font-medium">
                {product.name}
              </span>
            </button>
          ))}
        </div>

        {/* Home at bottom */}
        <button 
          onClick={() => window.location.href = '/'}
          className="w-full p-4 flex flex-col items-center border-t"
        >
          <Home className="w-8 h-8 text-gray-600" />
          <span className="text-[10px] mt-1 text-center font-medium">Home</span>
        </button>
      </div>

      {/* Mobile Navigation Bar */}
      <div className="fixed top-0 left-20 right-0 h-14 bg-white shadow-sm z-50 flex items-center justify-between px-4">
        <Home className="text-green-700 w-6 h-6" />
        <h1 className="text-lg font-semibold">{activeProduct}</h1>
        <ShoppingCart className="text-green-700 w-6 h-6" />
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto pt-14 pb-20 ml-20">
        {/* Product Header */}
        <div className="bg-white p-4">
          <div className="aspect-square max-w-sm mx-auto mb-4">
            <img
              src="/box-image.jpg"
              alt="VBPRO NUSANTARA"
              className="w-full h-full object-contain"
            />
          </div>
          <h1 className="text-xl font-bold text-gray-800 mb-1">
            VBPRO NUSANTARA
          </h1>
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400">
              {[1,2,3,4,5].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm text-gray-500">(120 ulasan)</span>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Aromaterapi Herbal for medication and relaxation, terbuat dari 12
            bahan rempah pilihan
          </p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold text-green-700">Rp 20.000</span>
              <span className="text-sm text-gray-500">/pack</span>
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
        <div className="mt-2 bg-white p-4">
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
                <span className="text-[10px] text-center text-gray-600">{herb.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Accordion */}
        <div className="mt-2 bg-white p-4">
          <h2 className="text-lg font-bold mb-4">MANFAAT</h2>
          <div className="space-y-2">
            {benefits.map((benefit, index) => (
              <div key={index} className="border rounded-lg overflow-hidden">
                <button
                  className="w-full p-3 flex justify-between items-center bg-gray-50"
                  onClick={() =>
                    setExpandedAccordion(
                      expandedAccordion === index ? -1 : index
                    )
                  }
                >
                  <span className="text-sm font-medium">{benefit}</span>
                  {expandedAccordion === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500" />
                  )}
                </button>
                {expandedAccordion === index && (
                  <div className="p-3 bg-white border-t">
                    <p className="text-sm text-gray-600">
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
        <div className="mt-2 bg-white p-4">
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
        <div className="mt-2 bg-white p-4 mb-24">
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
                        <h3 className="font-medium text-sm">{review.name}</h3>
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-xs text-gray-500">{review.date}</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">{review.comment}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-20 right-0 bg-white border-t flex shadow-lg">
        <button className="flex-1 py-4 text-sm font-medium bg-gray-50 active:bg-gray-100">
          Tambah Keranjang
        </button>
        <button className="flex-1 py-4 text-sm font-medium bg-green-600 text-white active:bg-green-700">
          Beli Langsung
        </button>
      </div>
    </div>
  );
};

export default ProductsPage;