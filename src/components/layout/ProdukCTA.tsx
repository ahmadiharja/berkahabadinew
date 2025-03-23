
const ProductCTA = () => {
  return (
    <div className="fixed bottom-0 left-20 right-0 bg-gray-900 border-t border-green-900 flex shadow-lg">
      <button className="flex-1 py-4 text-sm font-medium bg-gray-800 text-gray-100 active:bg-gray-700">
        Tambah Keranjang
      </button>
      <button className="flex-1 py-4 text-sm font-medium bg-green-800 text-gray-100 active:bg-green-900">
        Beli Langsung
      </button>
    </div>
  );
};

export default ProductCTA;
