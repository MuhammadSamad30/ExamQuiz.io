import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <h2 className="text-sm">
           <span className="text-[#57e23c] " >{ new Date().getFullYear()}</span> <span className="text-[#57e23c] font-semibold" >Muhammad Samad.</span> All Rights Reserved 
        </h2>
      </div>
    </div>
  );
};

export default Footer;
