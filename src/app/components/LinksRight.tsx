import React from "react";

const LinksRight = () => {
  return (
    <div className="links-container fixed bottom-0 right-0 md:block hidden  z-[100]">
      <div className="links-container-wrapper relative flex flex-col items-center w-[40px] gap-4 pr-12">
        <a
          href="mailto:antonio.knezovic1991@gmail.com"
          className="[writing-mode:vertical-lr] text-xs block my-[20px] hover:text-cyan-300 hover:-translate-y-1 transition-all text-gray-400  cursor-pointer "
        >
          antonio.knezovic1991@gmail.com
        </a>
        <div className="div line w-[1px] h-[200px] bg-gray-500"></div>
      </div>
    </div>
  );
};

export default LinksRight;
