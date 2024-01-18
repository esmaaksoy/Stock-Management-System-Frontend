const Footer = () => {
  const list = ["About Us","License","Contribute","Contact Us"]
  return (
    <footer className="flex w-full flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  bg-[#ABFB60] px-10 py-6 text-center md:justify-between dark:bg-black">
      <p color="blue-gray" className="font-normal dark:text-white">
        &copy; 2024 Stock Management System
      </p>
      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8 ">
     {list.map((item,index)=>(
     <li key={index}  >
          <p className="font-normal transition-colors hover:text-gray-600 focus:text-gray-600 dark:text-white"
          >
          {item}
          </p>
        </li> 
     ))}
      </ul>
    </footer>
  );
}
export default Footer