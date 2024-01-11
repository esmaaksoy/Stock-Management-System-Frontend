import {
  Dialog,
} from "@material-tailwind/react";
const BrandForm = ({open, handleOpen}) => {
    const input = [
      { type: "text", placeholder: "Brand Name" },
      { type: "url", placeholder: "Image Url" },
    ];
    return (
      <Dialog
      open={open}
      handler={handleOpen}
      className="rounded-lg p-4 sm:p-6 lg:p-8  dark:bg-[#00000084] bg-[#fdfdfdc8]"
    >
      <form>
        {input.map(({ type, placeholder }) => (
          <input
            type={type}
            placeholder={placeholder}
            className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm mb-3"
          />
        ))}
        <button
          onClick={handleOpen}
          type="submit"
          className="block w-full rounded-lg bg-[#ABFB60] px-5 py-3 text-sm font-medium text-black"
        >
          {" "}
          Submit
        </button>
      </form>
    </Dialog>
      // <form className="mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 w-[30%] m-auto dark:bg-black">
      //   {input.map(({ type, placeholder }) => (
      //     <input
      //       type={type}
      //       placeholder={placeholder}
      //       className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
      //     />
      //   ))}
      //   <button onClick={()=>setShow(true)} type="submit" className="block w-full rounded-lg bg-[#ABFB60] px-5 py-3 text-sm font-medium text-black"> Submit</button>
      // </form>
    );
  };
  
  export default BrandForm;
  