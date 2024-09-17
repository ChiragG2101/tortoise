import React from "react";

const Page = ({ params }: { params: { page: string } }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center text-3xl">
      {params.page}
    </div>
  );
};

export default Page;
