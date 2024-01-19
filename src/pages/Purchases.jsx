import { useEffect, useState } from "react";
import useStockCalls from "../service/useStockCalls";
import PurchaseTable from "../components/PurchaseTable";
import { useSelector } from "react-redux";

import { LoadingMsg, NotFound, TableSkeleton } from "../components/DataMessage";
import { NoData } from "../components/DataMessage";
import PurchaseForm from "../components/PurchaseForm";
const Purchases = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setData({
      brandId: "",
      firmId: "",
      productId: "",
      quantity: "",
      price: "",
    });
    setOpen(false);
  };
  const [data, setData] = useState({
    brandId: "",
    firmId: "",
    productId: "",
    quantity: "",
    price: "",
  });
  const { getStocks, getPromise } = useStockCalls();
  const { purchases, error, loading } = useSelector((state) => state.stock);

  useEffect(() => {
    getPromise(["products", "purchases", "brands", "firms"]);
  }, []);

  return (
    <div className="dark:bg-gray-900 px-12 py-3 min-h-[100vh]">
      {error && <NotFound />}
      {loading && <LoadingMsg />}
      {!error && !loading && (
        <>
          <div className="pb-10 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="dark:text-white ">
              <p className="text-xl font-semibold">Purchases</p>
              <p className="mt-1 font-normal">
                See information about all purchase
              </p>
            </div>
            <div className="flex flex-col sm:flex-row w-full shrink-0 gap-2 md:w-max ">
              <div className="text-center">
                <button
                  className="group relative inline-block focus:outline-none focus:ring "
                  onClick={handleOpen}
                >
                  <span className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#ABFB60] transition-transform group-hover:translate-x-0 group-hover:translate-y-0"></span>
                  <span className="relative inline-block border-2 border-current dark:border-white px-8 py-3 text-sm font-bold uppercase tracking-widest text-black group-active:text-opacity-75">
                    Add Purchase
                  </span>
                </button>
                <PurchaseForm
                  open={open}
                  handleOpen={handleOpen}
                  handleClose={handleClose}
                  data={data}
                  setData={setData}
                />
              </div>
            </div>
          </div>
          {purchases.length === 0 ? <NoData /> : <PurchaseTable handleOpen={handleOpen} setData={setData} />}
          
        </>
      )}
      
    </div>
  );
};

export default Purchases;
