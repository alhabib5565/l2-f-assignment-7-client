import About from "./About";
import Hero from "./Hero";
import ReliefGoods from "./ReliefGoods";
import Gallery from "./gallery/Gallery";
import GratitudeWallSection from "./gratitude/GratitudeWallSection";
import Testimonial from "./testimonial/Testimonial";

const Home = () => {
  return (
    <div className=" mt-[88px]">
      <Hero />
      <ReliefGoods />
      <About />
      <Testimonial />
      <Gallery />
      <GratitudeWallSection />
    </div>
  );
};

export default Home;
