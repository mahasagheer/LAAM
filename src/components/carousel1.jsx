import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

s;
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function carousel1() {
  return (
    <div className="moveBtn flex justify-between ">
      <button className="btn p-4 shadow bg-white text-grey-800 hover:bg-white  ">
        {" "}
        <FontAwesomeIcon icon={faChevronLeft} size="lg" />
      </button>

      <button className="btn p-4 shadow bg-white text-grey-800 hover:bg-white ">
        {" "}
        <FontAwesomeIcon icon={faChevronRight} size="lg" />
      </button>
    </div>
  );
}
