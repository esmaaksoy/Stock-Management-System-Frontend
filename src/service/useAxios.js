import { useSelector } from "react-redux"
import axios from "axios";

const useAxios = () => {
    const {token} = useSelector((state)=> state.auth)
    const axiosWithToken = axios.create({
        baseURL:`${process.env.REACT_APP_BASE_URL}`,
        headers: { Authorization: `Token ${token}` }
      })
      const axiosPublic = axios.create({
        baseURL: `${process.env.REACT_APP_BASE_URL}`,
      })
  return {axiosWithToken, axiosPublic}
}

export default useAxios