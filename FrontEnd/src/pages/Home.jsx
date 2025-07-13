import Hero from "../components/Hero";
import Features from "../components/Features.jsx";
import Brands from "../components/Brands.jsx";
import ProductCarousel from "../components/ProductCarousel.jsx";

function Home() {
  return (
    <>
      <Hero />
      <ProductCarousel />
      <Features />
      <Brands />
    </>
  );
}

export default Home;
