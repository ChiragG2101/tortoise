"use client";

import { flexRender, Table as T } from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState } from "react";
import Pagination from "./pagination";
import { Sheet } from "../ui/sheet";
import SideSheet from "../side-sheet";
import { columns } from "./columns";

interface DataTableProps<TData> {
  table: T<TData>;
  data: TData[];
}

export function DataTable<TData>({ table, data }: DataTableProps<TData>) {
  const [selectedRowId, setSelectedRowId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Sheet open={isOpen}>
      <div className="rounded-xl border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id} className="bg-secondary ">
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      className="h-12 text-[#4B4B4B] font-semibold text-sm"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  onClick={() => {
                    // @ts-expect-error Typescript issues
                    setSelectedRowId(row.original.id);
                    setIsOpen(true);
                  }}
                  className="cursor-pointer hover:bg-gray-100 transition-colors duration-200 ease-in-out"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <Pagination table={table} />
      {selectedRowId && (
        <SideSheet
          // @ts-expect-error Typescript issues
          data={data.find((row) => row.id === selectedRowId)}
          setIsOpen={setIsOpen}
        />
      )}
    </Sheet>
  );
}
