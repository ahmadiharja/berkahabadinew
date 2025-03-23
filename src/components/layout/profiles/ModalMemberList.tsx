import React, { useState } from "react";
import {
  Search,
  X,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProfileMemberTeraktifRow from "./ProfileMemberTeraktifRow";

interface Member {
  name: string;
  mitra: number;
  totalTrx: number;
  komisi: number;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  members: Member[];
}

const ModalMemberList = ({
  isOpen,
  onClose,
  members: initialMembers,
}: ModalProps) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"mitra" | "totalTrx" | "komisi">(
    "mitra",
  );
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredAndSortedMembers = [...initialMembers]
    .filter((member) =>
      member.name.toLowerCase().includes(searchQuery.toLowerCase()),
    )
    .sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      return (a[sortBy] - b[sortBy]) * order;
    });

  const totalPages = Math.ceil(filteredAndSortedMembers.length / itemsPerPage);
  const paginatedMembers = filteredAndSortedMembers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  const toggleSort = (field: "mitra" | "totalTrx" | "komisi") => {
    if (sortBy === field) {
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    } else {
      setSortBy(field);
      setSortOrder("desc");
    }
    setCurrentPage(1);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-center z-[9999] animate-fade-in overflow-hidden">
      <div className="bg-gray-900 w-full rounded-t-2xl animate-slide-up max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-gray-900 rounded-t-2xl border-b border-gray-800 z-10">
          <div className="p-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-100">Daftar Member</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-800 rounded-lg text-gray-400"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="px-4 pb-4">
            <div className="relative mb-4">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Cari member..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-100 placeholder-gray-500"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
              />
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => toggleSort("mitra")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                  sortBy === "mitra"
                    ? "bg-green-900/50 text-green-400"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                Jumlah Mitra
                <ArrowUpDown className="w-3 h-3" />
              </button>
              <button
                onClick={() => toggleSort("totalTrx")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                  sortBy === "totalTrx"
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50"
                }`}
              >
                Total Transaksi
                <ArrowUpDown className="w-3 h-3" />
              </button>
              <button
                onClick={() => toggleSort("komisi")}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm ${
                  sortBy === "komisi"
                    ? "bg-green-50 text-green-700"
                    : "bg-gray-50"
                }`}
              >
                Komisi
                <ArrowUpDown className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          {paginatedMembers.map((member, index) => (
            <ProfileMemberTeraktifRow key={index} {...member} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="sticky bottom-0 bg-gray-900 border-t border-gray-800 p-4 flex items-center justify-between">
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm bg-green-900/50 text-green-400 disabled:opacity-50 hover:bg-green-900/70"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </button>
            <span className="text-sm text-gray-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm bg-green-900/50 text-green-400 disabled:opacity-50 hover:bg-green-900/70"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ModalMemberList;
