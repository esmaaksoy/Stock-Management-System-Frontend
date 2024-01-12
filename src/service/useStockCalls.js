import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart } from "../features/authSlice";
import { getStockSuccess } from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const getStocks = async (url = "firms") => {
    dispatch(fetchStart);
    try {
      const { data } = await axiosWithToken(`${url}`);
      const apiData = data.data;
      dispatch(getStockSuccess({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
  const deleteStocks = async (url = "firms", id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}/`);
      toastSuccessNotify("Data has been deleted.");
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Data could not be deleted.");
    }
  };
  return { getStocks, deleteStocks };
};

export default useStockCalls;
