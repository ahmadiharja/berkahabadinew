import React from "react";

const ProfileStatistik = () => {
  return (
    <div className="flex justify-between px-6 py-4 bg-gray-900 -mt-4 mx-4 rounded-xl shadow-lg border border-gray-800">
      <div className="text-center">
        <p className="text-green-600 font-bold">5.000.000</p>
        <p className="text-sm text-gray-600">Total Komisi</p>
      </div>
      <div className="text-center border-x px-4">
        <p className="text-green-600 font-bold">325 Mitra</p>
        <p className="text-sm text-gray-600">Total Mitra</p>
      </div>
      <div className="text-center">
        <p className="text-green-600 font-bold">5.000.000</p>
        <p className="text-sm text-gray-600">Total Donasi</p>
      </div>
    </div>
  );
};

export default ProfileStatistik;