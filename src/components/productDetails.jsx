import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinus,
  faPlus,
  faTruck,
  faShirt,
  faChevronDown,
  faHeart,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";

export default function productDetails() {
  const { id } = useParams();
  const { data, loading, error } = useFetch(
    "http://localhost:3000/products/" + id
  );

  const [addProduct, setAddProduct] = useState(1);
  const [productDescription, setProductDescription] = useState(false);

  // const navigate = useNavigate();
  // const handleClick = () => {
  //   fetch("http://localhost:3000/products/" + data.id, {
  //     method: "DELETE",
  //   }).then(() => {
  //     navigate("/products");
  //     console.log("deleted successfully");
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="product-details parent">
      {error && <div>ERROR</div>}
      {loading && <div>LOADING....</div>}
      {data && (
        <section className=" my-6  xl:mx-8 lg:mx-0  md:mx-0 sm:mx-0">
          <form
            onSubmit={handleSubmit}
            className=" flex xl:flex-row lg:flex-row lg:gap-0 md:flex-row md:flex-wrap md:gap-0  sm:px-6 sm:flex-col gap-2"
          >
            <img
              className="xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-full lg:px-1  md:px-2 rounded"
              src={data.image}
              alt=""
            />
            <img
              className=" xl:w-1/3 lg:w-2/5 md:w-1/2 sm:w-full lg:px-1  md:px-2  rounded"
              src={data.image}
              alt=""
            />
            <div className=" xl:w-1/3 lg:w-1/5 md:w-full sm:w-full lg:p-1  p-4 ">
              <h2 className="text-lg py-1">Agha Jaan</h2>

              <h3 className="text-neutral-500 text-sm">
                {data.brandName}-Pret
              </h3>
              <p className="text-neutral-500 text-sm">ID:{data.id}</p>
              <div className="flex pl-1 flex-row my-4 w-20 p-1 text-sm items-center gap-1 rounded bg-sky-200	">
                <FontAwesomeIcon icon={faTruck} color="#0B60B0" />
                <p className="text-xs pl-1 text-blue-700	">26 Days</p>
              </div>
              <div className="flex flex-row gap-2 items-end	">
                <h2 className="text-xl">{data.price}</h2>
                <s className="text-md text-neutral-500 text-sm">
                  {data.discountPrice}
                </s>
              </div>
              <hr></hr>
              <h2 className="pt-3 font-bold">Size:*</h2>
              <div className="pt-2 pb-4">
                <button className="w-20 lg:w-10 lg:mx-1 rounded text-neutral-500 border border-neutral-400	 p-3 mx-2">
                  S
                </button>
                <button className="w-20  lg:w-10  lg:mx-1  rounded text-neutral-500 border border-neutral-400	 p-3 mx-2">
                  M
                </button>
                <button className="w-20  lg:w-10  lg:mx-1 rounded text-neutral-500 border border-neutral-400	 p-3 mx-2">
                  L
                </button>
                <button className="w-20  lg:w-10  lg:mx-1 rounded text-neutral-500 border border-neutral-400	 p-3 mx-2">
                  XL
                </button>
              </div>

              <h2 className="pt-3 font-bold">Quantity:</h2>
              <div className="flex flex-row items-center ">
                <div className="flex flex-row w-1/4 lg:w-1/2 xl:w-1/4 md:w-1/6 sm:w-1/5 border border-neutral-400 h-15 p-2 mt-2 rounded justify-between">
                  <button
                    className="px-2"
                    onClick={() => {
                      if (addProduct === 0) {
                        setAddProduct(addProduct);
                      } else {
                        setAddProduct(addProduct - 1);
                      }
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p>{addProduct}</p>
                  <button
                    className="px-2"
                    onClick={() => {
                      if (addProduct < 5) {
                        setAddProduct(addProduct + 1);
                      } else {
                        setAddProduct(addProduct);
                      }
                    }}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <p className="px-2 text-sm text-neutral-500 lg:text-xs">
                  5 pieces at most per customer
                </p>
              </div>
              <h2 className="pt-4 font-bold">Shipping</h2>
              <p className="bg-neutral-200 py-2 text-sm px-4  text-neutral-700">
                STANDARD SHIPPING<br></br> Est. Shipping Date: Feb 14, 2024
              </p>
              <div className=" flex flex-row flex-nowrap">
                <button className="p-3 px-5 border mr-2 lg:p-2  border-neutral-400 rounded">
                  {" "}
                  <FontAwesomeIcon icon={faHeart} />
                </button>
                <button className="bg-black text-white p-3 w-10/12 rounded my-2 ">
                  <FontAwesomeIcon
                    className="px-2"
                    icon={faShoppingBag}
                    color="white"
                  />
                  Add to Bag
                </button>
              </div>
              <h2 className="py-2 font-bold">Description</h2>
              <div className="flex flex-row justify-between snap-y  border border-neutral-500 px-2 rounded">
                <button>
                  {" "}
                  <FontAwesomeIcon icon={faShirt} />
                </button>
                <p className="p-3">Product Description</p>
                <button
                  onClick={() => {
                    setProductDescription(!productDescription);
                  }}
                >
                  <FontAwesomeIcon icon={faChevronDown} />
                </button>
              </div>
              {productDescription && (
                <div className=" mt-2 p-3 bg-white border border-neutral-500 rounded">
                  <h2 className="text-neutral-500">
                    <b> Outfit Type:</b> Eastern
                    <br></br>
                    <b> Style :</b> Kurta Set<br></br> <b>Package Includes:</b>{" "}
                    3 pieces -Top Bottom & Dupatta
                    <br></br>
                    <b>
                      Fabric<br></br> Shirt:
                    </b>
                    Organza Dupatta: Organza<br></br> <b>Trouser:</b> Raw Silk
                    <br></br>
                    <b> Color Type:</b> Red<br></br>
                    <b> Work Technique:</b> Embroidered & Embellished<br></br>{" "}
                    <b> Best worn in:</b> All Season<br></br>
                    <b> Description:</b> Organza shirt paired with organza
                    dupatta & Raw Silk trouser. Its a 3 piece Stitched outfit.
                    <br></br> <b> Disclaimer:</b> Actual product colour may vary
                    slightly from the image.
                  </h2>
                </div>
              )}
            </div>
          </form>
        </section>
      )}
    </div>
  );
}
