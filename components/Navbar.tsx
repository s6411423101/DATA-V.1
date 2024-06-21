"use client";
import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const navigation = [
    "Dashbord",
    "About Us",
    "Our Focus",
    "Resources & Data",
    "News",
    "Blog",
  ];

  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.pageYOffset;

      if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }

      setLastScrollTop(currentScrollTop <= 0 ? 0 : currentScrollTop);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollTop]);

  return (
    <nav
      className={`${
        isScrollingDown
          ? "bg-white text-gray-600"
          : "bg-opacity-30 backdrop-blur-lg text-white"
      } transition-all duration-300 ease-in-out backdrop-filter border-b border-gray-200 mx-auto top-0 sticky flex flex-wrap items-center justify-between p-8 lg:px-0`}
    >
      {/* Logo */}
      <Disclosure>
        {({ open }) => (
          <div className="flex flex-wrap items-center justify-around w-full lg:w-auto">
            {/* <Mobile> */}
            <Link href="/">
              <span
                className={` flex-grow items-center space-x-2 text-2xl font-medium ${
                  isScrollingDown ? "text-orange-600" : "text-white"
                }`}
              >
                <img
                  src="https://academic.pkru.ac.th/images/Annouce/Budget/2565/PKRU.png"
                  alt="PKRU Logo"
                  width={180}
                  height={200}
                />
              </span>
            </Link>

            <Disclosure.Button
              aria-label="Toggle Menu"
              className="px-2 py-1 mr-auto text-gray-500 rounded-md lg:hidden hover:text-orange-600 focus:text-orange-600 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700"
            >
              <svg
                className="w-6 h-6 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                {open ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </Disclosure.Button>

            <Disclosure.Panel className="absolute pt-28 top-0 right-0 flex flex-wrap w-full my-5 lg:hidden">
              {navigation.map((item, index) => (
                <Link
                  key={index}
                  href="/"
                  className={`size-24 font-extralight text-3xl w-full px-4 py-2 -ml-4 rounded-md hover:text-orange-600 focus:text-orange-600 focus:outline-none ${
                    isScrollingDown ? "text-gray-600" : "text-white"
                  }`}
                >
                  {item}
                </Link>
              ))}
            </Disclosure.Panel>
          </div>
        )}
      </Disclosure>

      {/* Menu */}
      <div className="hidden text-center lg:flex lg:items-center">
        <ul className="justify-center items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
          {navigation.map((menu, index) => (
            <li className="mr-3 nav__item" key={index}>
              <Link
                href="/"
                className={`inline-block px-4 py-2 text-lg font-normal no-underline rounded-md hover:text-orange-600 focus:text-orange-600 ${
                  isScrollingDown ? "text-gray-600" : "text-white"
                }`}
              >
                {menu}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Additional Links */}
      <div className="hidden mr-3 space-x-4 lg:flex nav__item">
        <Link
          href="/"
          className={`px-3 py-2 rounded-md md:ml-5 ${
            isScrollingDown
              ? "bg-orange-600 text-white"
              : "bg-white text-orange-600"
          }`}
        >
          Your Language
        </Link>
      </div>
    </nav>
  );
};
