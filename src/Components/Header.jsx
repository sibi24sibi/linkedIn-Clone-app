import React from "react";
import { auth } from "../Firebase";
import {
  linkedinSmallLogo,
  linkedinBigLogo,
  defaultProfile,
  friendzyLogo
} from "../assets/assets.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHome,
  faUser,
  faMagnifyingGlass,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { Navbar } from "flowbite-react";
import { useAuth } from "../Api/AuthApi.jsx";
import { signOut } from "firebase/auth";
import uuid from "react-uuid";

import SearchComponent from "./SearchComponent.jsx";

function Header() {
  const { user, logout } = useAuth();

  const welcomePaths = ['/', '/about', '/contact'];

  if (welcomePaths.includes(location.pathname)) {
    return (
      <header className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg z-50 shadow-sm">
        <div className="container mx-auto px-4 lg:py-3 py-5">
          <nav className="flex items-center justify-between">
            <NavLink to="/" className="lg:text-2xl text-lg font-bold text-blue-900 hover:text-blue-700 transition">
              <img
                src={friendzyLogo}
                className='h-14 lg:h-20 w-auto my-[-24px]'
                alt="Logo"
              />
            </NavLink>
            <div className="flex items-center gap-6">
              <NavLink to="/about" className="text-blue-600  whitespace-nowrap text-xs md:text-base hover:text-blue-800 transition">
                About Us
              </NavLink>
              <NavLink to="/contact" className="text-blue-600 whitespace-nowrap text-xs md:text-base hover:text-blue-800 transition">
                Contact Us
              </NavLink>
              {!user && <NavLink to="/signup">
                <button className="lg:px-6 lg:py-2 -translate-y-0.5 text-xs md:text-base text-blue-600 lg:bg-blue-600 lg:text-white lg:rounded-full lg:hover:bg-blue-700 transition">
                  Sign Up
                </button>
              </NavLink>}

            </div>
          </nav>
        </div>
      </header>
    );
  }




  return (
    <Navbar
      fluid={true}
      rounded={true}
      className="bg-white border-gray-200 dark:bg-gray-900 justify-between shadow-lg md:px-10 py-3    "
    >
      <div className=" flex  ">
        <NavLink
          to="/">

          <img
            src={friendzyLogo}
            className=' h-20 w-auto my-[-24px]'
            alt="Logo"
          />

        </NavLink>


        <SearchComponent />

      </div>

      <Navbar.Toggle className=" absolute top-0 right-0 my-3 mx-3  " />

      <Navbar.Collapse>
        {user ? (
          <ul className="flex font-medium flex-col p-4 gap-2 md:p-0 mt-4 lg:space-x-8 md:space-x-4 rtl:space-x-reverse md:flex-row md:w-auto md:mt-0 md:border-0 md:bg-white">
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "border-b-0  md:border-b-2 md:border-b-black" : ""
              }
            >
              <li className="py-1 flex flex-col md:text-[#475569] md:hover:text-[black]">
                <FontAwesomeIcon icon={faHome} className="hidden md:block" />
                <span className="m-1">Home</span>
              </li>
            </NavLink>
            <NavLink
              to="/connect"
              className={({ isActive }) =>
                isActive ? "border-b-0  md:border-b-2 md:border-b-black" : ""
              }
            >
              <li className="py-1 flex flex-col md:text-[#475569] md:hover:text-[black]">
                <FontAwesomeIcon icon={faUser} className="hidden md:block" />
                <span className="m-1">My Network</span>
              </li>
            </NavLink>
            <NavLink
              to="/jobs"
              className={({ isActive }) =>
                isActive ? "border-b-0  md:border-b-2 md:border-b-black" : ""
              }
            >
              <li className="py-1 flex flex-col md:text-[#475569] md:hover:text-[black]">
                <FontAwesomeIcon
                  icon={faBagShopping}
                  className="hidden md:block"
                />
                <span className="m-1">Jobs</span>
              </li>
            </NavLink>
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                isActive ? " border-b-0  md:border-b-2 md:border-b-black" : ""
              }
            >
              <li className="py-1 flex flex-col md:text-[#475569] md:hover:text-[black]">
                <FontAwesomeIcon icon={faUser} className="hidden md:block" />
                <span className="m-1">Me</span>
              </li>
            </NavLink>
            {/* 

              <NavLink to="/postJob" className={({ isActive }) => isActive ? ' border-b-0 md:border-b-2 md:border-b-black' : ''}>
                <li className="py-1 flex flex-col md:text-[#475569] md:hover:text-[black]">
                  <FontAwesomeIcon icon={faBagShopping} className="hidden md:block" />
                  <span className="m-1 mt-2">Post a Job</span>
                </li>
              </NavLink>
              
              */}
            <NavLink to="/postJob" className={({ isActive }) => isActive ? ' border-b-0 md:border-b-2 md:border-b-black' : ''}>
              <li className="py-1 flex flex-col md:text-[#475569] md:hover:text-[black]">
                <button
                  className="text-slate-950 border-2 rounded-lg text-base font-normal uppercase py-2 px-4"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faRightFromBracket} />
                </button>
              </li>
            </NavLink>
          </ul>
        ) : (
          <ul className="md:flex rtl:space-x-reverse md:flex-row md:w-auto gap-4 ">
            <NavLink
              to="/signin"
              className={({ isActive }) =>
                `flex flex-col md:flex-row text-center ${isActive
                  ? "border-[1px] border-blue-600 text-blue-950 rounded-full"
                  : ""
                }`
              }
            >
              <li>
                <button className="text-black hover:bg-[#e2e8f0] font-medium bg-white py-2 px-4 rounded-full ">
                  Login
                </button>
              </li>
            </NavLink>

            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `flex flex-col md:flex-row text-center ${isActive
                  ? "border-[1px] border-blue-600 text-blue-950 rounded-full"
                  : ""
                }`
              }
            >
              <li>
                <button className="text-black hover:bg-[#e2e8f0] font-medium bg-white py-2 px-4 rounded-full">
                  Sign up
                </button>
              </li>
            </NavLink>
          </ul>
        )}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
