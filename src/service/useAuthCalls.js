import { useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import useAxios from "./useAxios";
const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {axiosWithToken, axiosPublic} = useAxios()
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const {data } = await axiosPublic.post("/auth/login/",userInfo);
      dispatch(loginSuccess(data));
      toastSuccessNotify("Login successful.");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Login attempt failed.");
    }
  };
  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosPublic.post("/users/",userInfo);
      dispatch(registerSuccess(data));
      toastSuccessNotify("Registration successful.");
      navigate("/stock");
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Registration unsuccessful.");
    }
  };
  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.get("/auth/logout/")
      toastSuccessNotify("Logout successful.");
      dispatch(logoutSuccess());
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Logout attempt failed.");
    }
  };
  return { login, register, logout };
};

export default useAuthCalls;
