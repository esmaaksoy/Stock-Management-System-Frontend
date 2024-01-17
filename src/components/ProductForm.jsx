import { Dialog } from "@material-tailwind/react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { Select, Option } from "@material-tailwind/react";
const ProductForm = ({ open, handleClose, data, setData }) => {
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
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
      <form onSubmit={handleSubmit}>
        <select
          name="categoryId"
          id="categoryId"
          className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm mb-3"
          value={data.categoryId}
          onChange={handleChange}
        >
          <option value="">Categories</option>
          {categories.map((item) => (
            <option value={item._id} key={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <select
          name="brandId"
          id="brandId"
          className="w-full rounded-lg border border-gray-300 p-4 pe-12 text-sm shadow-sm mb-3 "
          value={data.brandId}
          onChange={handleChange}
        >
          <option value="">Brands</option>
          {brands.map((item) => (
            <option key={item._id} value={item._id}>
              {item.name}
            </option>
          ))}
        </select>
        <input
          name="name"
          type="text"
          placeholder="Product Name"
          className="w-full rounded-lg border border-gray-300 p-4 text-sm shadow-sm mb-3"
          value={data.name}
          onChange={handleChange}
          autocomplete="off"
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
