import React from "react";

const ModalPortofolio = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div className="w-[1000px]">
        <button className="text-xl text-white">X</button>
        <div className="p-2 bg-white rounded">Modal</div>
      </div>
    </div>
  );
};

export default ModalPortofolio;
