const FirmForm = ({setShow}) => {
  const input = [
    { type: "text", placeholder: "Firm Name" },
    { type: "text", placeholder: "Phone" },
    { type: "text", placeholder: "Adress" },
    { type: "url", placeholder: "Image" },
  ];
  return (
    <form className="mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8 w-[30%] m-auto dark:bg-black">
      {input.map(({ type, placeholder }) => (
        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm"
        />
      ))}
      <button onClick={()=>setShow(true)} type="submit" className="block w-full rounded-lg bg-[#ABFB60] px-5 py-3 text-sm font-medium text-black"> Submit</button>
    </form>
  );
};

export default FirmForm;
