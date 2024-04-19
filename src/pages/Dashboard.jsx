import RecentReport from "../components/RecentReport";
import Stats from "../components/Stats";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
import useStockCalls from "../service/useStockCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { LoadingMsg, NotFound } from "../components/DataMessage";
import { Helmet } from "react-helmet";

const Dashboard = () => {
  const { getStocks, getPromise } = useStockCalls();
  useEffect(() => {
    getPromise(["sales", "purchases"]);
  }, []);

  const { loading, error } = useSelector((state) => state.stock);

  return (
    <>
      <Helmet>
        <title>Dashboard | Stock Management System</title>
        <meta name="description" content="Your page description" />
      </Helmet>

      <div className="p-4 dark:bg-gray-900 min-h-[100vh]">
        {error && <NotFound />}
        {loading && <LoadingMsg />}
        {!error && !loading && (
          <>
            <Stats />
            <div className="flex flex-col lg:flex-row gap-3 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
              <LineChart />
              <BarChart />
              <RecentReport />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Dashboard;
