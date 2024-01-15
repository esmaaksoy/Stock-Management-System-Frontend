import { deleteIcon, editIcon } from "../helper/icons";
import useStockCalls from "../service/useStockCalls";
const BrandCard = ({setData,brand,handleOpen }) => {
  const {deleteStocks} = useStockCalls()
  const {name, image,_id}=brand
    return (
        <div className="block rounded-lg p-4 shadow-sm shadow-indigo-100 border-2 border-[#ABFB60]">
        <img
          alt="Home"
          src={image}
          className="h-56 w-full rounded-md object-contain"
        />
        <div className="mt-2">
          <dl className="flex justify-between">
            <div>
              <dt className="sr-only">Firm Name</dt>
              <dd className="text-md text-gray-500 font-bold">{name}</dd>
            </div>
          </dl>      
          <div className="flex justify-end ">
            <span className="inline-flex  overflow-hidden rounded-md border bg-white shadow-sm  ">
              <button
                className="inline-block border-e p-3 text-gray-900 bg-[#ABFB60] hover:bg-gray-200 focus:relative"
                title="Edit Product"
                onClick={()=>{handleOpen(); setData(brand)}}
              >             
                {editIcon}
              </button>
              <button
                className="inline-block p-3 text-gray-900 bg-[#ABFB60] hover:bg-gray-200 focus:relative"
                title="Delete Product"
                onClick={()=>deleteStocks("brands",_id)}
              >
              {deleteIcon}
              </button>
            </span>
          </div>
        </div>
      </div>
  
    );
  };
  
  export default BrandCard;
  