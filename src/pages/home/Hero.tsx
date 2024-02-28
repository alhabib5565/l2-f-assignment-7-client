import Container from "@/layout/Container";
import heroImage from "../../assets/images/banner2.jpg";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";

const Hero = () => {
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <div
      style={{ backgroundImage: `url(${heroImage})` }}
      className={`bg-[url('${heroImage}')] min-h-[calc(100vh-88px)] bg-scroll lg:bg-fixed bg-cover `}
    >
      <div
        className={cn(" bg-slate-900 bg-opacity-50", {
          "bg-opacity-90": isDark,
        })}
      >
        <Container className="min-h-[calc(100vh-88px)] h-full flex items-center ">
          <div className="max-w-[750px] space-y-6 my-14 lg:py-0">
            <p className="flex gap-4 items-center text-secondary text-[22px] font-[700] tracking-[5px] uppercase">
              <Heart className="size-8" /> <span>Fund for helpLess</span>
            </p>

            <h1>
              We Help People In Need
              <span className="text-primary">Around</span> The Wrold
            </h1>
            <p className="text-white font-semibold">
              There are many variations of passages orem psum available but the
              majority have suffered alteration in some form by injected humour
              or randomised.
            </p>
            <Button className="rounded-none text-lg">Donate Now</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Hero;
