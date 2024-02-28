import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Heart } from "lucide-react";
import { ReactNode } from "react";

type TSectionHeader = {
  subTitle: ReactNode;
  title: ReactNode;
};

const SectionHeader = ({ subTitle, title }: TSectionHeader) => {
  const { isDark } = useAppSelector((state) => state.theme);
  return (
    <div className="max-w-[550px] w-full mx-auto text-center">
      <p className="flex gap-4 items-center justify-center text-primary text-[22px] font-[700] tracking-[5px] uppercase">
        <Heart className="size-6" /> <span>{subTitle}</span>
      </p>
      <h2 className={cn({ "text-white": isDark })}>{title}</h2>
    </div>
  );
};

export default SectionHeader;
