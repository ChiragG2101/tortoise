import Table from "@/components/data-table";
import TopBar from "@/components/top-bar";
import React from "react";

const page = () => {
  return (
    <div className="w-full flex flex-col bg-white border rounded-3xl ">
      <TopBar />
      <Table />
    </div>
  );
};

export default page;
