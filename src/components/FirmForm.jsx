import { Dialog } from "@material-tailwind/react";
import { useState } from "react";
import useStockCalls from "../service/useStockCalls";
const FirmForm = ({ open, handleOpen }) => {
  const input = [
    { type: "text", placeholder: "Firm Name", name: "name" },
    { type: "text", placeholder: "Phone", name: "phone" },
    { type: "text", placeholder: "Adress", name: "address" },
    { type: "url", placeholder: "Image Url", name: "image" },
  ];
  const [data, setData] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { postStock } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("firms", data);
    setData({ name: "", phone: "", address: "", image: "" });
    handleOpen();
  };
  return (
    <Dialog
      open={open}
      handler={handleOpen}
      className="rounded-lg p-4 sm:p-6 lg:p-8  dark:bg-[#00000084] bg-[#fdfdfdc8]"
    >
      <form onSubmit={handleSubmit}>
        {input.map(({ type, placeholder, name }) => (
          <input
            key={name}
            name={name}
            type={type}
            placeholder={placeholder}
            className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm mb-3 "
            value={data[name]}
            onChange={handleChange}
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
  );
};

export default FirmForm;
