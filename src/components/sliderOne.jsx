import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";
//SLIDERs ONE TW0 THREE ON HOME PAGE
const firstSlider = [
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Agha_Jaan1705934479.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Haseens_Official1705934467.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Maria_B_15_1706109587.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Allure_By_IH1705934886.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Gulaal1705934680.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Malhaar1705935192.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Panache_Apparel1706110422.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Meeral_Luxe1705934502.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Sahibas_By_Mirza1706258382.jpg?width=400",
];
const secondSlider = [
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Afrozeh1706258916.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Baroque_6_1706272413.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Zara_Shahjahan_11_1706101669.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Garnet_Clothing_7_1706275294.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Qalamkar1705424883.png?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Mushq_4_1706185292.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Gulaal_5_1706272423.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Zarif1705508941.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Maryum_N_Maria1706259763.png?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Garnet_Clothing_7_1706275283.jpg?width=400",
];
const thirdSlider = [
  "https://cdn.shopify.com/s/files/1/2337/7003/files/HEM1706113172.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Misl1706269995.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Seemab1706269959.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Laal_Clothing_6_1706270455.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Spark_Wear1706270831.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Maria_Basit_Malik1706273103.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Hues_Atelier1706270093.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Haniya_Jibran_2_1706367833.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Henna_Mehndi1706270136.jpg?width=400",
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Wajahat_mansoor1706270047.jpg?width=400",
];
export default function slider() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <h1>Top 10 Deals Of The Day</h1>
      <div className=" my-6  xl:mx-16 lg:mx-14 md:mx-0 sm:mx-0">
        <Slider {...settings}>
          {firstSlider.map((f, i) => (
            <NavLink to="/products" key={i} className="p-2 shadow  ">
              <img className="" src={f} alt="" />
            </NavLink>
          ))}
        </Slider>
      </div>
      <h1>New Arrivals Of The Week</h1>
      <div className="parent w-lvw my-6  xl:mx-14 lg:mx-14 md:mx-0 sm:mx-0">
        <Slider {...settings}>
          {secondSlider.map((s, i) => (
            <div key={i} className="p-2 shadow  ">
              <img className="" src={s} alt="" />
            </div>
          ))}
        </Slider>
      </div>
      <h1 className="mt-8">Best of Designer Luxury</h1>
      <div className="parent w-lvw my-6  xl:mx-14 lg:mx-14 md:mx-0 sm:mx-0">
        <Slider {...settings}>
          {thirdSlider.map((s, i) => (
            <div key={i} className="p-2 shadow  ">
              <img className="" src={s} alt="" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
