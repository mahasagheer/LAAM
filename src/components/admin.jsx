import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAdd,
  faClose,
  faTrashCan,
  faPenToSquare,
  faCircleInfo,
} from "@fortawesome/free-solid-svg-icons";
import Delete from "./delete";

export default function Admin() {
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [discountPrice, setDiscountPrice] = useState();
  const [brandName, setBrandName] = useState();
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const product = { image, price, discountPrice, brandName };
    console.log(product);
    setIsPending(true);
    fetch("http://localhost:3000/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    }).then(() => {
      alert("Product added successfully");
      setIsPending(false);
      navigate("/admin/del");
    });
  };
  return (
    <div className="flex flex-row">
      <div className="w-1/6 h-screen bg-gray-950 border-2">
        <div className="flex flex-row flex-wrap justify-between p-4">
          <h2 className="px-2 text-3xl text-white ">Menu</h2>
          <FontAwesomeIcon
            icon={faClose}
            className="px-4 admin-hover-btn p-2 rounded text-2xl text-white"
          />
        </div>

        <ul className="flex flex-col flex-nowrap p-4">
          <NavLink
            to="/admin"
            className="p-2 admin-hover-btn text-lg  my-1 rounded  text-white "
          >
            <FontAwesomeIcon icon={faAdd} className="px-4 " />
            Add Product
          </NavLink>
          <NavLink
            to=""
            className="p-2  admin-hover-btn text-lg  my-1 rounded  text-white"
          >
            <FontAwesomeIcon icon={faTrashCan} className="px-4" />
            Delete Product
          </NavLink>
          <NavLink
            to=""
            className="p-2  admin-hover-btn text-lg  my-1 rounded  text-white"
          >
            <FontAwesomeIcon icon={faPenToSquare} className="px-4" />
            Edit Product
          </NavLink>
          <NavLink
            to=""
            className="p-2  admin-hover-btn text-lg  my-1 rounded  text-white"
          >
            <FontAwesomeIcon icon={faCircleInfo} className="px-4" />
            Order Details
          </NavLink>
        </ul>
      </div>
      <form onSubmit={handleSubmit} className=" w-3/5 ">
        <div className=" flex flex-col justify-center p-4">
          <h1 className="text-center">ADD a new Product</h1>
          <label className="text-lg py-2 text-neutral-700">Image URL:</label>
          <input
            className="h-10 rounded border border-neutral-400 outline-none px-3"
            type="text"
            required
            placeholder="Enter image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <label className="text-lg  py-2 text-neutral-700">Price:</label>
          <input
            type="text"
            className="h-10 rounded border border-neutral-400  outline-none px-3"
            placeholder="Product Price"
            required
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <label className="text-lg  py-2 text-neutral-700">
            Discount Price:
          </label>
          <input
            type="text"
            className="h-10 rounded border border-neutral-400  outline-none px-3"
            placeholder="Enter Discount Price"
            required
            value={discountPrice}
            onChange={(e) => setDiscountPrice(e.target.value)}
          />
          <label className="text-lg  py-2 text-neutral-700">Brand Name:</label>
          <input
            type="text"
            className="h-10 rounded border border-neutral-400  outline-none px-3"
            required
            placeholder="Enter brand name"
            value={brandName}
            onChange={(e) => setBrandName(e.target.value)}
          />
          <label className="text-lg  py-2 text-neutral-700">Description:</label>
          <textarea
            type="text"
            className="h-20 rounded border border-neutral-400 outline-none p-3"
            placeholder="Enter product description"
            // value={brandName}
            // onChange={(e) => setBrandName(e.target.value)}
          />

          {!isPending && (
            <button className="bg-sky-300 p-2 my-3 text-lg w-1/6 rounded">
              Submit
            </button>
          )}
          {isPending && (
            <button
              className="bg-sky-300 p-2 my-3 text-lg w-1/6 rounded"
              disabled
            >
              Adding product....
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
