import Loader from "@/components/ui/shared/Loader";
import ReliefGoodsCard from "@/components/ui/shared/ReliefGoodsCard";
import Container from "@/layout/Container";
import { useGetAllSupplyQuery } from "@/redux/features/supply/supplyApi";
import { useAppSelector } from "@/redux/hooks";
import { TGoodsData } from "@/types/supply.typs";

const AllReliefGoods = () => {
  const { data: reliefGoods, isLoading } = useGetAllSupplyQuery({});
  const { isDark } = useAppSelector((state) => state.theme);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="pt-[88px] my-14">
      <Container>
        <h2 className={`text-center ${isDark && "text-slate-400"}`}>
          Relief <span className="text-primary ">Goods</span> Posts
        </h2>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 md:grid-cols-2 mt-10">
          {reliefGoods.data.map((goods: TGoodsData) => (
            <ReliefGoodsCard
              {...goods}
              className="bg-primary/20"
              key={goods._id}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllReliefGoods;
