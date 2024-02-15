import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";

export default function api() {
  const { data, loading, error } = useFetch("http://localhost:3000/products");
  return (
    <>
      <h1>TOP TRENDING</h1>
      <section>
        <div className="parent flex flex-row justify-between flex-wrap sm:justify-evenly sm:gap-0 my-6  xl:mx-14 lg:mx-14 md:mx-0 sm:mx-0">
          {error && <div>{error}</div>}
          {loading && <div>LOADING....</div>}
          {data &&
            data.map((p) => {
              return (
                <div
                  key={p.id}
                  className="flex flex-col px-2 xl:w-1/4 lg:w-1/4 md:w-1/3 sm:w-2/4 sm:px-2"
                >
                  <Link to={`/products/${p.id}`}>
                    {/* {console.log(p.id)} */}
                    <img className=" w-full rounded" src={p.image} alt="" />
                    <div className="flex flex-row pt-2">
                      {" "}
                      <h4 className=" text-red-600 text-lg font-medium	 ">
                        {p.price}
                      </h4>
                      <s className="py-1 px-2 text-sm text-neutral-500">
                        {p.discountPrice}
                      </s>
                    </div>
                    <div className="">
                      <p className="pb-2">Agha jaan</p>
                    </div>
                  </Link>

                  <div className="flex pl-1 flex-row mb-8 w-3/12 text-sm items-center gap-1 rounded bg-sky-200	">
                    {" "}
                    <FontAwesomeIcon icon={faTruck} color="#0B60B0" />
                    <p className="text-xs pl-1 text-blue-700	">26 Days</p>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
