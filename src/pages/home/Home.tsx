import About from "./About";
import Hero from "./Hero";
import ReliefGoods from "./ReliefGoods";
import Gallery from "./gallery/Gallery";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className=" mt-[88px]">
      <Hero />
      <ReliefGoods />
      <About />
      <Testimonial />
      <Gallery />
    </div>
  );
};

export default Home;
