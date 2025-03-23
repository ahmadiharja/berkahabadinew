import React, { useState } from "react";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Clock,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import ModalTransaksi from "./ModalTransaksi";
import ProfileRiwayatTransaksiRow from "./ProfileRiwayatTransaksiRow";

const transactions = [
  {
    type: "Penarikan Dana",
    id: "TRX-123456",
    date: "20 Dec 2023, 14:30",
    amount: 1500000,
    status: "Success",
    icon: ArrowUpRight,
  },
  {
    type: "Deposit",
    id: "TRX-123457",
    date: "19 Dec 2023, 10:15",
    amount: 2000000,
    status: "Pending",
    icon: ArrowDownLeft,
  },
  {
    type: "Komisi Affiliate",
    id: "TRX-123458",
    date: "18 Dec 2023, 09:45",
    amount: 750000,
    icon: Clock,
  },
];

const ProfileRiwayatTransaksi = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="px-6 py-4">
      <div className="bg-gray-900 rounded-xl shadow-lg border border-gray-800 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-100">
            Riwayat Transaksi
          </h3>
          <button 
            onClick={() => setShowModal(true)}
            className="text-green-400 text-sm hover:text-green-300 transition-colors flex items-center gap-1">
            View All <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-2">
          {transactions.slice(0, isExpanded ? undefined : 3).map((transaction, index) => (
            <ProfileRiwayatTransaksiRow key={index} {...transaction} />
          ))}
        </div>

        {transactions.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full mt-4 flex items-center justify-center gap-1 text-sm text-gray-400 hover:text-gray-300"
          >
            {isExpanded ? "Show Less" : "Show More"}
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-180" : ""}`} />
          </button>
        )}
      </div>
      {showModal && (
        <ModalTransaksi
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          transactions={transactions}
        />
      )}
    </div>
  );
};

export default ProfileRiwayatTransaksi;