import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
export default function category() {
  const categoryImages = [
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Wedding-wear1704911797.jpg?width=212",
      title: "Wedding Wear",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Footwear1704912020.jpg?width=212",
      title: "Footwear",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Jewellery1704912033.jpg?width=212",
      title: "Jewellery",
    },

    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Hand_Bags1704912026.jpg?width=212",
      title: "Hand Bags",
    },

    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Western_Wear1704912201.jpg?width=212",
      title: "Modest wear",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Hijab_1_1705070650.jpg?width=212",
      title: "Hijab wear",
    },

    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Scarves_1_1705070675.jpg?width=212",
      title: "Shawl",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Abaya_2_1705070636.jpg?width=212",
      title: "Abaya Wear",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Daily_pret1704912000.jpg?width=212",
      title: "Daily Pret",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Summer_Unstitched1704912012.jpg?width=212",
      title: "Summer Unstitched",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Festive_Unstitched1704912254.jpg?width=212",
      title: "Festive Unstitched",
    },

    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Luxury_Pret1704911981.jpg?width=212",
      title: "Luxury Pret",
    },
    {
      url: "https://cdn.shopify.com/s/files/1/2337/7003/files/Active_Wear1704912122.jpg?width=212",
      title: "Active Wear",
    },
  ];
  const [noCategoryElements, setNoCategoryElements] = useState(6);
  const slice = categoryImages.slice(0, noCategoryElements);
  const [categoryBtnText, setCategoryBtnText] = useState("View All Categories");
  const [downIcon, setDownIcon] = useState(faChevronDown);
  const viewMoreCategory = () => {
    if (noCategoryElements === 6) {
      setNoCategoryElements(noCategoryElements + 7);
      setCategoryBtnText("View Less");
      setDownIcon(faChevronUp);
    } else {
      setNoCategoryElements(noCategoryElements - 7);
      setCategoryBtnText("View All Categories");
      setDownIcon(faChevronDown);
    }
  };

  return (
    <>
      <h1>Shop By Category</h1>
      <section>
        <div className=" xl:mx-16 lg:mx-10 md:mx-8 sm:mx-6">
          <div className="flex flex-row flex-wrap xl:gap-5 lg:gap-10 md:gap-10 sm:gap-10   ">
            {slice.map((slice, i) => (
              <div
                key={i}
                className=" flex flex-col xl:w-auto lg:w-40 md:w-30 sm:w-20"
              >
                <img src={slice.url} alt="" />
                <h3 className="category-image-name xl:text-lg lg:text-lg md:text-sm sm:text-xs text-center mt-2">
                  {i.title}
                </h3>
              </div>
            ))}
          </div>
          <button
            className="mt-10 categoryBtn text-center mx-30 text-blue-500	 "
            onClick={() => viewMoreCategory()}
          >
            {categoryBtnText}
            <FontAwesomeIcon
              className="pl-2"
              icon={downIcon}
              color="rgb(59 130 246)"
            />
          </button>
        </div>
      </section>
    </>
  );
}
