import { Dialog, Option, Select } from "@material-tailwind/react";
import useStockCalls from "../service/useStockCalls";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Input } from "@material-tailwind/react";
import React from "react";
const SaleForm = ({ open, handleClose, data, setData }) => {
  const navigate = useNavigate();
  const handleChange = (e, fieldName, fieldType) => {
    if (fieldType === "select") {
      setData({ ...data, [fieldName]: e });
    } else {
      setData({ ...data, [fieldName]: e.target.value });
    }
  };
  const { postStock, putStock } = useStockCalls();
  const { brands, products } = useSelector((state) => state.stock);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (data._id) {
      putStock("sales", data);
    } else {
      postStock("sales", data);
      console.log(data)
    }
    handleClose();
  };

  const myBrand = [
    {
      _id: "",
      name: "Add New Brand",
      onClick: () => navigate("/stock/brands/"),
    },
    ...brands,
  ];
  const myProduct = [
    {
      _id: "",
      name: "Add New Product",
      onClick: () => navigate("/stock/products"),
    },
    ...products,
  ];
  return (
    <Dialog
      open={open}
      handler={handleClose}
      className="rounded-lg p-4 sm:p-6 lg:p-8  dark:bg-[#00000084]"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <Select
          label="Brand"
          name="brandId"
          value={data?.brandId?._id || data?.brandId}
          size="lg"
          onChange={(value) => handleChange(value, "brandId", "select")}
        >
          {myBrand.map((item) => (
            <Option value={item._id} key={item._id} onClick={item.onClick}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Select
          label="Product"
          size="lg"
          value={data?.productId?._id || data?.productId}
          onChange={(value) => handleChange(value, "productId", "select")}
        >
          {myProduct.map((item) => (
            <Option value={item._id} key={item._id}  onClick={item.onClick}>
              {item.name}
            </Option>
          ))}
        </Select>
        <Input
          label="Quantity"
          size="lg"
          type="number"
          name="quantity"
          value={data?.quantity || ""}
          onChange={(e) => handleChange(e, "quantity", "input")}
          autoComplete="off"
        />
        <Input
          label="Price"
          size="lg"
          type="number"
          name="price"
          value={data?.price || ""}
          onChange={(e) => handleChange(e, "price", "input")}
          autoComplete="off"
        />
        <button
          onClick={handleClose}
          type="submit"
          className="block w-full rounded-lg bg-[#ABFB60] px-5 py-3 text-sm font-medium text-black"
        >
          {data?._id ? "Update Sale" : "Add Sale"}
        </button>
      </form>
    </Dialog>
  );
};

export default SaleForm;
