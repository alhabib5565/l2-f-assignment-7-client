import Container from "@/layout/Container";
import { Check, Heart } from "lucide-react";
import mainImage from "../../assets/about/one.jpg";
import subImage from "../../assets/about/tow.jpg";
import dashed from "../../assets/about/dashed.png";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const motionDuration = 0.3;

  const textRef = useRef<HTMLDivElement>(null);
  const textIsInView = useInView(textRef);
  const imgRef = useRef<HTMLDivElement>(null);
  const imgIsInView = useInView(imgRef);
  return (
    <div className="mt-14 lg:mt-32 overflow-hidden">
      <Container className="flex flex-col-reverse lg:flex-row gap-14 items-center">
        <motion.div
          ref={imgRef}
          initial={!imgIsInView ? { x: -100, opacity: 0.5 } : ""}
          animate={imgIsInView ? { x: 0, opacity: 1 } : ""}
          transition={{
            duration: motionDuration,
          }}
          className="flex-1 relative bg-red-0 mb-20"
        >
          <img
            className="w-[80%] rounded-[5%] mx-auto"
            src={mainImage}
            alt=""
          />
          {/* <img
            className="translate-y-[-70%] block translate-x-[120%] w-[300px] rounded-[20%] border-8"
            src={subImage}
            alt=""
          /> */}
          <img
            className="absolute h-[80%] -bottom-16 object-contain z-[-10] left-0 w-[35%] "
            src={dashed}
            alt=""
          />
          <img
            className="absolute -bottom-16 right-0 w-[40%] rounded-[20%] object-cover border-8 border-white"
            src={subImage}
            alt=""
          />
        </motion.div>
        <motion.div
          ref={textRef}
          initial={!textIsInView ? { x: 100, opacity: 0.5 } : ""}
          animate={textIsInView ? { x: 0, opacity: 1 } : ""}
          transition={{
            duration: motionDuration,
          }}
          className=" w-full mx-auto flex-1"
        >
          <p className="flex gap-4 items-center justify-center lg:justify-normal text-primary text-[22px] font-[700] tracking-[5px] uppercase">
            <Heart className="size-6" /> <span>ABOUT US</span>
          </p>
          <h2 className="text-center lg:text-left">
            We Are Non-Profit Charity
            <span className="text-primary"> Organization</span> Provide
          </h2>
          <p className="mt-6">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <ul className="space-y-4 mt-6">
            <li className="flex gap-2 items-center">
              <Check className="bg-primary p-[2px] rounded-full text-white size-5 font-extrabold" />
              At vero eos et accusamus et iusto odio
            </li>
            <li className="flex gap-2 items-center">
              <Check className="bg-primary p-[2px] rounded-full text-white size-5 font-extrabold" />
              Established fact that a reader will be distracted
            </li>
            <li className="flex gap-2 items-center">
              <Check className="bg-primary p-[2px] rounded-full text-white size-5 font-extrabold" />
              Sed ut perspiciatis unde omnis iste natus sit
            </li>
          </ul>
          <Button className="h-10 uppercase text-lg mt-8">DISCOVER MORE</Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default About;
