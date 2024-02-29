import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
type TProvider = {
  provider: {
    providerImage: string;
    providerName: string;
    designation: string;
    review: string;
  };
};
const TestimonialCard = ({ provider }: TProvider) => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div
      className={cn(
        "max-w-[513px] w-full max-h-[400px] h-full transition-all space-y-5 border-2 bg-white  rounded-lg px-6 py-8 border-slate-400 shadow-xl",
        { "bg-slate-800": isDark }
      )}
    >
      <div className="flex gap-4 items-center">
        <div className="border-slate-400 border-2 rounded-full p-1">
          <img
            className="w-[85px] h-[85px] rounded-full"
            src={"https://source.unsplash.com/random"}
            // src={provider.providerImage || "https://source.unsplash.com/random"}
            alt=""
          />
        </div>
        <div>
          <h4
            className={cn("card-heading font-semibold ", {
              "text-slate-300": isDark,
            })}
          >
            {provider.providerName}
          </h4>
          <p className="text-[20px]">{provider.designation}</p>
        </div>
      </div>
      <p className="text-[16px] text-justify">{provider.review}</p>
    </div>
    // <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
    //   <div>
    //     <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
    //       <svg
    //         className="h-6 w-6 text-white"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         stroke="currentColor"
    //         aria-hidden="true"
    //       ></svg>
    //     </span>
    //   </div>
    //   <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">
    //     Writes Upside-Down
    //   </h3>
    //   <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    //     The Zero Gravity Pen can be used to write in any orientation, including
    //     upside-down. It even works in outer space.
    //   </p>
    // </div>
  );
};

export default TestimonialCard;
