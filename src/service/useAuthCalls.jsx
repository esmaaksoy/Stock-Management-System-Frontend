import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  registerSuccess,
} from "../features/authSlice";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
const useAuthCalls = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
  return { login, register };
};

export default useAuthCalls;
