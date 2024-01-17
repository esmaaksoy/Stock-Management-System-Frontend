import { Route, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Purchases from "../pages/Purchases"
import Sales from "../pages/Sales"
import Brands from "../pages/Brands"
import Firms from "../pages/Firms"
import Products from "../pages/Products"
import ScrollToTop from "../pages/ScroolToTop";
import { NotFound } from "../components/DataMessage";

const AppRouter = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />} />
          <Route path="purchases" element={<Purchases />} />
          <Route path="sales" element={<Sales />} />
          <Route path="firms" element={<Firms />} />
          <Route path="brands" element={<Brands />} />
          <Route path="products" element={<Products />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </>
  );
};

export default AppRouter;
