import { CheckIcon, DolarIcon, PurchasesIcon, UsersIcon } from "../helper/icons"

const Stats = () => {
    const section =[
        {header:"Total Sales", title:"$16900", icon: <DolarIcon/> },
        {header:"New Members", title:"1256", icon: <UsersIcon/>  },
        {header:"Purchases", title:"$17440", icon: <PurchasesIcon/>},
        {header:"Total CheckLists", title:"1256", icon: <CheckIcon/>  }, 
      ]
  return (
    <section className="bg-white dark:bg-gray-900">
        <div className="px-4 py-12 sm:px-6 md:py-16 lg:px-8 ">
            <dl className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {section.map(({header,title, icon}) => (
                <div className="flex justify-between items-center gap-4 rounded-lg shadow-md px-4 py-8 dark:bg-white">
                <div className="flex flex-col ">
                  <dt className="order-last text-lg  text-gray-500">
                    {header}
                  </dt>
                  <dd className="text-3xl sm:text-base md:text-xl font-extrabold  text-[#ABFB60] ">
                  {title}
                  </dd>
                </div>
                <div>
                  {icon}
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-10 text-[#ABFB60] rounded-full"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d={d}
                    />
                  </svg> */}
                </div>
              </div>
                ))}
            </dl>       
        </div>
      </section>
  )
}

export default Stats
