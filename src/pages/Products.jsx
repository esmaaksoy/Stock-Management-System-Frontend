import RecentReport from "../components/RecentReport";
import Stats from "../components/Stats";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
const Products = () => {
  return (
    <div className="p-4">
      <Stats />
      <div className="flex flex-wrap gap-3 justify-center">
        <LineChart />
        <BarChart />
        <RecentReport />
      </div>
    </div>
  );
};

export default Products;
