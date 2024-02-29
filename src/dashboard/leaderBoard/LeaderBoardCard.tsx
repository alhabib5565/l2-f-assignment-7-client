import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";

const LeaderBoardCard = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div
      style={{
        // background: "rgb(230,67,41)",
        background:
          "linear-gradient(77deg, rgba(230,67,41,1) 52%, rgba(242,175,175,1) 97%)",
      }}
      className="p-6 shadow-md shadow-primary rounded-xl bg-gradient-to-r from-primary to-[#f2afaf] flex items-center gap-4 lg:gap-8 hover:scale-[1.02] transition-all"
    >
      <div className="flex gap-4 items-center text-white">
        <div className="border-slate-400 border-2 rounded-full p-1">
          <img className="size-14 rounded-full" src="" alt="" />
        </div>
        <div>
          <h4
            className={cn("card-heading font-semibold text-white mt-0", {
              "text-slate-300": isDark,
            })}
          >
            provider Name
          </h4>
          <p className="text-[20px]">provider.designation</p>
        </div>
      </div>
      <p className="text-2xl text-gray-300 font-bold">First 1</p>
      <p className="text-3xl font-bold text-white">98000</p>
    </div>
  );
};

export default LeaderBoardCard;
