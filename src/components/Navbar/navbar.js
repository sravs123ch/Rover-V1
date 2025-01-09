import { Fragment, useState, useContext, useEffect } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Tab,
  TabGroup,
  TabList,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  // ShoppingCartIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { BsHeart } from "react-icons/bs"; // Import wishlist icon
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Logo from "../../assets/logo.jpg";
import Login from "../../components/Login";
import { GlobalContext } from "../../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";

import { BsCart3 } from "react-icons/bs";

const currencies = ["INR", "USD", "AUD", "EUR", "GBP"];
const Categories = [
  { name: "Clothing", href: "/clothing" },
  { name: "FMCG", href: "/FMCG" },
  { name: "Construction Material", href: "/construction-material" },
  { name: "Jewellery", href: "/gold" },
  { name: "Groceries", href: "/groceries" },
  { name: "Food Items", href: "/food" },
  { name: "Dairy", href: "/dairy" },

];

export default function Example() {
  const [open, setOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleOpen = () => setLoginOpen(true);
  const handleClose = () => setLoginOpen(false);
  const { cartItems } = useContext(GlobalContext);
  const [navbarColor, setNavbarColor] = useState("ffffff");
  const [navbarTextColor, setNavbarTextColor] = useState("#000000");
  const [clicked, setClicked] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const navigate = useNavigate();
  const uniqueItemsCount = cartItems.length;
  const [wishlistItems, setWishlistItems] = useState(false);

  //   const jwtToken = localStorage.getItem('jwtToken');
  // console.log(jwtToken);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setNavbarColor("#ffffff");
        setNavbarTextColor("#000000");
      } else {
        setNavbarColor("#ffffff"); // Initial navbar color
        setNavbarTextColor("#000000");
      }
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="bg-white z-40">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-10 w-10" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {Categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      <a href={category.href}>{category.name}</a>
                    </Tab>
                  ))}
                </TabList>
              </div>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="/Register"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create an account
                </a>
              </div>
              <div className="flow-root">
                <button
                  onClick={handleOpen}
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Sign in
                </button>
                {loginOpen && (
                  <Login isOpen={loginOpen} onClose={handleClose} />
                )}
              </div>
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {/* Currency selector */}
              <form>
                <div className="inline-block">
                  <label htmlFor="mobile-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="mobile-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-gray-700 focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-800"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="fixed top-0 z-10 w-full border-b border-gray-200">
        <nav aria-label="Top">
          {/* Top navigation */}
          <div className="bg-gray-900">
            <div className="mx-auto flex h-10 max-w-7xl items-center justify-between px-4 sm:px-20 lg:px-20">
              {/* Currency selector */}
              <form className="hidden lg:block lg:flex-1">
                <div className="flex">
                  <label htmlFor="desktop-currency" className="sr-only">
                    Currency
                  </label>
                  <div className="group relative -ml-2 rounded-md border-transparent bg-gray-900 focus-within:ring-2 focus-within:ring-white">
                    <select
                      id="desktop-currency"
                      name="currency"
                      className="flex items-center rounded-md border-transparent bg-gray-900 bg-none py-0.5 pl-2 pr-5 text-sm font-medium text-white focus:border-transparent focus:outline-none focus:ring-0 group-hover:text-gray-100"
                    >
                      {currencies.map((currency) => (
                        <option key={currency}>{currency}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center">
                      <ChevronDownIcon
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </form>

              <p className="flex-1 text-center text-sm font-medium text-white lg:flex-none">
                Get free delivery on orders over ₹1000
              </p>

              <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a
                  href="/register"
                  className="text-sm font-medium text-white hover:text-gray-100"
                >
                  Create an account
                </a>
                <span aria-hidden="true" className="h-6 w-px bg-gray-600" />
                <div className="flow-root">
                  <button
                    onClick={handleOpen}
                    className="text-sm font-medium text-white hover:text-gray-100"
                  >
                    Sign in
                  </button>
                  {loginOpen && (
                    <Login isOpen={loginOpen} onClose={handleClose} />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Secondary navigation */}
          <div className="bg-white">
            <div className="mx-auto max-w-10xl px-8 sm:px-6 lg:px-8">
              <div className="border-b border-gray-200">
                <div className="flex items-center justify-between h-20">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:items-center">
                    <a href="/">
                      <span className="sr-only">Your Company</span>
                      <img alt="" src={Logo} className="h-20 w-full" />
                    </a>
                  </div>
                  {/* Logo (lg-) */}
                  <a href="#" className="lg:hidden">
                    <span className="sr-only">Your Company</span>
                    <img alt="" src={Logo} className="h-12 w-18" /> {/* Smaller logo for mobile */}
                  </a>

                  <div className="flex items-center gap-6 ml-10 font-medium text-lg hidden lg:flex">
                    {Categories.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-500 hover:text-gray-900"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex items-center lg:hidden">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="-ml-2 rounded-md bg-white p-2 text-gray-400"
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="h-10 w-10" />
                    </button>

                    {/* Search */}
                    <a href="#" className="ml-2 p-2 text-gray-400 hover:text-gray-500">
                      <span className="sr-only">Search</span>
                      <MagnifyingGlassIcon aria-hidden="true" className="h-10 w-10" />
                    </a>
                  </div>
                </div>

                {/* Mobile Navigation (menu items) */}
                <div
                  className={`lg:hidden ${open ? "flex" : "hidden"} flex-col items-center gap-4 p-4 bg-white`}
                >
                  <div className="flex flex-col gap-4">
                    {Categories.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        className="text-gray-500 hover:text-gray-900"
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>

                  {/* Account and Cart (Mobile) */}
                  <div className="flex items-center justify-between w-full gap-6">
                    <a
                      href="/profile"
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <UserIcon aria-hidden="true" className="h-6 w-6" />
                    </a>
                    <div className="relative">
                      <BsCart3 className="text-xl cursor-pointer" />
                      <span
                        className={`absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none ${cartItems.length === 0
                            ? "bg-red-600 text-white"
                            : "bg-red-600 text-red-100"
                          } rounded-full transform translate-x-1/2 -translate-y-1/2`}
                      >
                        {cartItems.length === 0 ? "0" : uniqueItemsCount}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </nav>
      </header>
    </div>
  );
}
