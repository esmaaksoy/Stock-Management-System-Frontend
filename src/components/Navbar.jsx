import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import Switch from "./Switch";
import logo from "../assets/logo.png";
import { useSelector } from "react-redux";
import useAuthCalls from "../service/useAuthCalls";
import { NavLink } from "react-router-dom";
const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];
const menu = [
  {
    title: "Dashboard",
    url: "/stock/",
  },
  {
    title: "Purchases",
    url: "/stock/purchases/",
  },
  {
    title: "Sales",
    url: "/stock/sales/",
  },
  {
    title: "Firms",
    url: "/stock/firms/",
  },
  {
    title: "Brands",
    url: "/stock/brands/",
  },
  {
    title: "Products",
    url: "/stock/products/",
  },
]
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const {user} = useSelector((state)=> state.auth)
  const {logout} = useAuthCalls()
  return (
    <header className="bg-[#ABFB60] dark:bg-black">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/stock/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-12 w-auto" src={logo} alt="" />
          </NavLink>
        </div>
        <div className="flex lg:hidden ">
        <Switch />
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12 ">
          {menu.map((item)=> <NavLink key={item.title} to={item.url} className="dark:text-white">{item.title}</NavLink> )}        
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Switch />
          {user ? (
            <button
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
              onClick={logout}
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </button>
          ) : (
            <button
              className="text-sm font-semibold leading-6 text-gray-900 dark:text-white"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </button>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden "
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10 " />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-[#ABFB60] dark:bg-black px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between ">
            <NavLink to="/stock/"className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src={logo} alt="" />
            </NavLink>
            <div className="flex">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 dark:text-white" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-6 flow-root ">
            <div className="-my-6 divide-y divide-gray-500/10 ">
              <div className="space-y-2 py-6 ">         
                {menu.map((item)=> <NavLink key={item.title} to={item.url} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-white" >{item.title}</NavLink> )}             
              </div>
              <div className="py-6">              
                  <button          
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 dark:text-white "
                    onClick={logout}
                  >
                    Logout
                  </button>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
