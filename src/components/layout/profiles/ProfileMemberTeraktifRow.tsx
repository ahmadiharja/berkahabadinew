import React from "react";
import { User } from "lucide-react";

interface MemberProps {
  name: string;
  mitra: number;
  totalTrx: number;
  komisi: number;
}

const ProfileMemberTeraktifRow = ({
  name,
  mitra,
  totalTrx,
  komisi,
}: MemberProps) => {
  return (
    <div className="flex items-center gap-3 p-2.5 border-b border-gray-800 last:border-0">
      <div className="w-11 h-11 bg-gradient-to-br from-green-900 to-green-950 rounded-xl flex items-center justify-center shrink-0">
        <User className="w-5 h-5 text-green-400" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <p className="font-semibold text-gray-100">{name}</p>
              <span className="px-1.5 py-0.5 bg-green-900/30 text-green-400 text-[10px] rounded-full font-medium">
                {mitra} Mitra
              </span>
            </div>
            <div className="flex items-center gap-1.5 mt-1">
              <p className="text-xs text-gray-400">Total Trx</p>
              <p className="text-xs font-medium text-gray-300">
                Rp {totalTrx.toLocaleString()}
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] uppercase tracking-wide text-gray-500 mb-0.5">
              Komisi Kita
            </p>
            <p className="font-semibold text-green-600">
              Rp {komisi.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMemberTeraktifRow;