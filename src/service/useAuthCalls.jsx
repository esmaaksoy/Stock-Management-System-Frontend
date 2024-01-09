import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
  logoutSuccess
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {token} = useSelector((state)=>state.auth)
  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/auth/login`,
        userInfo
      );
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
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/users/`,
        userInfo
      );
      dispatch(registerSuccess(data));
      toastSuccessNotify("Registration successful.");
      navigate("/stock");
    } catch (error) {
        dispatch(fetchFail());
        toastErrorNotify(
            "Registration unsuccessful.");
    }
  };
  const logout = async()=>{
    dispatch(fetchStart())
try {
  await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout`,{headers: {Autorizatşon : `Token ${token}`}})
  toastSuccessNotify("Logout successful.")
      dispatch(logoutSuccess())
} catch (error) {
  dispatch(fetchFail());
  toastErrorNotify("Logout attempt failed.");
}
  }
  return { login, register,logout };
};

export default useAuthCalls;
