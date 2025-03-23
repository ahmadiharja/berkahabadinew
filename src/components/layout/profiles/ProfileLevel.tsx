import React from "react";
import { Star } from "lucide-react";

const ProfileLevel = () => {
  const currentValue = 325;
  const maxValue = 1000;
  const progress = (currentValue / maxValue) * 100;

  return (
    <div className="px-6 py-4">
      <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4">
        <div className="relative pt-3 pb-6">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <div
              style={{ width: `${progress}%` }}
              className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full relative"
            />
          </div>

          <div className="absolute -top-1 left-[32.5%] transform -translate-x-1/2">
            <div className="relative">
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-md">
                {currentValue}
                <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-green-600 rotate-45" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between mt-1">
          <div>
            <p className="text-sm font-medium text-gray-100">Regular</p>
            <p className="text-xs text-gray-400">1 mitra</p>
          </div>
          <div className="text-right">
            <p className="text-sm font-medium text-gray-100">Ambassador</p>
            <p className="text-xs text-gray-400">1000 mitra</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileLevel;
