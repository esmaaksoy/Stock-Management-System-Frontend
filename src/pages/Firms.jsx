import React from "react";
import CardFirm from "../components/CardFirm";
import { NavLink } from "react-router-dom";

const Firms = () => {
  return (
    <>
      <div className="text-center mt-6">
        <NavLink
          className="group relative inline-block focus:outline-none focus:ring"
          to="/download"
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#ABFB60] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>

          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
            Add Firm
          </span>
        </NavLink>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        <CardFirm />
        <CardFirm />
        <CardFirm />
        <CardFirm />
        <CardFirm />
        <CardFirm />
        <CardFirm />
      </div>
    </>
  );
};

export default Firms;
