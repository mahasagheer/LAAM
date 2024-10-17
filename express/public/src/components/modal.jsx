import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faExclamationTriangle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
export default function modal({ onClose }) {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target);
    onClose();
  };
  return (
    <>
      <div
        ref={modalRef}
        onClick={closeModal}
        className="inset-0 fixed bg-black bg-opacity-70 z-10 flex justify-center flex-col items-center"
      >
        <div className="h-auto bg-white rounded p-4 xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 ">
          <div className="flex flex-row justify-between p-4 ">
            <h1 className="text-center md:px-10 xl:text-4xl lg:text-2xl md:text-xl sm:text-lg">
              Sign In / Register
            </h1>
            <FontAwesomeIcon
              onClick={onClose}
              icon={faXmark}
              size="xl"
              className="cursor-pointer	"
            />
          </div>
          <hr className="py-2"></hr>
          <div className="warningLine flex flex-row p-4 gap-2 ">
            <FontAwesomeIcon icon={faExclamationTriangle} />
            <h3 className=" xl:text-base lg:text-base md:text-sm sm:text-xs">
              This feature requires signing in. Please create an account or sign
              in to proceed.
            </h3>
          </div>
          <p className="py-2 px-1 text-xs">Phone Number</p>
          <div className="px-4 flex border-neutral-300	border rounded	 flex-row items-center w-full ">
            <img
              className="px-2 sm:px-0"
              src="https://cdn.shopify.com/s/files/1/2337/7003/files/pakistan16x16.svg?v=1655194161"
              alt=""
            />
            <h3 className="px-2  text-zinc-400 sm:px-0">+92|</h3>
            <input
              className="inputEmailField p-3.5 xl:w-full lg:w-full md:w-full sm:w-full"
              type="number"
              placeholder="Enter your Phone Number"
            />
          </div>
          <button className="my-6  p-3.5 rounded w-full bg-gray-950 text-white	">
            Continue with OTP
          </button>
          <div className="flex flex-col justify-center items-center">
            <p className=" p-2   text-center text-xs	">Or continue with</p>
            <div className="emailBtn w-1/7 p-2 m-2 text-center  bg-slate-500 ">
              <FontAwesomeIcon
                className="emailIcon"
                size="xl"
                style={{ color: "#ffffff" }}
                icon={faEnvelope}
              />
            </div>
            <p className="text-xs pb-4">Email</p>
          </div>
          <hr className=""></hr>

          <p className="px-6 py-4 text-xs">
            By signing in, I confirm that I have reviewed the Privacy Policy and
            Terms of Services
          </p>
        </div>
      </div>
    </>
  );
}
