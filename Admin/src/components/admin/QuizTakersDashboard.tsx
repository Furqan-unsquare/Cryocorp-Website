import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { UserRoundCheck, Search, Download, ChevronLeft, ChevronRight } from "lucide-react";

const QuizTakersDashboard = () => {
  const [emails, setEmails] = useState([]);
  const [filteredEmails, setFilteredEmails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(20);

useEffect(() => {
  fetch("https://api.cryocorp.in/api/email/emails")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      // Remove duplicates based on email
      const uniqueEmails = Array.from(
        new Map(data?.map(item => [item.email, item])).values()
      );

      // Show newest first
      const sortedEmails = [...uniqueEmails].reverse();

      setEmails(sortedEmails || []);
      setFilteredEmails(sortedEmails || []);
      setLoading(false);
    })
    .catch(() => {
      toast.error("Failed to fetch quiz takers.");
      setLoading(false);
    });
}, []);


  // Filter emails based on search term
  useEffect(() => {
    const filtered = emails.filter(email =>
      email?.email?.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredEmails(filtered);
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm, emails]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredEmails.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentEmails = filteredEmails.slice(startIndex, endIndex);

  const handleExport = () => {
    if (filteredEmails.length === 0) {
      toast.warning("No emails to export.");
      return;
    }

    const csvContent = "data:text/csv;charset=utf-8,email\n" + 
      filteredEmails.map(item => item.email).join("\n");
    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "quiz_takers.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    toast.success(`Exported ${filteredEmails.length} emails successfully!`);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const LoadingSkeleton = () => (
    <div className="space-y-3">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center gap-4 px-4 py-3 rounded-md bg-gray-100 animate-pulse">
          <div className="w-5 h-5 bg-gray-300 rounded"></div>
          <div className="h-4 bg-gray-300 rounded w-48"></div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-6">
      <div className="mx-auto bg-white rounded-2xl border shadow-sm p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Quiz Takers</h2>
            <p className="text-gray-600 mt-1">
              {loading ? "Loading..." : `${filteredEmails.length} total emails`}
            </p>
          </div>
          <Button
            onClick={handleExport}
            disabled={loading || filteredEmails.length === 0}
            className="bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            Export CSV
          </Button>
        </div>

        {/* Search Bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input
            type="text"
            placeholder="Search emails..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-3 w-full border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            disabled={loading}
          />
        </div>

        {/* Content */}
        {loading ? (
          <div className="border border-gray-200 rounded-lg p-6">
            <LoadingSkeleton />
          </div>
        ) : filteredEmails.length === 0 ? (
          <div className="text-center py-12 border border-gray-200 rounded-lg bg-gray-50">
            <UserRoundCheck className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">
              {searchTerm ? "No emails found matching your search." : "No quiz takers found."}
            </p>
            {searchTerm && (
              <Button
                variant="outline"
                onClick={() => setSearchTerm("")}
                className="mt-4"
              >
                Clear search
              </Button>
            )}
          </div>
        ) : (
          <>
            {/* Email List */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <div className="bg-gray-50 px-6 py-3 border-b border-gray-200">
                <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                  Email Addresses ({currentEmails.length} of {filteredEmails.length})
                </h3>
              </div>
              <div className="divide-y divide-gray-200">
                {currentEmails.map((email, index) => (
                  <div
                    key={`${email.email}-${startIndex + index}`}
                    className="flex items-center gap-4 px-6 py-4 hover:bg-gray-50 transition-colors duration-150"
                  >
                    <UserRoundCheck className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">
                      {email?.email}
                    </span>
                    <span className="text-xs text-gray-500 ml-auto">
                      #{startIndex + index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600">
                  Showing {startIndex + 1} to {Math.min(endIndex, filteredEmails.length)} of {filteredEmails.length} results
                </p>
                
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="flex items-center gap-1"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    Previous
                  </Button>
                  
                  <div className="flex items-center gap-1">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNumber;
                      if (totalPages <= 5) {
                        pageNumber = i + 1;
                      } else if (currentPage <= 3) {
                        pageNumber = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNumber = totalPages - 4 + i;
                      } else {
                        pageNumber = currentPage - 2 + i;
                      }
                      
                      return (
                        <Button
                          key={pageNumber}
                          variant={currentPage === pageNumber ? "default" : "outline"}
                          size="sm"
                          onClick={() => handlePageChange(pageNumber)}
                          className="w-10 h-10 p-0"
                        >
                          {pageNumber}
                        </Button>
                      );
                    })}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="flex items-center gap-1"
                  >
                    Next
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QuizTakersDashboard;
