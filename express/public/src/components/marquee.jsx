import Marquee from "react-fast-marquee";

export default function moveSection() {
  const rowSliderOne = [
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Mohsin_Naveed_Ranjha1706269279.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Kanwal_Malik1706269304.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Zuruj1706269430.png?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Naqshi_3_1706367372.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Sara_n_Saima1706367396.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Faiza-Saqlain_2_1706269216.jpg?width=300",
  ];
  const rowSliderTwo = [
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Erum_Khan_2_1706367417.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Allure-by-ih1706269331.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Zainab-Chottani1706269410.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Nayaab1706269459.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Hussain-Rehar1706269028.jpg?width=300",
    "https://cdn.shopify.com/s/files/1/2337/7003/files/Wardha_Saleem1706367346.jpg?width=300",
  ];
  return (
    <>
      <h1 className=" xs:text-2xl  md:text-4xl">Featured Brands</h1>
      <div className=" p-2 xl:mx-16 lg:mx-10 md:mx-0 sm:mx-0 xs:mx-0 xs:p-0">
        <Marquee pauseOnHover={true}>
          <div className="flex flex-row ">
            {rowSliderOne.map((f, i) => (
              <img
                key={i}
                className="p-2 xl:h-auto lg:h-auto md:h-20 sm:h-20 sm:p-1 xs:p-1 xs:h-14"
                src={f}
                alt=""
              />
            ))}
          </div>
        </Marquee>
        <Marquee direction="right" pauseOnHover={true}>
          <div className="flex flex-row ">
            {rowSliderTwo.map((f, i) => (
              <img
                key={i}
                className="p-2  xl:h-auto lg:h-auto md:h-20 sm:h-20 sm:p-1 xs:p-1 xs:h-14"
                src={f}
                alt=""
              />
            ))}
          </div>
        </Marquee>
      </div>
    </>
  );
}
