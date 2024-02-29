// import provider1 from "../../../assets/testimonials/provider1.jpg";
// import provider2 from "../../../assets/testimonials/provider2.jpg";
// import provider3 from "../../../assets/testimonials/provider3.jpg";
// import provider4 from "../../../assets/testimonials/provider4.jpg";
// import provider5 from "../../../assets/testimonials/provider5.jpg";
// import provider6 from "../../../assets/testimonials/provider6.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import Container from "@/layout/Container";
import SectionHeader from "@/components/ui/shared/SectionHeader";
import { useGetAllTestimonialQuery } from "@/redux/features/testimonialApi/testimonialApi";
import Loader from "@/components/ui/shared/Loader";
import { TTestimonial } from "@/types/testimonials";
const Testimonial = () => {
  const { data: testimonials, isLoading } =
    useGetAllTestimonialQuery(undefined);
  // console.log(data);
  if (isLoading) {
    return <Loader />;
  }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Container className="mt-14 lg:mt-24 ">
      <SectionHeader subTitle="Testimonials" title="Top Providers" />
      <Carousel
        draggable={true}
        swipeable={true}
        responsive={responsive}
        // transitionDuration={300}
        autoPlay={true}
        autoPlaySpeed={3000}
        className=" mt-14 gap-32"
        itemClass="px-5"
      >
        {testimonials.data.map((provider: TTestimonial, index: number) => (
          <TestimonialCard provider={provider} key={index} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonial;
