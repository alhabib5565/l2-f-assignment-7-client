import Container from "@/layout/Container";
import heroImage from "../../assets/images/banner2.jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  const ref = useRef(null);

  const container = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
    },
  };
  const children = {
    hidden: {
      y: -100,
    },
    show: {
      y: 0,
    },
  };

  return (
    <div
      ref={ref}
      style={{ backgroundImage: `url(${heroImage})` }}
      className={`bg-[url('${heroImage}')] min-h-[calc(100vh-88px)] bg-scroll lg:bg-fixed bg-cover `}
    >
      <div
        className={cn(" bg-slate-900 bg-opacity-50", {
          "bg-opacity-90": isDark,
        })}
      >
        <Container className="min-h-[calc(100vh-88px)] h-full flex items-center ">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            transition={{
              staggerChildren: 0.3,
              delayChildren: 0.3,
            }}
            className="max-w-[750px] space-y-6 my-14 lg:py-0"
          >
            <motion.p
              variants={children}
              className="flex gap-4 items-center text-secondary text-[22px] font-[700] tracking-[5px] uppercase"
            >
              <Heart className="size-8" /> <span>Fund for helpLess</span>
            </motion.p>

            <motion.h1 variants={children}>
              We Help People In Need
              <span className="text-primary">Around</span> The Wrold
            </motion.h1>
            <motion.p variants={children} className="text-white font-semibold">
              There are many variations of passages orem psum available but the
              majority have suffered alteration in some form by injected humour
              or randomised.
            </motion.p>
            <motion.div variants={children}>
              <Button className="rounded-none text-lg">Donate Now</Button>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
