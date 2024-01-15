import { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";
import BrandForm from "../components/BrandForm";
import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import Loading from "./Loading";
import { searchIcon } from "../helper/icons";
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
  const { brands, loading } = useSelector((state) => state.stock);
  const {getStocks, searchStock} = useStockCalls();
  const [value, setValue]=useState("")
  useEffect(() => {
    searchStock("brands", value)
  }, [value]);
  return (
    <div className="dark:bg-gray-900 px-12 py-3 min-h-[100vh]">
      <div className="pb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
        <div className="dark:text-white ">
          <p className="text-xl font-semibold"> Brand List</p>
          <p className="mt-1 font-normal">See information about all brand</p>
        </div>
        <div className="flex flex-col sm:flex-row w-full shrink-0 gap-2 md:w-max ">
          <div className="relative flex-1">
            <input
              type="text"
              id="Search"
              placeholder="Search for..."
              className="w-full rounded-md border border-gray-500 p-3 shadow-sm sm:text-sm"
              value={value}
              onChange={(e)=>setValue(e.target.value)}
              autoComplete="off"
            />
            <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
              <button type="button" className="text-gray-700 hover:text-black ">
                <span className="sr-only">Search</span>           
                {searchIcon}
              </button>
            </span>
          </div>
          <div className="text-center">
            <button
              className="group relative inline-block focus:outline-none focus:ring "
              onClick={handleOpen}
            >
              <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#ABFB60] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
              <span className="relative inline-block border-2 border-current dark:border-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                Add Brand
              </span>
            </button>
            <BrandForm
              open={open}
              data={data}
              setData={setData}
              handleClose={handleClose}
            />
          </div>
        </div>
      </div>
      {loading && <Loading />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
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
