import { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";
import BrandForm from "../components/BrandForm";
import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
const Brands = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setData({ name: "", image: "" });
  };
  const [data, setData] = useState({
    name: "",
    image: "",
  });
  const { brands } = useSelector((state) => state.stock);
  const { getStocks } = useStockCalls();
  useEffect(() => {
    getStocks("brands");
  }, []);

  return (
    <div className="dark:bg-gray-900">
      <div className="text-center pt-6">
        <button
          className="group relative inline-block focus:outline-none focus:ring"
          onClick={handleOpen}
        >
          <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#ABFB60] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
          <span className="relative inline-block border-2 border-current px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
            Add Brands
          </span>
        </button>
        <BrandForm
          open={open}
          data={data}
          setData={setData}
          handleClose={handleClose}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
        {brands?.map((brand) => (
          <BrandCard
            key={brand._id}
            brand={brand}
            setData={setData}
            handleOpen={handleOpen}
          />
        ))}
      </div>
    </div>
  );
};

export default Brands;
