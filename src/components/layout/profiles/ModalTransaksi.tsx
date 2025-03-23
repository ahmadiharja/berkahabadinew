
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, ArrowUpRight, ArrowDownLeft, Clock, ShoppingCart, Heart } from "lucide-react";
import ProfileRiwayatTransaksiRow from "./ProfileRiwayatTransaksiRow";

const dummyTransactions = [
  {
    type: "Deposit",
    id: "TRX-D12345",
    date: "20 Dec 2023, 14:30",
    amount: 1500000,
    status: "Success",
    icon: ArrowDownLeft,
  },
  {
    type: "Withdraw",
    id: "TRX-W12346",
    date: "19 Dec 2023, 10:15",
    amount: 2000000,
    status: "Pending",
    icon: ArrowUpRight,
  },
  {
    type: "Komisi Affiliate",
    id: "TRX-K12347",
    date: "18 Dec 2023, 09:45",
    amount: 750000,
    status: "Success",
    icon: Clock,
  },
  {
    type: "Pembelian",
    id: "TRX-P12348",
    date: "17 Dec 2023, 16:20",
    amount: 450000,
    status: "Success",
    icon: ShoppingCart,
  },
  {
    type: "Donasi",
    id: "TRX-N12349",
    date: "16 Dec 2023, 13:10",
    amount: 100000,
    status: "Success",
    icon: Heart,
  },
  {
    type: "Deposit",
    id: "TRX-D12350",
    date: "15 Dec 2023, 11:05",
    amount: 1000000,
    status: "Success",
    icon: ArrowDownLeft,
  },
  {
    type: "Komisi Affiliate",
    id: "TRX-K12351",
    date: "14 Dec 2023, 15:45",
    amount: 850000,
    status: "Success",
    icon: Clock,
  },
  {
    type: "Pembelian",
    id: "TRX-P12352",
    date: "13 Dec 2023, 09:30",
    amount: 675000,
    status: "Success",
    icon: ShoppingCart,
  },
  {
    type: "Withdraw",
    id: "TRX-W12353",
    date: "12 Dec 2023, 14:20",
    amount: 1250000,
    status: "Success",
    icon: ArrowUpRight,
  },
  {
    type: "Donasi",
    id: "TRX-N12354",
    date: "11 Dec 2023, 10:00",
    amount: 200000,
    status: "Success",
    icon: Heart,
  },
];

const ModalTransaksi = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState<"date" | "amount">("date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const itemsPerPage = 5;

  const categories = ["all", "Pembelian", "Deposit", "Withdraw", "Komisi Affiliate", "Donasi"];

  const filteredAndSortedTransactions = dummyTransactions
    .filter(transaction => 
      (selectedCategory === "all" || transaction.type === selectedCategory) &&
      transaction.id.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const order = sortOrder === "asc" ? 1 : -1;
      if (sortBy === "date") {
        return (new Date(b.date).getTime() - new Date(a.date).getTime()) * order;
      }
      return (b.amount - a.amount) * order;
    });

  const totalPages = Math.ceil(filteredAndSortedTransactions.length / itemsPerPage);
  
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const currentTransactions = filteredAndSortedTransactions.slice(start, end);

  const toggleSort = (field: "date" | "amount") => {
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
          <div className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-100">Riwayat Transaksi</h2>
              <button
                onClick={onClose}
                className="p-1 hover:bg-gray-800 rounded-lg text-gray-400"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-3">
              {/* Search */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari nomor transaksi..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-gray-100 placeholder-gray-400"
                />
              </div>
              
              {/* Horizontal scrollable categories */}
              <div className="relative">
                <div className="overflow-x-auto hide-scrollbar">
                  <div className="flex gap-2 p-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`flex-none px-3 py-1.5 rounded-lg text-sm whitespace-nowrap ${
                          selectedCategory === category
                            ? "bg-green-900/50 text-green-400"
                            : "bg-gray-800 text-gray-400"
                        }`}
                      >
                        {category === "all" ? "Semua" : category}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-gray-900 to-transparent w-4 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 bg-gradient-to-l from-gray-900 to-transparent w-4 pointer-events-none" />
              </div>

              {/* Filters and Sort */}
              <div className="flex gap-3 flex-wrap">
                {/* Category Filter */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1.5 text-sm text-gray-100"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === "all" ? "Semua Kategori" : category}
                    </option>
                  ))}
                </select>

                {/* Sort Buttons */}
                <button
                  onClick={() => toggleSort("date")}
                  className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1
                    ${sortBy === "date" 
                      ? "bg-green-900/50 text-green-400" 
                      : "bg-gray-800 text-gray-400"}`}
                >
                  Tanggal {sortBy === "date" && (sortOrder === "asc" ? "↑" : "↓")}
                </button>

                <button
                  onClick={() => toggleSort("amount")}
                  className={`px-3 py-1.5 rounded-lg text-sm flex items-center gap-1
                    ${sortBy === "amount" 
                      ? "bg-green-900/50 text-green-400" 
                      : "bg-gray-800 text-gray-400"}`}
                >
                  Total {sortBy === "amount" && (sortOrder === "asc" ? "↑" : "↓")}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 space-y-4">
          {currentTransactions.map((transaction, index) => (
            <ProfileRiwayatTransaksiRow key={index} {...transaction} />
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

export default ModalTransaksi;
