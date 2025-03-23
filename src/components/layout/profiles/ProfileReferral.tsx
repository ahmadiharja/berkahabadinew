
import React from "react";
import { Share2, Copy, Users, TrendingUp, DollarSign } from "lucide-react";

const ProfileReferral = () => {
  return (
    <div className="px-6 py-4">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-5 rounded-2xl border border-gray-700">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-gray-100">
              Bangun Tim Bersama
            </h3>
            <p className="text-sm text-gray-400 mt-0.5">
              Ajak teman & raih keuntungan lebih
            </p>
          </div>
          <button className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center shadow-sm hover:bg-gray-600 transition-colors">
            <Share2 className="w-4 h-4 text-green-400" />
          </button>
        </div>

        <div className="bg-gray-800 rounded-xl p-3.5 flex items-center justify-between mb-5 shadow-sm border border-gray-700">
          <span className="font-mono text-lg font-bold text-green-400">BYGHK3</span>
          <button className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
            <Copy className="w-4 h-4 text-green-400" />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-700">
            <div className="w-7 h-7 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
              <Users className="w-4 h-4 text-green-400" />
            </div>
            <p className="font-bold text-green-400">250k</p>
            <p className="text-xs text-gray-400">Total Klik</p>
          </div>
          
          <div className="bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-700">
            <div className="w-7 h-7 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
              <TrendingUp className="w-4 h-4 text-green-400" />
            </div>
            <p className="font-bold text-green-400">350</p>
            <p className="text-xs text-gray-400">Konversi</p>
          </div>
          
          <div className="bg-gray-800 p-3 rounded-xl shadow-sm border border-gray-700">
            <div className="w-7 h-7 bg-gray-700 rounded-lg flex items-center justify-center mb-2">
              <DollarSign className="w-4 h-4 text-green-400" />
            </div>
            <p className="font-bold text-green-400">12.5M</p>
            <p className="text-xs text-gray-400">Komisi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileReferral;
