import React from "react";

interface YayasanCardProps {
  image: string;
  name: string;
  address: string;
  phone: string;
  website: string;
  totalDonation: number;
}

const ProfileYayasanCard: React.FC<YayasanCardProps> = ({
  image,
  name,
  address,
  phone,
  website,
  totalDonation,
}) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-md border border-gray-700 overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-gray-200">{name}</h3>
        <div className="space-y-2 text-sm text-gray-400">
          <p className="flex items-start gap-2">
            <span className="font-medium min-w-20 text-gray-300">Alamat:</span>
            <span>{address}</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-medium min-w-20 text-gray-300">Telepon:</span>
            <span>{phone}</span>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-medium min-w-20 text-gray-300">Website:</span>
            <a
              href={website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 hover:text-green-400 hover:underline"
            >
              {website}
            </a>
          </p>
          <p className="flex items-start gap-2">
            <span className="font-medium min-w-20 text-gray-300">Donasi:</span>
            <span className="text-green-500 font-semibold">
              Rp {totalDonation.toLocaleString("id-ID")}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileYayasanCard;
