"use client";

import { Data } from "@/types/data";
import type { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { Button } from "../ui/button";
import { CaretDown, CheckCircle } from "@phosphor-icons/react";
import { AArrowDownIcon, AArrowUpIcon, ChevronRight } from "lucide-react";
import { timeAgo } from "@/lib/utils";

export const columns: ColumnDef<Data>[] = [
  {
    accessorKey: "employee",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {column.getIsSorted() === "asc" ? (
            <AArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <AArrowDownIcon className="ml-2 h-4 w-4" />
          )}
          Employee
        </div>
      );
    },
    cell: ({ getValue }) => {
      const { name, designation, image } = getValue() as Data["employee"];
      return (
        <div className="py-2 ms-5 flex items-center gap-2">
          <Image
            src={image}
            alt={name}
            width={35}
            height={35}
            className="rounded-full"
          />

          <div>
            <p className="font-semibold">{name}</p>
            <p className="text-sm text-[#4B4B4B]/60 font-medium">
              {designation}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "device",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {column.getIsSorted() === "asc" ? (
            <AArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <AArrowDownIcon className="ml-2 h-4 w-4" />
          )}
          Device
        </div>
      );
    },
    cell: ({ getValue }) => {
      const { name, image, description } = getValue() as Data["device"];
      return (
        <div className="flex items-center gap-3">
          <Image
            src={image}
            alt={name}
            width={35}
            height={35}
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-sm text-[#4B4B4B]/60 font-medium">
              {description}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "requestedOn",
    header: ({ column }) => {
      return (
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {column.getIsSorted() === "asc" ? (
            <AArrowUpIcon className="ml-2 h-4 w-4" />
          ) : (
            <AArrowDownIcon className="ml-2 h-4 w-4" />
          )}
          Requested On
        </div>
      );
    },
    cell: ({ getValue }) => {
      const date = new Date(getValue() as Data["requestedOn"]);
      return (
        <div className="space-y-1">
          <p className="font-medium">{timeAgo(date)}</p>
          <p className="text-sm text-[#4B4B4B]/60 font-medium">
            {date.getDate()}th{" "}
            {date.toLocaleString("default", { month: "long" })}{" "}
            {date.getFullYear()}
          </p>
        </div>
      );
    },
  },
  {
    accessorKey: "amountPayable",
    header: "Amount Payable",
    cell: ({ getValue }) => {
      const { value, description } = getValue() as Data["amountPayable"];
      return (
        <div className="space-y-1">
          <p className="font-medium">{value}</p>
          <p className="text-sm text-[#4B4B4B]/60 font-medium">{description}</p>
        </div>
      );
    },
  },
  {
    id: "Actions",
    cell: ({}) => {
      return (
        <Button className="flex items-center gap-2 bg-white text-primary border">
          <CheckCircle size={15} weight="fill" fill="#16AF8E" /> Approve
          <div className="w-px h-full bg-secondary"></div>
          <CaretDown size={15} className="text-secondary" />
        </Button>
      );
    },
  },
  {
    id: "open",
    cell: ({}) => {
      return (
        <ChevronRight
          size={25}
          fontWeight={"bold"}
          className="text-secondary cursor-pointer"
        />
      );
    },
  },
];
