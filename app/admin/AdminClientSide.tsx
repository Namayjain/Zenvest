"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useState, useCallback } from "react";
import { Search, ChevronLeft, ChevronRight, Filter, Trash2 } from "lucide-react";
import { deleteLead } from "./actions";

type Lead = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status: string;
};

export default function AdminClientSide({ 
  leads, 
  totalCount, 
  currentPage, 
  pageSize,
  initialSearch,
  initialService
}: { 
  leads: Lead[], 
  totalCount: number, 
  currentPage: number, 
  pageSize: number,
  initialSearch: string,
  initialService: string
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialSearch);
  const [service, setService] = useState(initialService || "All");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set(name, value);
      } else {
        params.delete(name);
      }
      return params.toString();
    },
    [searchParams]
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`${pathname}?${createQueryString("search", search)}`);
  };

  const handleServiceFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    setService(val);
    const params = new URLSearchParams(searchParams.toString());
    if (val !== "All") {
      params.set("service", val);
    } else {
      params.delete("service");
    }
    // Reset page to 1 when filtering
    params.set("page", "1");
    router.push(`${pathname}?${params.toString()}`);
  };

  const totalPages = Math.ceil(totalCount / pageSize);

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this lead? This cannot be undone.")) {
      const res = await deleteLead(id);
      if (res?.error) {
        alert("Error deleting lead: " + res.error);
      }
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-navy-100 overflow-hidden">
      {/* Toolbar */}
      <div className="p-4 md:p-6 border-b border-navy-100 flex flex-col md:flex-row gap-4 justify-between items-center bg-white">
        <form onSubmit={handleSearch} className="relative w-full md:w-96">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-navy-400" />
          <input
            type="text"
            placeholder="Search name, email, or phone..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-navy-200 rounded-lg outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 text-sm"
          />
        </form>

        <div className="flex items-center gap-2 w-full md:w-auto">
          <Filter size={18} className="text-navy-400" />
          <select
            value={service}
            onChange={handleServiceFilter}
            className="w-full md:w-auto border border-navy-200 rounded-lg px-4 py-2 text-sm outline-none focus:border-navy-500 focus:ring-1 focus:ring-navy-500 bg-white"
          >
            <option value="All">All Services</option>
            <option value="Mutual Funds">Mutual Funds</option>
            <option value="Fixed Deposits">Fixed Deposits</option>
            <option value="Bonds">Bonds</option>
            <option value="Tax Saving">Tax Saving</option>
            <option value="PMS / AIF">PMS / AIF</option>
            <option value="Child Future Saving">Child Future Saving</option>
            <option value="Loan Against Security">Loan Against Security</option>
            <option value="Specialised Investment Fund">Specialised Investment Fund</option>
            <option value="General Enquiry">General Enquiry</option>
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-navy-700">
          <thead className="bg-navy-50 text-navy-900 border-b border-navy-100">
            <tr>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">Date</th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">Name</th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">Contact</th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap">Service</th>
              <th className="px-6 py-4 font-semibold min-w-[300px]">Message</th>
              <th className="px-6 py-4 font-semibold whitespace-nowrap text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-navy-100 bg-white">
            {leads.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-6 py-12 text-center text-navy-500">
                  No leads found.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="hover:bg-navy-50/50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap text-xs">
                    {new Date(lead.created_at).toLocaleDateString()}<br/>
                    <span className="text-navy-400">{new Date(lead.created_at).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </td>
                  <td className="px-6 py-4 font-medium text-navy-900 whitespace-nowrap">{lead.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col">
                      <a href={`mailto:${lead.email}`} className="text-gold-500 hover:underline">{lead.email}</a>
                      <a href={`tel:${lead.phone}`} className="text-navy-500 hover:underline">{lead.phone}</a>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-moss-100 text-moss-800">
                      {lead.service}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="line-clamp-3 hover:line-clamp-none text-navy-600">{lead.message}</p>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="p-2 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      title="Delete Lead"
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="px-6 py-4 border-t border-navy-100 flex items-center justify-between bg-white">
          <p className="text-sm text-navy-500">
            Showing <span className="font-medium">{(currentPage - 1) * pageSize + 1}</span> to <span className="font-medium">{Math.min(currentPage * pageSize, totalCount)}</span> of <span className="font-medium">{totalCount}</span> results
          </p>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.push(`${pathname}?${createQueryString("page", String(currentPage - 1))}`)}
              disabled={currentPage <= 1}
              className="p-1 rounded hover:bg-navy-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={20} className="text-navy-700" />
            </button>
            <span className="text-sm text-navy-700 font-medium px-2">Page {currentPage} of {totalPages}</span>
            <button
              onClick={() => router.push(`${pathname}?${createQueryString("page", String(currentPage + 1))}`)}
              disabled={currentPage >= totalPages}
              className="p-1 rounded hover:bg-navy-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={20} className="text-navy-700" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
