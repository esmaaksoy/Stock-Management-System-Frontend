import { Dialog } from "@material-tailwind/react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Select, Option, Input } from "@material-tailwind/react";
const ProductForm = ({ open, handleClose, data, setData }) => {
  const handleChange = (e, fieldName, fieldType) => {
    if (fieldType === "select") {
      setData({ ...data, [fieldName]: e });
    } else {
      setData({ ...data, [fieldName]: e.target.value });
    }
  };
  const { postStock } = useStockCalls();
  const { categories, brands } = useSelector((state) => state.stock);
  const handleSubmit = (e) => {
    e.preventDefault();
    postStock("products", data);
    handleClose();
  };
  return (
    <Dialog
      open={open}
      handler={handleClose}
      className="rounded-lg p-4 sm:p-6 lg:p-8  dark:bg-[#00000084] bg-white"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Select
          label="Categories"
          name="categoryId"
          value={data.categoryId}
          size="lg"
          onChange={(value) => handleChange(value, "categoryId", "select")}
        >
          {categories?.map((item) => (
            <Option value={item._id} key={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Select
          label="Brand"
          name="brandId"
          value={data.brandId}
          size="lg"
          onChange={(value) => handleChange(value, "brandId", "select")}
        >
          {brands?.map((item) => (
            <Option value={item._id} key={item._id}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Input
          size="lg"
          name="name"
          type="text"
          label="Product Name"
          value={data.name}
          onChange={(e) => handleChange(e, "name", "input")}
          autoComplete="off"
        />
        <button
          onClick={handleClose}
          type="submit"
          className="block w-full rounded-lg bg-[#ABFB60] px-5 py-3 text-sm font-medium text-black"
        >
          Add Product
        </button>
      </form>
    </Dialog>
  );
};

export default ProductForm;
