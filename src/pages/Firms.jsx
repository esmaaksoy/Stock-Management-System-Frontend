import React, { useEffect, useState } from "react";
import FirmCard from "../components/FirmCard";
import FirmForm from "../components/FirmForm";
import { useSelector } from "react-redux";
import useStockCalls from "../service/useStockCalls";
import { searchIcon } from "../helper/icons";
import { CardSkeloton, NoData, NotFound } from "../components/DataMessage";

const Firms = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setData({ name: "", phone: "", address: "", image: "" });
    setOpen(false);
  };
  const { firms, loading, error } = useSelector((state) => state.stock);
  const { searchStock } = useStockCalls();
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const [value, setValue] = useState("");

  useEffect(() => {
    searchStock("firms", value);
  }, [value]);


console.log(firms)

  return (
    <div className="dark:bg-gray-900 px-12 py-3 min-h-[100vh]">
      {error && <NotFound />}
      {!error && (
        <>
          <div className="pb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="dark:text-white ">
              <p className="text-xl font-semibold"> Firm List</p>
              <p className="mt-1 font-normal">See information about all firm</p>
            </div>
            <div className="flex flex-col sm:flex-row w-full shrink-0 gap-2 md:w-max ">
              <div className="relative flex-1">
                <input
                  type="text"
                  id="Search"
                  placeholder="Search for..."
                  className="w-full rounded-md border border-gray-500 p-3 shadow-sm sm:text-sm"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  autoComplete="off"
                />
                <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                  <button
                    type="submit"
                    className="text-gray-700 hover:text-black"
                  >
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
                    Add Firm
                  </span>
                </button>
                <FirmForm
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  data={data}
                  setData={setData}
                />
              </div>
            </div>
          </div>
          {loading ? (
            <CardSkeloton />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
              {firms?.map((firm) => (
                <FirmCard
                  key={firm._id}
                  firm={firm}
                  setData={setData}
                  handleOpen={handleOpen}
                />
              ))}
            </div>
          )}
          {!error && !loading && !firms.length && <NoData />}
        </>
      )}
    </div>
  );
};

export default Firms;
