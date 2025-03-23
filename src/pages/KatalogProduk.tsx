
import { useState } from "react";
import ProductHeader from "../components/layout/ProductHeader";
import ProductSidebar from "../components/layout/ProductSidebar";
import ProductCTA from "../components/layout/ProdukCTA";
import Vbpro from "./produk/Vbpro";
import Drajatkarunia from "./produk/Drajatkarunia";
import RokokSection from "./produk/RokokSection";

const KatalogProduk = () => {
  const [activeProduct, setActiveProduct] = useState("VBPRO");
  const [activeTab, setActiveTab] = useState("katalog");

  const renderProductContent = () => {
    switch (activeProduct) {
      case "VBPRO":
        return <Vbpro />;
      case "HERBAL":
        return <Drajatkarunia />;
      case "ROKOK":
        return <RokokSection />;
      default:
        return (
          <div className="p-4">
            <h1>Coming Soon</h1>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <ProductHeader activeProduct={activeProduct} />
      <ProductSidebar 
        activeProduct={activeProduct}
        setActiveProduct={setActiveProduct}
        setActiveTab={setActiveTab}
      />
      {activeProduct !== "ROKOK" && activeProduct !== "OTHER" && <ProductCTA />}
      
      <div className="flex-1 overflow-y-auto ml-20 bg-gray-900">
        {renderProductContent()}
      </div>
    </div>
  );
};

export default KatalogProduk;
