import React, { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";
import BrandForm from "../components/BrandForm";
import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
const Brands = () => {
  const [show, setShow] = useState(false);
  const { brands } = useSelector((state) => state.stock);
  const {getStocks} = useStockCalls()
  useEffect(() => {
    getStocks("brands");
  }, []);

  return (
    <div>
    <div className="text-center mt-6">
      <button
        className="group relative inline-block focus:outline-none focus:ring"
        onClick={() => setShow(true)}
      >
        <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#ABFB60] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
        <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
          Add Brands
        </span>
      </button>
    </div>
    {show && <BrandForm setShow={setShow} />}

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      {brands?.map((brand) => (
        <BrandCard key={brand._id} {...brand}/>

      ))}
    </div>
  </div>
  )
}

export default Brands
