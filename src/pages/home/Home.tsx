import About from "./About";
import Footer from "./Footer";
import Hero from "./Hero";
import ReliefGoods from "./ReliefGoods";
import Gallery from "./gallery/Gallery";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className="h-screen mt-[88px]">
      <Hero />
      <ReliefGoods />
      <About />
      <Testimonial />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
