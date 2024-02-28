import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { TGoodsData } from "@/types/supply.typs";

type TReliefGoodsCardProps = TGoodsData & {
  className?: string;
};

const ReliefGoodsCard = ({
  _id,
  className,
  amount,
  category,
  title,
  imageUrl,
}: TReliefGoodsCardProps) => {
  return (
    <div
      className={cn(
        "max-w-xl w-full p-4 lg:p-6 rounded-xl bg-white ",
        className
      )}
    >
      <img
        className="w-full h-[200px] rounded-lg"
        // src="https://i.ibb.co/ZTB64fX/parsa-farjam-zzny-cko-C5-U-unsplash.jpg"
        src={imageUrl}
      />
      <div className="space-y-3 ">
        <h3 className="text-[28px] mt-4 hover:text-primary font-semibold transition-all text-black">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="font-medium">{category}</p>
          <p>
            Amout: <span className="text-primary font-bold">${amount}</span>
          </p>
        </div>
        <Link to={`/relief-goods/${_id}`}>
          <Button className={cn("w-full text-lg h-12")}>View Detail</Button>
        </Link>
      </div>
    </div>
  );
};

export default ReliefGoodsCard;
