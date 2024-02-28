import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainer = {
  className?: string;
  children: ReactNode;
};

const DContainer = ({ className, children }: TContainer) => {
  return (
    <div className={cn("max-w-[1200px] w-full px-4 mx-auto", className)}>
      {children}
    </div>
  );
};

export default DContainer;
