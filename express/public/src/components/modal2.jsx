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
        className="inset-0 fixed bg-black  rounded bg-opacity-70 z-10"
      >
        <div className="h-auto flex flex-row p-6 absolute right-10 mt-10 rounded bg-white xl:w-1/3 lg:w-1/3 md:w-1/2 sm:w-1/2 ">
          <div className="">
            <img
              className="w-3/5 ml-20"
              src="black-white-line-bag-made-paper-ecology-protection-from-plastic-vector-illustration_214887-649.avif"
              alt=""
            />
            <h3 className="text-center text-2xl p-2">
              Your shopping bag is empty
            </h3>
            <p className="text-center p-3 text-sm">
              Let's fill it up shall we?
            </p>
            <button className="text-center p-2 w-full bg-slate-300">
              I'm flexible, show trending items
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
