import RecentReport from "../components/RecentReport";
import Stats from "../components/Stats";
import LineChart from "../components/LineChart";
import BarChart from "../components/BarChart";
const Dashboard = () => {
  return (
    <div className="p-4 dark:bg-gray-900 min-h-[100vh]">
    <Stats />
    <div className="flex flex-col lg:flex-row gap-3 px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      <LineChart />
      <BarChart />
      <RecentReport />
    </div>
  </div>
  )
}

export default Dashboard