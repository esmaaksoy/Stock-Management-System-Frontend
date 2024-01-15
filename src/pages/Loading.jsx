import { loadingIcon } from "../helper/icons"
const Loading = () => {
  const arr = [1,2,3,4,5,6,7]
  return (
    <div className="flex flex-wrap gap-4 justify-center">
  {arr.map(item=>(
  <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96 animate-pulse">
  <div className="relative grid h-56 mx-4 mt-4 overflow-hidden text-gray-700 bg-gray-300 bg-clip-border rounded-xl place-items-center">
    {loadingIcon}
  </div>
  <div className="p-6">
    <div className="block w-40 h-3 mb-4 font-sans text-5xl antialiased font-semibold leading-tight tracking-normal bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
    <div className="block w-full h-2 mb-2 font-sans text-base antialiased font-light leading-relaxed bg-gray-300 rounded-full text-inherit">
      &nbsp;
    </div>
  </div>
  <div className="p-6 pt-2 ml-auto">
    <button
      disabled=""
      tabIndex={-1}
      className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg text-white shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none h-8 w-20 bg-gray-300 shadow-none hover:shadow-none"
      type="button"
    >
      &nbsp;
    </button>
  </div>




</div>))}
    </div>

  

  
  )
}

export default Loading

