import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faUser } from "@fortawesome/free-solid-svg-icons";

export default function () {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    if (username === "admin" && password === "admin") {
      //   alert("Password Matched hurry :)");
      navigate("/admin");
    } else {
      alert("Wrong Password :(");
      window.location.reload(false);
    }
  };
  return (
    <>
      <form
        className="flex justify-center items-center h-screen "
        onSubmit={login}
      >
        <div className="bg-slate-300 w-2/5 p-6 h-2/3 flex flex-col rounded xl:w-2/5 lg:1/3 md:w-1/2 sm:w-1/2">
          <h2 className="text-center heading_two ">GOOD TO SEE YOU</h2>
          <hr></hr>
          <p className="p-2 px-2 bg-red-300 sm:text-sm">
            This feature is only for admins. Otherwise this login will be
            reported.
          </p>
          <label className="pt-4 pb-1 xl:text-base md:text-sm lg:text-base sm:text-xs">
            Username*
          </label>
          <div className="w-full h-10 rounded bg-white border border-neutral-400">
            <FontAwesomeIcon icon={faUser} className="px-4" />|
            <input
              className="h-9 w-5/6 outline-none px-2 md:w-2/3 sm:w-3/4"
              placeholder="Username@gmail.com"
              type="text"
              required
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <label className="pt-4 pb-1 xl:text-base lg:text-base md:text-sm sm:text-xs">
            Password*
          </label>
          <div className="w-full h-10 rounded bg-white border border-neutral-400">
            <FontAwesomeIcon icon={faLock} className="px-4" />|
            <input
              className="h-9 w-5/6 outline-none px-2 md:w-2/3  sm:w-3/4"
              placeholder="XXXXX"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className=" bg-gray-950 rounded h-10 text-white w-full my-4">
              Login
            </button>
            <div className="flex justify-between text-black  xl:mt-12 lg:mt-10 md:mt-5 sm:text-sm sm:mt-0">
              <a href="#" className="underline">
                Don't have an account?
              </a>
              <a href="#" className="underline">
                Forgot Password
              </a>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
