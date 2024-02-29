import DContainer from "@/layout/DContainer";
import LeaderBoardCard from "./LeaderBoardCard";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { useGetAllProvidersQuery } from "@/redux/features/providersApi/providersApi";
import Loader from "@/components/ui/shared/Loader";
import { TProvider } from "@/types";

const LeaderBoard = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  const {
    data: providers,
    isFetching,
    isLoading,
  } = useGetAllProvidersQuery(undefined);
  if (isLoading || isFetching) {
    return <Loader />;
  }
  return (
    <DContainer className="mb-10">
      <div className="mt-14">
        <p className="text-slate-400 text-2xl font-medium mb-4">Leaderboard</p>
        <h2 className={cn("text-primary/90", { "text-slate-400": isDark })}>
          Top Providers
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-between gap-8 w-full mt-10">
        {/* card */}
        <div className="space-y-8">
          {providers.data
            .slice(0, 3)
            .map((provider: TProvider, index: number) => (
              <LeaderBoardCard
                index={index}
                providerData={provider}
                key={provider._id}
              />
            ))}
        </div>
        {/* table */}
        <div
          className={cn("grow h-full bg-white shadow-md", {
            "bg-slate-800": isDark,
          })}
        >
          <Table className="max-w-[800px] w-full mx-auto ">
            <TableCaption className="mb-4">
              A list of our top providers.
            </TableCaption>
            <TableHeader>
              <TableRow
                className={cn("text-2xl", { "hover:bg-slate-700": isDark })}
              >
                <TableHead className="w-[100px] text-2xl text-slate-400">
                  Place
                </TableHead>
                <TableHead className=" text-2xl text-slate-400">
                  Provider
                </TableHead>
                <TableHead className="text-right text-2xl text-slate-400">
                  Amount
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {providers.data
                .slice(3)
                .map((provider: TProvider, index: number) => (
                  <TableRow
                    key={index}
                    className={cn({ "hover:bg-slate-800": isDark })}
                  >
                    <TableCell className="font-medium text-lg">
                      {" "}
                      {index + 1}
                    </TableCell>
                    <TableCell className="font-medium">
                      <div className="flex gap-4 items-center text-white">
                        <div className="border-slate-300 border-2 rounded-full p-0.5">
                          <img
                            className="size-10 rounded-full"
                            src={provider.providerImage}
                            alt=""
                          />
                        </div>
                        <h4
                          className={cn(
                            "card-heading text-lg font-bold text-primary/70 -mt-1",
                            { "text-slate-400": isDark }
                          )}
                        >
                          {provider.providerName}
                        </h4>
                      </div>
                    </TableCell>
                    <TableCell
                      className={cn(
                        "text-right text-lg font-bold text-primary",
                        { "text-slate-400": isDark }
                      )}
                    >
                      {provider.totalAmount}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </DContainer>
  );
};

export default LeaderBoard;
