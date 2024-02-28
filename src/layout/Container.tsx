import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type TContainer = {
  className?: string;
  children: ReactNode;
};

const Container = ({ className, children }: TContainer) => {
  return (
    <div className={cn("max-w-[1400px] w-full px-4 mx-auto", className)}>
      {children}
    </div>
  );
};

export default Container;
