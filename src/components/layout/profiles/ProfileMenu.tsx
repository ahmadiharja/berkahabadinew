
import React from "react";
import { Package, ShoppingCart, Gift, Home, Megaphone } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface MenuItemProps {
  icon: React.ElementType;
  label: string;
  path?: string;
}

const MenuItem = ({ icon: Icon, label, path }: MenuItemProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center gap-2 cursor-pointer group"
      onClick={() => path && navigate(path)}
    >
      <div className="p-3 bg-gray-800 rounded-xl group-hover:bg-gray-700 transition-colors">
        <Icon className="w-6 h-6 text-green-400" />
      </div>
      <span className="text-sm text-gray-300 group-hover:text-gray-100 transition-colors">{label}</span>
    </div>
  );
};

const ProfileMenu = () => {
  return (
    <div className="grid grid-cols-4 gap-4 px-6 py-8">
      <MenuItem icon={ShoppingCart} label="Keranjang" path="/profile/cart" />
      <MenuItem icon={Gift} label="Bonus" path="/profile/bonus" />
      <MenuItem icon={Home} label="Yayasan" path="/profile/yayasan" />
      <MenuItem icon={Megaphone} label="Promosi" path="/profile/promosi" />
    </div>
  );
};

export default ProfileMenu;
