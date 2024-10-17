import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faClose } from "@fortawesome/free-solid-svg-icons";

import useFetch from "./useFetch";
const search = ({ onClose }) => {
  const [search, setSearch] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
  };
  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const filterData = (value) => {
    const res = filter.filter((f) => f.name.toLowerCase().includes(value));
    setData(res);
  };
  //   const { data, loading, error } = useFetch("http://localhost:3001/products");
  //   data.map((p) => console.log(p));
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => setData(data), setFilter(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="inset-0 fixed bg-black bg-opacity-70 z-10 flex pt-[10%] flex-col items-center">
          <button onClick={onClose} className="mb-5">
            <FontAwesomeIcon
              icon={faClose}
              color="#ffffff"
              className="text-3xl"
            />
          </button>
          <input
            type="text"
            className="w-[60%] p-4 text-lg"
            placeholder="Search here..."
            value={search}
            onChange={(e) => filterData(e.target.value)}
          ></input>
          {/* {data.map((d, i) => {
            <div className="bg-white p-4 text-left my-1 w-[60%]" key={i}>
              {data.image}
            </div>;
          })} */}
        </div>
      </form>
    </>
  );
};

export default search;
