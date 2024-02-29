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

const LeaderBoard = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <DContainer>
      <div className="mt-14">
        <p className="text-slate-400 text-2xl font-medium mb-4">Leaderboard</p>
        <h2 className="text-primary/90">Top Providers</h2>
      </div>
      <div className="flex justify-between gap-8 w-full mt-10">
        {/* card */}
        <div className="space-y-8">
          <LeaderBoardCard />
          <LeaderBoardCard />
          <LeaderBoardCard />
        </div>
        {/* table */}
        <div className="grow h-full ">
          <Table className="max-w-[800px] w-full mx-auto ">
            <TableCaption>A list of our recent donation items.</TableCaption>
            <TableHeader>
              <TableRow
                className={cn("text-2xl", { "hover:bg-slate-700": isDark })}
              >
                <TableHead className="w-[100px] text-2xl">Place</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead className="text-right text-2xl">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className={cn({ "hover:bg-slate-800": isDark })}>
                <TableCell className="font-medium text-lg"> 1</TableCell>
                <TableCell className="font-medium">
                  <div className="flex gap-4 items-center text-white">
                    <div className="border-slate-400 border-2 rounded-full p-1">
                      <img className="size-10 rounded-full" src="" alt="" />
                    </div>
                    <h4
                      className={cn(
                        "card-heading text-lg font-bold text-primary/70 -mt-1"
                      )}
                    >
                      provider Name
                    </h4>
                  </div>
                </TableCell>
                <TableCell className="text-right text-lg font-bold text-primary">
                  9000
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </DContainer>
  );
};

export default LeaderBoard;
