import Loader from "@/components/ui/shared/Loader";
import ReliefGoodsCard from "@/components/ui/shared/ReliefGoodsCard";
import SectionHeader from "@/components/ui/shared/SectionHeader";
import Container from "@/layout/Container";
import { cn } from "@/lib/utils";
import { useGetAllSupplyQuery } from "@/redux/features/supply/supplyApi";
import { useAppSelector } from "@/redux/hooks";
import { TGoodsData } from "@/types/supply.typs";

const ReliefGoods = () => {
  const { data: reliefGoods, isLoading } = useGetAllSupplyQuery({});
  const { isDark } = useAppSelector((state) => state.theme);
  if (isLoading) {
    return <Loader />;
  }
  console.log(reliefGoods);

  return (
    <div
      className={cn(" bg-white", {
        "bg-slate-900": isDark,
      })}
    >
      <Container className=" pt-20 pb-10">
        <SectionHeader
          subTitle={"Goods"}
          title={`Relief Goods Posts`}
        ></SectionHeader>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 mt-10">
          {reliefGoods?.data.slice(-6).map((goods: TGoodsData) => (
            <ReliefGoodsCard {...goods} key={goods._id} />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default ReliefGoods;
