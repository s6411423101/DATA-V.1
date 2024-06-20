"use client";
import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import { Disclosure } from "@headlessui/react";

export const Navbar = () => {
  const navigation = [
    "About Us",
    "Our Focus",
    "Resources & Data",
    "News",
    "Blog",
  ];
  const handleScroll = () => {
    const nav = document.querySelector("nav");
    if (nav) {
      if (window.scrollY > 0) {
        nav.classList.add("shadow-md");
      } else {
        nav.classList.remove("shadow-md");
      }
    }
  };
  if (typeof window !== "undefined") {
    window.addEventListener("scroll", handleScroll);
  }
  return (
    <div className="w-full">
      <div className=" mx-auto">
        <nav className=" m-auto top-0 bg-w relative flex flex-wrap items-center justify-between p-8 lg:px-0">
          {/* Logo  */}

          <Disclosure>
            {({ open }: { open: boolean }) => (
              <>
                <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
                  <Link href="/">
                    <span className="flex items-center space-x-2 text-2xl font-medium text-orange-600 dark:text-gray-100">
                      <img
                        src="https://academic.pkru.ac.th/images/Annouce/Budget/2565/PKRU.png"
                        alt="Description of the image"
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
                      {open && (
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      )}
                      {!open && (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </Disclosure.Button>

                  <Disclosure.Panel className=" absolute pt-28 top-0 right-0 flex flex-wrap w-full my-5 lg:hidden">
                    <>
                      {navigation.map((item, index) => (
                        <Link
                          key={index}
                          href="/"
                          className=" size-24 font-extralight text-3xl  w-full px-4 py-2 -ml-4  rounded-md dark:text-gray-300 hover:text-orange-600 focus:text-orange-600 focus:outline-none"
                        >
                          {item}
                        </Link>
                      ))}
                    </>
                  </Disclosure.Panel>
                </div>
              </>
            )}
          </Disclosure>

          {/* menu  */}
          <div className="hidden text-center lg:flex lg:items-center">
            <ul className=" justify-center items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
              {navigation.map((menu, index) => (
                <li className="mr-3 nav__item" key={index}>
                  <Link
                    href="/"
                    className="inline-block px-4 py-2 text-lg font-normalno-underline rounded-md hover:text-orange-600 focus:text-orange-600"
                  >
                    {menu}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden mr-3 space-x-4 lg:flex nav__item">
            <Link
              href="/"
              className="px-3 py-2 text-white bg-orange-600 rounded-md md:ml-5"
            >
              Your Language
            </Link>

            <ThemeChanger />
          </div>
        </nav>
      </div>
    </div>
  );
};
