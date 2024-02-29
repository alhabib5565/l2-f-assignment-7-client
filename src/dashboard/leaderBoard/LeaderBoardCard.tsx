import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { TProvider } from "@/types";

type TLeaderBoardCard = {
  providerData: TProvider;
  index: number;
};

const LeaderBoardCard = ({ providerData, index }: TLeaderBoardCard) => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div
      style={
        isDark !== true
          ? {
              background:
                "linear-gradient(77deg, rgba(230,67,41,1) 52%, rgba(242,175,175,1) 97%)",
            }
          : {}
      }
      className={cn(
        "p-6 shadow-md shadow-primary rounded-xl bg-gradient-to-r from-primary to-[#f2afaf] flex items-center gap-4 lg:gap-8 hover:scale-[1.02] transition-all ",
        { "lg:translate-x-[20px]": index === 1 },
        {
          "bg-gradient-to-r  from-slate-900 to-slate-300 shadow-slate-300":
            isDark,
        }
      )}
    >
      <div className="flex gap-4 items-center text-white">
        <div className="border-gray-200 border-2 rounded-full p-0.5">
          <img
            className="size-14 rounded-full"
            src={providerData.providerImage}
            alt=""
          />
        </div>
        <div>
          <h4
            className={cn("card-heading font-semibold text-white mt-0", {
              "text-slate-300": isDark,
            })}
          >
            {providerData.providerName}
          </h4>
          <p className="text-[20px]">{providerData.providerEmail}</p>
        </div>
      </div>
      <p className={`text-2xl font-bold text-`}>
        {index === 0 ? (
          <span className="text-yellow-300">First 1st</span>
        ) : index === 1 ? (
          <span className="text-emerald-300">Second 2nd</span>
        ) : (
          <span className="text-orange-300">Thired 3rd</span>
        )}
      </p>
      <p className="text-3xl font-bold text-white">
        {providerData.totalAmount}
      </p>
    </div>
  );
};

export default LeaderBoardCard;
