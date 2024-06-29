import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "flag-icons/css/flag-icons.min.css";

export default function Navbar() {
  const location = useLocation();
  const { t, i18n } = useTranslation("menu");

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  const isActivePage = (pathname) => {
    return location.pathname === pathname;
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="fixed top-0 left-0 z-20 w-full">
      <div className="border-gray-200 py-2.5 bg-gray-900 w-full">
        <div className="flex flex-wrap items-center justify-between xl:justify-between lg:justify-around md:justify-between max-w-screen-xl xl:px-4 lg:px-6 px-2 mx-auto">
          <a href="/" className="flex items-center">
            <img
              src="/travelmango.png"
              className="xl:h-[50px] md:mr-3 h-9"
              alt="tuktukmango Logo"
            />
          </a>

          <div className="flex items-center lg:order-2 gap-x-2">
            <div className="lg:order-1">
              <div className="relative flex items-center order-3">
                <div
                  className="bg-gray-700 text-white cursor-pointer flex items-center px-3 py-2 rounded "
                  onClick={toggleDropdown}
                >
                  <span
                    className={`fi ${
                      i18n.language === "en" ? "fi-gb" : "fi-de"
                    } mr-2`}
                  ></span>
                  {i18n.language === "en" ? "" : ""}
                  <svg
                    className="ml-2 w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                {isDropdownOpen && (
                  <ul className="absolute left-0 mt-28 w-full bg-white text-black rounded shadow-lg z-10">
                    <li
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 rounded"
                      onClick={() => changeLanguage("en")}
                    >
                      <span className="fi fi-gb"></span>
                    </li>
                    <li
                      className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200 rounded"
                      onClick={() => changeLanguage("de")}
                    >
                      <span className="fi fi-de"></span>
                    </li>
                  </ul>
                )}
              </div>
            </div>
            {/* ========================================================================= */}
            <div className="flex items-center">
              <div className="hidden mr-4 sm:inline-block">
                <span></span>
              </div>
              <a
                href="/Trips"
                className="text-black hover:text-white bg-[#F0FF42] transition-colors duration-300 hover:bg-[#54B435] font-bold xl:rounded-lg rounded-md text-sm px-2 xl:px-5 py-1 xl:py-2.5 sm:mr-2 lg:mr-0 hidden md:block"
              >
                {t("plan_your_trip")}
              </a>
              <button
                onClick={toggleMenu}
                className="inline-flex items-center p-2 ml-1 text-sm text-yellow-500 rounded-lg lg:hidden hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-200 dark:text-yellow-400 dark:hover:bg-yellow-700 dark:focus:ring-yellow-600"
                aria-expanded={isMenuOpen}
              >
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "hidden" : ""}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <svg
                  className={`w-6 h-6 ${isMenuOpen ? "" : "hidden"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <div
            className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
              isMenuOpen ? "block" : "hidden"
            }`}
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:gap-x-8 lg:mt-0">
              <ul></ul>
              <li>
                <Link
                  to="/"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/") ? "text-[#F0FF42]" : "text-gray-300"
                  }  hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 lg:dark:hover:bg-transparent font-bold xl:text-lg`}
                >
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link
                  to="/Accessible"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/Accessible")
                      ? "text-[#F0FF42]"
                      : "text-gray-300"
                  }  hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 lg:dark:hover:bg-transparent font-bold xl:text-lg`}
                >
                  {t("accessible")}
                </Link>
              </li>
              <li>
                <Link
                  to="/Vehicles"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/Vehicles")
                      ? "text-[#F0FF42]"
                      : "text-gray-300"
                  } hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 lg:dark:hover:bg-transparent font-bold xl:text-lg`}
                >
                  {t("vehicles")}
                </Link>
              </li>

              <li>
                <Link
                  to="/Destinations"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/Destinations")
                      ? "text-[#F0FF42]"
                      : "text-gray-300"
                  }  hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 lg:dark:hover:bg-transparent font-bold xl:text-lg`}
                >
                  {t("destinations")}
                </Link>
              </li>

              <li>
                <Link
                  to="/ContactUs"
                  onClick={scrollToTop}
                  className={`${
                    isActivePage("/ContactUs")
                      ? "text-[#F0FF42]"
                      : "text-gray-300"
                  }  hover:text-white block py-2 pl-3 pr-4 border-b border-gray-100 lg:border-0 lg:p-0 lg:dark:hover:bg-transparent font-bold xl:text-lg`}
                >
                  {t("contact_us")}
                </Link>
              </li>
              <li className="py-2 pl-3 md:py-0 md:pl-0 border-b border-gray-100 md:border-0">
                <a
                  href="/Trips"
                  className="text-black hover:text-white bg-[#F0FF42] transition-colors duration-300 hover:bg-[#54B435] font-bold md:rounded-lg rounded text-sm px-2 xl:px-5 py-1 xl:py-2.5 sm:mr-2 lg:mr-0 md:hidden"
                >
                  {t("plan_your_trip")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
