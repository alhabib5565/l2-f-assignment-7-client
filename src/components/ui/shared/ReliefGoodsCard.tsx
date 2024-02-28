import { cn } from "@/lib/utils";
import { Button } from "../button";
import { Link } from "react-router-dom";
import { TGoodsData } from "@/types/supply.typs";
import { useAppSelector } from "@/redux/hooks";
import { motion } from "framer-motion";
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
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <motion.div
      initial="initial"
      whileHover="whileHover"
      className={cn(
        "max-w-xl w-full p-4 lg:p-6  bg-primary/20 rounded-xl",
        className,
        { "bg-slate-800": isDark }
      )}
    >
      <div className="overflow-hidden rounded-xl">
        {" "}
        <motion.img
          variants={{
            initial: {
              scale: 1,
              rotate: 0,
            },
            whileHover: {
              scale: 1.2,
              rotate: 10,
            },
          }}
          transition={{ duration: 0.08, ease: "easeInOut" }}
          className="w-full h-[300px] rounded-lg"
          src={imageUrl}
        />
      </div>
      <div className="space-y-3 ">
        <h3 className="text-[28px] mt-4 hover:text-primary font-semibold transition-all ">
          {title}
        </h3>
        <div className="flex justify-between items-center">
          <p className="font-medium">{category}</p>
          <p>
            Amout: <span className="text-primary font-bold">${amount}</span>
          </p>
        </div>
        <Link to={`/relief-goods/${_id}`}>
          <Button className={cn("w-full text-lg h-12 mt-4")}>
            View Detail
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ReliefGoodsCard;
