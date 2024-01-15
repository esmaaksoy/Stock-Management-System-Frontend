import { addressIcon, deleteIcon, editIcon, phoneIcon } from "../helper/icons";
import useStockCalls from "../service/useStockCalls";

const FirmCard = ({firm, handleOpen, setData }) => {
  const {deleteStocks} = useStockCalls()
  const { name, address, phone, _id, image} = firm
  return (
    <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 border-2 border-[#ABFB60] dark:text-white dark:bg-black" >
      <img
        alt="Home"
        src={image}
        className="h-56 w-full rounded-md object-contain"
      />
      <div className="mt-2">
        <dl className="flex justify-between">
          <div>
            <dt className="sr-only">Firm Name</dt>
            <dd className="text-md text-gray-500 font-bold dark:text-white">{name}</dd>
          </div>
        </dl>
        <div className="mt-6 items-center gap-8 text-xs h-[100px] ">
          <div className="flex gap-1 ">
            <div>
            {phoneIcon}
            </div>
            <div className=" mt-1.5 sm:mt-0">
              <p className="text-gray-500 dark:text-white">Phone</p>
              <p className="font-medium">{phone}</p>
            </div>
          </div>
          <div className="flex gap-1 ">
            <div  >         
            {addressIcon}
            </div>
            <div className=" mt-1.5 sm:mt-0">
            <p className="text-gray-500 dark:text-white">Adress</p>
              <p className="font-medium">{address}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-end ">
          <span className="inline-flex  overflow-hidden rounded-md border bg-white shadow-sm  ">
            <button
              className="inline-block border-e p-3 text-gray-900 bg-[#ABFB60] hover:bg-gray-200 focus:relative"
              title="Edit Product"
              onClick={() => {
                handleOpen()
                setData(firm)
              }}
            >           
              {editIcon}
            </button>
            <button
              className="inline-block p-3 text-gray-900 bg-[#ABFB60] hover:bg-gray-200 focus:relative"
              title="Delete Product"
              onClick={()=>deleteStocks("firms",_id)}
            >
            {deleteIcon}
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default FirmCard;
