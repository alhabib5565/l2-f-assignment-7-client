import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Plus } from "lucide-react";

const GalleryCard = ({ image }: { image: string }) => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div className="rounded-lg relative group overflow-hidden">
      <img
        src={image}
        alt=""
        className="rounded-lg w-full h-ful group-hover:scale-110 transition-all"
      />
      <div
        className={cn(
          "bg-primary bg-opacity-90 absolute inset-0 rounded-lg m-4 p-8 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-all",
          { "bg-slate-900": isDark }
        )}
      >
        {/* <p className=" rounded-full border-2 border-"> */}
        <p className=" border-2 border-white w-fit rounded-full p-[2px] mt-10 ml-10 group-hover:mt-0 group-hover:ml-0 delay-75 transition-all ">
          <Plus
            className={cn("size-12 rounded-full bg-white p-1 text-primary", {
              "text-slate-900": isDark,
            })}
          />
        </p>
        {/* </p> */}
        <h2 className="text-white">Help Poor People</h2>
      </div>
    </div>
  );
};

export default GalleryCard;
