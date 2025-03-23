
import React from "react";
import { LucideIcon } from "lucide-react";

interface TransactionProps {
  type: string;
  id: string;
  date: string;
  amount: number;
  status?: string;
  icon: LucideIcon;
}

const ProfileRiwayatTransaksiRow = ({
  type,
  id,
  date,
  amount,
  status,
  icon: Icon,
}: TransactionProps) => {
  return (
    <div className="flex gap-3 p-2.5 border-b border-gray-800 last:border-0">
      <div className="w-10 h-[4.5rem] bg-green-900/30 rounded-lg flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5 text-green-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="space-y-1">
            <p className="font-medium text-sm text-gray-100 truncate">{type}</p>
            <p className="text-xs text-gray-400 truncate">{id}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
          <div className="text-right">
            <p className="font-medium text-sm text-gray-100">
              Rp {amount.toLocaleString()}
            </p>
            {status && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-gray-50 text-gray-600 uppercase mt-1 inline-block">
                {status}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileRiwayatTransaksiRow;
