import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faStore,
  faTableCellsLarge,
  faUser,
  faHeart,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const footer = () => {
  const [phoneNo, setPhoneNo] = useState("");
  function top() {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <div className="topBtn flex flex-col xl:visible lg:visible md:visible sm:invisible ">
        <FontAwesomeIcon icon={faChevronUp} />
        <button onClick={top} className="topBtnText p-2">
          Back TO TOP
        </button>
      </div>
      <footer className=" bg-neutral-900 w-full h-1/3 xl:visible lg:visible md:visible sm:visible xs:invisible md:w-full  xs:w-0  ">
        <div className="parent mx-16 flex flex-row ">
          <div className=" w-1/2 px-25  py-5 sm:px-0 md:h-full	xs:w-full xs:h-0">
            <h3 className="footer-msg px-20 sm:px-10 pt-5  ">
              Get on Our list!
            </h3>
            <p className="footer-msg-detail  sm:px-10 px-20 pb-10">
              Be the first to know about new products, exclusive collections,
              the latest trends, and more. By Clicking on "Subscribe", you agree
              to receive our newsletter. You can opt out at any time. Learn more
              about our Privacy Policy here.
            </p>
          </div>
          <div className=" w-1/2 xs:invisible md:w-full md:visible ">
            <h2 className="phoneEmail pt-14 pb-4 text-white ">Phone | Email</h2>
            <div className=" flex flex-row items-center w-20 bg-white">
              <img
                className="px-3"
                src="https://cdn.shopify.com/s/files/1/2337/7003/files/pakistan16x16.svg?v=1655194161"
                alt=""
              />
              <h3 className="px-2  text-zinc-400 sm:px-0">+92|</h3>

              <input
                className="inputEmailField p-3.5  w-50"
                type="number"
                placeholder="Enter your Phone Number"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
              />
              <button className=" subscribe bg-white p-3 pl-14 text-zinc-400 xl:visible lg:visible md:invisible sm:invisible">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </footer>
      <footer className=" bg-slate-100 w-full xl:visible lg:visible md:visible sm:invisible sm:h-0  xs:w-0  md:w-full xs:invisible xs:h-0">
        <div className="px-20 flex flex-row py-6 gap-14 w-10/12">
          <div className="">
            <h3 className="footerHeading">HELP & INFORMATION</h3>
            <p className="footerPoints">
              Track Your Order<br></br> Shipping And Delivery
              <br></br>
              Return & Exchange Policy
              <br></br>
              Order & Refund Policy<br></br> Refund Policy For International
              Customers
            </p>
          </div>
          <div className="">
            <h3 className="footerHeading">MORE FROM LAAM</h3>
            <p className="footerPoints">
              Editorial Blog<br></br> Become A Seller<br></br> Rewards Program
              <br></br> E-Gift Cards <br></br>Careers - We're Hiring!
            </p>
          </div>
          <div className="">
            <h3 className="footerHeading">FOR ASSISTANCE</h3>
            <p className="footerPoints">
              From Mon-Sat 10:00 Am To 10:00 Pm<br></br> Whatsapp: +923167776158{" "}
              <br></br>For Call: 042-111-115-226 (UAN)<br></br> Email:
              customercare@laam.pk
            </p>
          </div>
          <div className="">
            <h3 className="footerHeading">CURRENCY</h3>
            <div className="flex flex-row">
              <img
                className="p-2"
                src="https://cdn.shopify.com/s/files/1/2337/7003/files/pakistan16x16.svg?v=1655194161"
                alt=""
              />
              <span className="footerPoints p-2">PKR</span>
            </div>
          </div>
        </div>
      </footer>

      <footer className="mobileFooter xl:hidden lg:hidden md:hidden sm:visible xs:visible">
        <div className="  border-t flex flex-row justify-evenly ">
          <NavLink to="/home" className="iconsSize py-2 px-10 xs:px-5">
            <FontAwesomeIcon icon={faHouse} />
            <p className="iconName p-1">Home</p>
          </NavLink>
          <NavLink to="category" className="iconsSize py-2 px-10  xs:px-2">
            <FontAwesomeIcon icon={faTableCellsLarge} />
            <p className="iconName p-1">Category</p>
          </NavLink>
          <NavLink to="brands" className="iconsSize py-2 px-10  xs:px-2">
            {" "}
            <FontAwesomeIcon icon={faStore} />
            <p className="iconName p-1">Brands</p>
          </NavLink>
          <NavLink to="wishlist" className="iconsSize py-2 px-10 xs:px-2 ">
            <FontAwesomeIcon icon={faHeart} />
            <p className="iconName p-1">Wishlist</p>
          </NavLink>
          <NavLink to="profile" className="iconsSize py-2 px-10  xs:px-2">
            <FontAwesomeIcon icon={faUser} />
            <p className="iconName p-1">Profile</p>
          </NavLink>
        </div>
      </footer>
    </>
  );
};
export default footer;
