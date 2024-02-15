import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faHeart,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Dropdown from "./dropdown.jsx";
import Modal from "./modal.jsx";
import Modal1 from "./modal1.jsx";
import Modal2 from "./modal2.jsx";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let women = [
    " Sale",
    "Eastern Wear",
    "Western Wear",
    "Active Wear",
    "Footwear",
    "Accessories",
    "Brands",
  ];
  let men = [
    " Sale",
    "Eastern Wear",
    "Western wear",
    "Active wear",
    "Footwear",
    "Accessories",
  ];
  const kids = [" Sale", "Girls", "Boys", "Newborn Kids"];
  const [country, setCountry] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showModalOne, setShowModalOne] = useState(false);
  const [showModalThree, setShowModalThree] = useState(false);

  return (
    <nav className="">
      <div
        className="flex justify-between  items-center my-1 px-2 pt-0 xl:mx-14 lg:mx-14 md:mx-8 xl:pt-0 lg:pt-0 md:py-0
       sm:mx-0 sm:pt-0  "
      >
        <div
          className="flex flex-row items-center xl:visible  lg:visible md:visible
           sm:invisible "
        >
          <NavLink
            to="/women"
            className="p-3 pt-4 mr-2 rounded-sm bg-black text-white md:mr-1"
          >
            Women
          </NavLink>

          <NavLink
            className="p-3 pt-4 rounded-sm mr-2 hover:bg-gray-100 text-gray-500"
            to="/men"
          >
            Men
          </NavLink>

          <NavLink
            className="p-3 pt-4 rounded-sm hover:bg-gray-100  text-gray-500"
            to="/kids"
          >
            Kids
          </NavLink>
        </div>

        <img
          className=" my-2 xl:h-10 lg:h-10 md:h-10 md:relative sm:absolute sm:h-10 sm:pl-8"
          src="laam_logo.png"
          alt="logo image"
        />
        <ul className="flex flex-row  ">
          <li className="py-4 px-4 xl:visible lg:visible md:visible sm:invisible ">
            <button className="" onClick={() => setCountry((prev) => !prev)}>
              <img
                className="h-5 "
                src="https://cdn.shopify.com/s/files/1/2337/7003/files/pakistan16x16.svg?v=1655194161"
                alt="pak"
              />
            </button>
            {country && <Dropdown />}
          </li>
          <li
            onClick={() => setShowModal(true)}
            className="navbarIcons xl:px-4 lg:px-4 md:p-4 sm:p-3 "
          >
            <FontAwesomeIcon icon={faHeart} size="lg" />
          </li>
          {showModal && <Modal onClose={() => setShowModal(false)} />}
          <li
            className="navbarIcons xl:px-4 lg:p-4 md:p-4 sm:p-3"
            onClick={() => setShowModalOne(true)}
          >
            {" "}
            <FontAwesomeIcon icon={faUser} size="lg" />
          </li>
          {showModalOne && <Modal1 onClose={() => setShowModalOne(false)} />}

          <li
            onClick={() => setShowModalThree(true)}
            className="navbarIcons xl:px-4 lg:p-4 md:p-4 sm:p-3"
          >
            {" "}
            <FontAwesomeIcon icon={faBagShopping} size="lg" />
          </li>
          {showModalThree && (
            <Modal2 onClose={() => setShowModalThree(false)} />
          )}
        </ul>
      </div>
      <div className="xl:hidden lg:hidden md:hidden sm:visible flex flex-row justify-around sticky">
        <NavLink to="women" className="p-2 px-10 border-black	 border-b-2	">
          Women
        </NavLink>
        <NavLink to="men" className="p-2 px-10">
          Men
        </NavLink>
        <NavLink to="kids" className="p-2 px-10">
          Kids
        </NavLink>
      </div>
      <div
        className=" mx-14  cursor-pointer lg:visible xl:visible md:visible sm:invisible md:px-0  lg:h-20 md:h-20 sm:h-0
         flex  justify-between items-center 	 "
      >
        <ul className="flex flex-row flex-wrap ">
          {women.map((w, i) => (
            <NavLink to="/women/type" className="p-3 text-gray-500" key={i}>
              {w}
            </NavLink>
          ))}
        </ul>

        <div className="h-10 bg-slate-100 w-1/4 pl-4 py-2 rounded-3xl">
          <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
          <NavLink to="/search">
            <input
              className="ml-1 cursor-pointer md:w-1/2	 bg-slate-100 border-0 outline-slate-100 	 "
              type="text"
              name=""
              id=""
              placeholder="Search on LAAM"
            />
          </NavLink>
        </div>
      </div>
      <hr></hr>
    </nav>
  );
}
