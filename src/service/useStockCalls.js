import { useDispatch } from "react-redux";
import useAxios from "./useAxios";
import { fetchFail, fetchStart } from "../features/stockSlice";
import { getStockSuccess ,getPromiseSuccess} from "../features/stockSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();
  const getStocks = async (url = "firms") => {
    dispatch(fetchStart());
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
  const postStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`${url}`, info);
      getStocks(url);
      toastSuccessNotify("Data has been added.");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Data could not be added.");
    }
  };
  const putStock = async (url = "firms", info) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${info._id}/`, info);
      toastSuccessNotify("Data has been updated.");
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Data could not be updated.");
    }
  };
  const searchStock = async (url = "firms", value) => {
    dispatch(fetchStart());
    try {
      const lowercaseValue = value.toLowerCase();
      const { data } = await axiosWithToken.get(
        `/${url}/?search[name]=${lowercaseValue}`
      );
      const apiData = data.data;
      dispatch(getStockSuccess({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
    }
  };
const getPromise = async(endpoints)=>{
  dispatch(fetchStart());
  try {
    const responses = await Promise.all(
      endpoints.map((endpoint) => axiosWithToken(endpoint))
    );
    const data = responses.map((response) => response?.data?.data);
    dispatch(getPromiseSuccess({data,endpoints}));
  } catch (error) {
    dispatch(fetchFail());
  }

}

  return {
    getStocks,
    deleteStocks,
    postStock,
    putStock,
    searchStock,
    getPromise,
  };
};

export default useStockCalls;
