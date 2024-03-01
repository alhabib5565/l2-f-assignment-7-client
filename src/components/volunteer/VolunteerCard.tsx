import { FacebookIcon, Instagram, Linkedin } from "lucide-react";
import { Button } from "../ui/button";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";

const VolunteerCard = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div
      className={cn(
        "bg-white group p-4 lg:p-6 shadow-sm rounded-[15px] text-center relative transition-all ",
        { "bg-slate-900/50": isDark }
      )}
    >
      <img
        src="https://live.themewild.com/charox/assets/img/team/02.jpg"
        className={cn(
          "border-8 border-primary rounded-full p-2 mt-[-70px] group-hover:border-secondary duration-500",
          { "border-slate-400": isDark }
        )}
        alt=""
      />
      <h2 className={cn({ "text-slate-300": isDark })}>Volunteer Name</h2>
      <p className={cn("text-primary", { "text-slate-400": isDark })}>
        Volunteer
      </p>
      <div className="space-x-4 mt-6 ">
        <Button className="bg-secondary size-10 p-0 rounded-lg hover:bg-primary duration-300 transition-all">
          <Instagram />
        </Button>
        <Button className="bg-secondary size-10 p-0 rounded-lg hover:bg-primary duration-300 transition-all">
          <Linkedin />
        </Button>
        <Button className="bg-secondary size-10 p-0 rounded-lg hover:bg-primary duration-300 transition-all">
          <FacebookIcon />
        </Button>
      </div>
      <span
        className={cn(
          "bg-primary group-hover:bg-secondary duration-500 h-3 z-10 absolute top-[100%] w-[85%]  left-[50%] translate-x-[-50%] rounded-b-xl",
          { "bg-slate-400": isDark }
        )}
      ></span>
    </div>
  );
};

export default VolunteerCard;
