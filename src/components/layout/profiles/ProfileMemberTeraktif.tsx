import React, { useState } from "react";
import ProfileMemberTeraktifRow from "./ProfileMemberTeraktifRow";
import ModalMemberList from "./ModalMemberList";

const members = [
  { name: "Ilzam F.", mitra: 10, totalTrx: 750000, komisi: 75000 },
  { name: "Ahmad S.", mitra: 15, totalTrx: 1250000, komisi: 125000 },
  { name: "Budi W.", mitra: 8, totalTrx: 500000, komisi: 50000 },
  { name: "Deni R.", mitra: 20, totalTrx: 2000000, komisi: 200000 },
  { name: "Eva M.", mitra: 12, totalTrx: 900000, komisi: 90000 },
  { name: "Fajar K.", mitra: 18, totalTrx: 1500000, komisi: 150000 },
  { name: "Gita P.", mitra: 25, totalTrx: 2500000, komisi: 250000 },
  { name: "Hadi S.", mitra: 14, totalTrx: 1100000, komisi: 110000 },
  { name: "Indah L.", mitra: 16, totalTrx: 1300000, komisi: 130000 },
  { name: "Joko W.", mitra: 22, totalTrx: 1800000, komisi: 180000 },
  { name: "Kartika R.", mitra: 19, totalTrx: 1600000, komisi: 160000 },
  { name: "Linda S.", mitra: 13, totalTrx: 950000, komisi: 95000 },
  { name: "Sudrajat", mitra: 3, totalTrx: 350000, komisi: 35000 },
  { name: "Sindy", mitra: 5, totalTrx: 220000, komisi: 22000 },
  { name: "Budi", mitra: 15, totalTrx: 135000, komisi: 13500 },
  { name: "Indra", mitra: 2, totalTrx: 120000, komisi: 12000 },
];

const ProfileMemberTeraktif = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="px-6 py-4">
      <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-100">Member Teraktif</h3>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="text-green-600 text-sm hover:text-green-700"
        >
          View All
        </button>
      </div>

      <div className="space-y-4">
        {members.slice(0, 5).map((member, index) => (
          <ProfileMemberTeraktifRow
            key={index}
            {...member}
          />
        ))}
      </div>
    </div>
    <ModalMemberList
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      members={members}
    />
  </div>
  );
};

export default ProfileMemberTeraktif;