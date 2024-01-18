import { useSelector } from "react-redux";
import {
  CheckIcon,
  DolarIcon,
  PurchasesIcon,
  UsersIcon,
} from "../helper/icons";
const Stats = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const totalSales = sales?.reduce((acc, item) => acc + item.amount, 0);
  const totalPurchases = purchases?.reduce((acc, item) => acc + item.amount, 0);
  const section = [
    { title: "Total Sales", amount: `$${totalSales}`, icon: <DolarIcon /> },
    { title: "Purchases", amount: `$${totalPurchases}`, icon: <PurchasesIcon /> },
    { title: "New Members", amount: "1256", icon: <UsersIcon /> },
    { title: "Total CheckLists", amount: "1506", icon: <CheckIcon /> },
  ];
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 ">
        <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {section.map(({ amount, title, icon }) => (
            <div
              key={title}
              className="flex justify-between items-center gap-4 rounded-lg shadow-md px-4 py-8 dark:bg-white"
            >
              <div className="flex flex-col ">
                <dt className="order-last text-lg  text-gray-500">{amount}</dt>
                <dd className="text-3xl sm:text-base md:text-xl font-extrabold  text-[#ABFB60] ">
                  {title}
                </dd>
              </div>
              <div>{icon}</div>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
export default Stats;
