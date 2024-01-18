import { Dialog } from "@material-tailwind/react";
import useStockCalls from "../service/useStockCalls";
import { Input } from "@material-tailwind/react";
const FirmForm = ({ open,handleClose, data, setData }) => {
  const inputData = [
    { type: "text", placeholder: "Firm Name", name: "name" },
    { type: "text", placeholder: "Phone", name: "phone" },
    { type: "text", placeholder: "Adress", name: "address" },
    { type: "url", placeholder: "Image Url", name: "image" },
  ];
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const { postStock, putStock } = useStockCalls();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data._id) {
      putStock("firms", data);
    } else {
      postStock("firms", data);
    }
    handleClose();
  };
  return (
    <Dialog
      open={open}
      handler={handleClose}
      className="rounded-lg p-4 sm:p-6 lg:p-8  dark:bg-[#00000084] bg-white"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        {inputData.map(({ type, placeholder, name }) => (      
          <Input
          key={name}
          size="lg"
          name={name}
          type={type}
          label={placeholder}
          value={data[name]}
          onChange={handleChange}
          autoComplete="off"
        />
        ))}
        <button
          onClick={handleClose}
          type="submit"
          className="block w-full rounded-lg bg-[#ABFB60] px-5 py-3 text-sm font-medium text-black"
        >
        {data._id ? "Update Firm" : "Add Firm"}
        </button>
      </form>
    </Dialog>
  );
};

export default FirmForm;
