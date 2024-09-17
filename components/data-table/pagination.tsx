import { Table } from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Assuming you're using react-feather for icons
import { Button } from "../ui/button";
import { useEffect, useRef } from "react";

interface PaginationProps<TData> {
  table: Table<TData>;
}

const Pagination = <TData,>({ table }: PaginationProps<TData>) => {
  const currentPage = table.getState().pagination.pageIndex + 1;
  const pageCount = table.getPageCount();
  const rowCount = table.getCoreRowModel().rows.length;
  const totalRows = table.getPrePaginationRowModel().rows.length;

  const pageNumbers = Array.from({ length: pageCount }, (_, i) => i + 1);
  const currentButtonRef = useRef<HTMLButtonElement>(null);

  // Use useEffect to focus the button when the page changes
  useEffect(() => {
    if (currentButtonRef.current) {
      currentButtonRef.current.focus();
    }
  }, [currentPage]);
  return (
    <div className="flex items-center justify-between space-x-2 py-4">
      <div className="text-sm">
        Showing {rowCount} of {totalRows} results
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          <ChevronLeft />
        </button>
        {pageNumbers.map((pageNumber) => (
          <Button
            variant={"pagination"}
            size={"icon"}
            ref={pageNumber === currentPage ? currentButtonRef : null}
            key={pageNumber}
            onClick={() => table.setPageIndex(pageNumber - 1)}
          >
            {pageNumber}
          </Button>
        ))}
        <button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
