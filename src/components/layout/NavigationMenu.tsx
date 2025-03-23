
import { Home, Package, User, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface NavigationMenuProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const NavigationMenu = ({ activeTab, setActiveTab }: NavigationMenuProps) => {
  const navigate = useNavigate();

  const handleNavigation = (tab: string, path: string) => {
    setActiveTab(tab);
    navigate(path);
  };

  return (
    <nav className="fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-[320px]">
      <div className="mx-auto backdrop-blur-xl bg-white/10 shadow-xl rounded-[20px] border border-white/20">
        <div className="flex justify-around items-center py-3 px-4">
          <button
            onClick={() => handleNavigation("home", "/")}
            className={`flex flex-col items-center ${activeTab === "home" ? "text-white" : "text-white/70 hover:text-white/90"}`}
          >
            <Home size={24} strokeWidth={2.5} />
            <span className="text-xs mt-1 font-medium">Home</span>
          </button>
          <button
            onClick={() => handleNavigation("about", "/about")}
            className={`flex flex-col items-center ${activeTab === "about" ? "text-white" : "text-white/70 hover:text-white/90"}`}
          >
            <Info size={24} strokeWidth={2.5} />
            <span className="text-xs mt-1 font-medium">About Us</span>
          </button>
          <button
            onClick={() => handleNavigation("products", "/products")}
            className={`flex flex-col items-center ${activeTab === "products" ? "text-white" : "text-white/70 hover:text-white/90"}`}
          >
            <Package size={24} strokeWidth={2.5} />
            <span className="text-xs mt-1 font-medium">Product</span>
          </button>
          <button
            onClick={() => handleNavigation("profile", "/profile")}
            className={`flex flex-col items-center ${activeTab === "profile" ? "text-white" : "text-white/70 hover:text-white/90"}`}
          >
            <User size={24} strokeWidth={2.5} />
            <span className="text-xs mt-1 font-medium">Profil</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavigationMenu;
