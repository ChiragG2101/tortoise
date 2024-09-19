"use client";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { dataSet } from "./data";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import { Funnel, ListChecks } from "@phosphor-icons/react/dist/ssr";
import {
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

export default function Table() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data: dataSet,
    columns,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });
  return (
    <div className="p-10 flex flex-col gap-3">
      <div className="flex justify-between">
        <div className="relative max-w-72 flex items-center  border border-gray-300 rounded-xl bg-secondary">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <MagnifyingGlassIcon className="w-5 h-5 text-[#CBCBCB]" />
          </div>
          <Input
            placeholder={"Search by name"}
            className={cn("ps-10 border-none text-sm")}
            name="search"
            value={
              (table.getColumn("employee")?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table.getColumn("employee")?.setFilterValue(event.target.value)
            }
          />
        </div>
        <div className="flex gap-2">
          <Button
            variant={"secondary"}
            className="bg-transparent gap-2 border drop-shadow-2xl"
          >
            <Funnel size={16} /> Filters
          </Button>
          <Button
            variant={"secondary"}
            className="bg-transparent gap-2 border drop-shadow-2xl"
          >
            <ListChecks size={16} /> Bulk Actions
          </Button>
        </div>
      </div>
      <DataTable table={table} data={dataSet} />
    </div>
  );
}
