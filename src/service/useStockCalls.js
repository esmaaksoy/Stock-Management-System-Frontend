import { useDispatch } from "react-redux"
import useAxios from "./useAxios"
import { fetchFail, fetchStart } from "../features/authSlice"
import { getStockSuccess } from "../features/stockSlice"
const useStockCalls = () => {
    const dispatch = useDispatch()
    const {axiosWithToken} = useAxios()
    const getStocks = async(url="firms")=>{
        dispatch(fetchStart)
        try {
            const {data}= await axiosWithToken(`${url}`)
            const apiData = data.data
            dispatch(getStockSuccess({apiData, url}))
        } catch (error) {
            dispatch(fetchFail())
        }
    }
  return {getStocks}
}

export default useStockCalls