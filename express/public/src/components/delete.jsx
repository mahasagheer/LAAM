import { faTruck, faUnsorted } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading, error } = useFetch(
    "https://mahasagheer.github.io/jsonServer/db.json"
  );

  function handleClick(id) {
    fetch("https://mahasagheer.github.io/jsonServer/db.json" + id, {
      method: "DELETE",
    }).then(() => navigate(1));
    alert("Product deleted successfully");
    window.location.reload(false);
  }

  return (
    <>
      <section>
        <div className="parent flex flex-row justify-between flex-wrap sm:justify-evenly sm:gap-0 my-6  xl:mx-14 lg:mx-14 md:mx-0 sm:mx-0">
          {error && <div>{error}</div>}
          {loading && <div>LOADING....</div>}
          {data &&
            data.map((p, i) => {
              return (
                <div
                  key={i}
                  className="flex flex-col px-2 xl:w-1/4 lg:w-1/4 md:w-1/3 sm:w-2/4 sm:px-2"
                >
                  <div>
                    {/* {console.log(p.id)} */}
                    <img className=" w-full rounded" src={p.image} alt="" />
                    <div className="flex flex-row pt-2">
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
                  </div>

                  <div className="flex pl-1 flex-row mb-8 justify-between items-center w-full text-sm gap-1 rounded	">
                    <div className="text-xs w-1/4 text-blue-700  bg-sky-200 rounded px-2">
                      <FontAwesomeIcon
                        icon={faTruck}
                        color="#0B60B0"
                        className="pr-1"
                      />
                      26 Days
                    </div>
                    <div className="">
                      <button
                        onClick={() => handleClick(p.id)}
                        className="border bg-red-500 py-2 px-4 mx-1 rounded"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </section>
    </>
  );
}
