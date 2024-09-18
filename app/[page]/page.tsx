import React from "react";

const Page = ({ params }: { params: { page: string } }) => {
  return (
    <div className="w-full h-72 flex flex-col items-center justify-end text-3xl">
      {params.page}
    </div>
  );
};

export default Page;
