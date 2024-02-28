import { Button } from "@/components/ui/button";
import Loader from "@/components/ui/shared/Loader";
import { cn } from "@/lib/utils";
import { useGetSingleSupplyQuery } from "@/redux/features/supply/supplyApi";
import { useParams } from "react-router-dom";

const ReliefGoodsDetails = ({ className }: { className?: string }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleSupplyQuery(id);
  if (isLoading) {
    return <Loader />;
  }
  const { amount, category, description, title, imageUrl } = data.data;
  console.log("form supply details page", data.data);
  return (
    <div className="mt-[88px] py-14">
      <div
        className={cn(
          "max-w-2xl w-full mx-auto p-4 lg:p-6 rounded-xl bg-whit border ",
          className
        )}
      >
        <img className="w-full h-[300px] rounded-lg" src={imageUrl} alt="" />
        <div className="space-y-3 ">
          <h3 className="text-[28px] mt-4 hover:text-primary font-semibold transition-all text-black">
            {title}
          </h3>
          <div className="flex justify-between items-center">
            <p className="font-medium">{category}</p>
            <p className="font-medium">
              Amout: <span className="text-primary font-bold">${amount}</span>
            </p>
          </div>
          <p>{description}</p>
          <Button className={cn("w-full text-lg h-12")}>Donate Now</Button>
        </div>
      </div>
    </div>
  );
};

export default ReliefGoodsDetails;
