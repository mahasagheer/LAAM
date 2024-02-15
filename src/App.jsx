import Footer from "./components/footer.jsx";
import Api from "./components/api.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/productDetails.jsx";
import Marquee from "./components/marquee.jsx";
import Category from "./components/category.jsx";
import SliderOne from "./components/sliderOne.jsx";
import Carousel from "./components/carousel.jsx";
import Navbar from "./components/navbar.jsx";
import Admin from "./components/admin.jsx";
import Delete from "./components/delete.jsx";
import Login from "./components/login.jsx";
const slides = [
  "https://cdn.shopify.com/s/files/1/2337/7003/files/Festive_Unstitched1703178490.jpg",

  "https://cdn.shopify.com/s/files/1/2337/7003/files/Winter_Unstitched1703178467.jpg",

  "https://cdn.shopify.com/s/files/1/2337/7003/files/Festive-Ready-to-Wear-Desktop1703773308.jpg",

  "https://cdn.shopify.com/s/files/1/2337/7003/files/Designer_Luxury1703178531.jpg",

  "https://cdn.shopify.com/s/files/1/2337/7003/files/Modest-Desktop1703773397.jpg",
];

const App = () => {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Navbar />
                <Carousel autoSlide={true}>
                  {slides.map((s, i) => (
                    <img key={i} src={s} alt="" />
                  ))}
                </Carousel>

                <SliderOne />
                <Category />
                <Marquee />
                <Api />
                <Footer />
              </div>
            }
          />
          <Route
            exact
            path="/products"
            element={
              <div>
                <Navbar />
                <Api />
                <Footer />
              </div>
            }
          />
          <Route
            path="/products/:id"
            element={
              <div>
                <Navbar />
                <ProductDetails />
              </div>
            }
          />
          <Route
            path="/admin"
            element={
              <div>
                <Admin />
                <Delete />
              </div>
            }
          ></Route>

          <Route path="/login" element={<Login />} />
          <Route
            path="/admin/del"
            element={
              <div>
                <Delete />
                <Footer />
              </div>
            }
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
};
export default App;

// import Home from "./pages/home.jsx";
// import RootLayout from "./layouts/rootLayout.jsx";
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<RootLayout />}>
//       <Route index element={<Home />}></Route>
//     </Route>
//   )
// );
