import ReviewForm from "@/components/form/ReviewForm";
import { Button } from "@/components/ui/button";
import GratitudeCard from "@/components/ui/shared/GratitudeCard";
import Loader from "@/components/ui/shared/Loader";
import Container from "@/layout/Container";
import { cn } from "@/lib/utils";
import { useGetAllGratitudeBySupplyIdQuery } from "@/redux/features/gratitudeApi/gratitudeApi";
import { useGetSingleSupplyQuery } from "@/redux/features/supply/supplyApi";
import { useAppSelector } from "@/redux/hooks";
import { TGratitude } from "@/types";
import { useParams } from "react-router-dom";

const ReliefGoodsDetails = ({ className }: { className?: string }) => {
  const { id } = useParams();
  const { data, isLoading } = useGetSingleSupplyQuery(id, { skip: !id });
  const { data: allGratitudesForTheSupply } = useGetAllGratitudeBySupplyIdQuery(
    id,
    { skip: !id }
  );
  const { isDark } = useAppSelector((state) => state.theme);
  if (isLoading) {
    return <Loader />;
  }
  const {
    amount,
    category,
    description,
    title,
    imageUrl,
    providerImage,
    providerName,
    _id,
  } = data.data;
  return (
    <Container className="mt-[88px] py-14">
      <div
        className={cn(
          "max-w-4xl w-full mx-auto p-4 lg:p-6 rounded-xl bg-whit border flex flex-col lg:flex-row gap-8",
          className
        )}
      >
        <div className="w-full">
          {/* image container */}
          <img
            className="w-full h-[300px] lg:h-full lg:max-h-[500px] rounded-lg "
            src={imageUrl || "https://source.unsplash.com/random"}
            alt=""
          />
        </div>
        <div className=" w-full ">
          {/* description container */}
          <div className="h-full flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex gap-4 items-center text-white">
                <div className="border-slate-300 border-2 rounded-full p-0.5">
                  <img
                    className="size-12 rounded-full"
                    src={providerImage || "https://source.unsplash.com/random"}
                    alt=""
                  />
                </div>

                <div>
                  <h4
                    className={cn("card-heading text-lg font-semibold ", {
                      "text-slate-300": isDark,
                    })}
                  >
                    {providerName}
                  </h4>
                  <p className="text-sm text-slate-400">Provider</p>
                </div>
              </div>
              <h3 className="text-[28px]  text-slate-500 font-semibold transition-all ">
                {title}
              </h3>
              <div className="flex justify-between items-center">
                <p className="font-medium">{category}</p>
                <p className="font-medium">
                  Amout:{" "}
                  <span className="text-primary font-bold">${amount}</span>
                </p>
              </div>
              <p>{description}</p>
            </div>
            <Button className={cn("w-full text-lg h-12 mt-6")}>
              Donate Now
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto flex flex-col  gap-8 mt-10">
        <div className="w-full">
          <ReviewForm supplyId={_id} />
        </div>
        <div className="space-y-6 w-full">
          {allGratitudesForTheSupply.data.map((item: TGratitude) => (
            <GratitudeCard gratitudeData={item} key={item._id} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ReliefGoodsDetails;
