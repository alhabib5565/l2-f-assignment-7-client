import provider1 from "../../../assets/testimonials/provider1.jpg";
import provider2 from "../../../assets/testimonials/provider2.jpg";
import provider3 from "../../../assets/testimonials/provider3.jpg";
import provider4 from "../../../assets/testimonials/provider4.jpg";
import provider5 from "../../../assets/testimonials/provider5.jpg";
import provider6 from "../../../assets/testimonials/provider6.jpg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";
import Container from "@/layout/Container";
import SectionHeader from "@/components/ui/shared/SectionHeader";
const Testimonial = () => {
  const testimonials = [
    {
      providerImage: provider1,
      providerName: "Gordo Novak",
      designation: "Founder & CEO",
      review:
        "Working with Gordo Novak was an absolute pleasure. Their platform streamlined our donation process, making it easy for our supporters to contribute. The team's dedication to our cause was evident in every aspect of their service. Highly recommend!",
    },
    {
      providerImage: provider2,
      providerName: "Reid E Butt",
      designation: "Co-Founder & CTO",
      review:
        "Reid E Butt exceeded our expectations. Their expertise in creating user-friendly interfaces and secure donation portals made a significant impact on our fundraising efforts. We appreciated their attention to detail and prompt support.",
    },
    {
      providerImage: provider3,
      providerName: "Parker Jimenez",
      designation: "Director of Operations",
      review:
        "We are incredibly grateful for the support of Parker Jimenez. Their innovative approach to online fundraising helped us reach our donation goals faster than we anticipated. The team was responsive, knowledgeable, and genuinely invested in our mission.",
    },
    {
      providerImage: provider4,
      providerName: "Heruli Nez",
      designation: "Head of Development",
      review:
        "Heruli Nez made a significant impact on our fundraising efforts. Their customizable donation platform allowed us to tailor our campaigns to specific donor segments, resulting in increased engagement and contributions. The team's commitment to our success was evident throughout our partnership.",
    },
    {
      providerImage: provider5,
      providerName: "EmpowerDonation",
      designation: "Co-Founder & CMO",
      review:
        "EmpowerDonations provided us with the tools and support we needed to elevate our online giving strategy. Their intuitive platform empowered our supporters to make a difference seamlessly. We appreciated their collaborative approach and proactive suggestions for optimizing our donation process.",
    },
    {
      providerImage: provider6,
      providerName: "Sylvia H Green",
      designation: "Director of Marketing",
      review:
        "We couldn't be happier with our decision to partner with Sylvia H Green. Their expertise in leveraging technology for social good helped us amplify our message and expand our donor base. The team's dedication to driving positive change through innovative solutions is truly commendable.",
    },
  ];

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
        {testimonials.map((provider, index) => (
          <TestimonialCard provider={provider} key={index} />
        ))}
      </Carousel>
    </Container>
  );
};

export default Testimonial;
