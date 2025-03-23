
import React from "react";
import { Settings, Bell, Info } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="bg-gradient-to-b from-green-950 to-gray-900 text-gray-100 p-6 rounded-b-[2rem]">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <img
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&h=150&fit=crop"
            alt="Profile"
            className="w-12 h-12 rounded-full ring-2 ring-green-500/30"
          />
          <h2 className="text-xl font-semibold text-gray-100">Ahmadi H.</h2>
        </div>
        <div className="flex gap-4">
          <Settings className="w-6 h-6 cursor-pointer text-gray-300 hover:text-white transition-colors" />
          <Bell className="w-6 h-6 cursor-pointer text-gray-300 hover:text-white transition-colors" />
        </div>
      </div>

      <div className="mb-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="text-sm text-gray-300">Saldo kamu</span>
          <Info className="w-4 h-4 text-gray-400" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-green-400">Rp 20.000.000</h1>
        <div className="flex gap-3 justify-center">
          <button className="px-6 py-2 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            Withdraw
          </button>
          <button className="px-6 py-2 border border-green-500 text-green-400 rounded-full hover:bg-green-500 hover:text-white transition-colors duration-300">
            Deposit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
