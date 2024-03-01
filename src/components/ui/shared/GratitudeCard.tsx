import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Button } from "../button";
import Modal, { TModalPorps } from "../Modal";
import { useState } from "react";
import { useGetSingleGratitudeQuery } from "@/redux/features/gratitudeApi/gratitudeApi";
import { TGratitude } from "@/types";
import Loader from "./Loader";

type TGratitudeCardProp = {
  gratitudeData: TGratitude;
  className?: string;
};

const GratitudeCard = ({ gratitudeData, className }: TGratitudeCardProp) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const [isOpen, setIsOpen] = useState(false);
  const [id, setId] = useState("");
  const handleModalOpen = (id: string) => {
    setId(id);
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={cn(
        "flex mb-1 gap-8 p-6 rounded-[50px] bg-white border shadow-md",
        className,
        {
          "bg-slate-800": isDark,
        }
      )}
    >
      <img
        className="size-[150px] border rounded-full"
        src={gratitudeData.user.photo || "https://source.unsplash.com/random"}
        alt=""
      />
      <div className="space-y-4">
        <div>
          <h4
            className={cn("card-heading text-xl font-semibold ", {
              "text-slate-300": isDark,
            })}
          >
            {gratitudeData.user.name}
          </h4>
          <p className="text-lg text-slate-400">Provider</p>
        </div>
        <p>{gratitudeData.text.split(" ").slice(0, 20).join(" ")}...</p>

        <Button
          onClick={() => handleModalOpen(gratitudeData._id)}
          className="rounded-3xl"
        >
          Read More
        </Button>
        {isOpen && (
          <GratitudeDetailsModal
            id={id}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </div>
  );
};

export default GratitudeCard;

// type TModalPorps = {
//   title: string;
//   setIsOpen: Dispatch<SetStateAction<boolean>>;
// }
type TGratitudeDetailsModal = Pick<TModalPorps, "setIsOpen" | "isOpen">;
type TGratitudeDetailsModalWithId = TGratitudeDetailsModal & { id: string };

const GratitudeDetailsModal = ({
  isOpen,
  setIsOpen,
  id,
}: TGratitudeDetailsModalWithId) => {
  const { isDark } = useAppSelector((state) => state.theme);
  const { data: gratitude, isLoading } = useGetSingleGratitudeQuery(id, {
    skip: !id,
  });

  if (isLoading) {
    return (
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="gratitude Details">
        <Loader />
      </Modal>
    );
  }
  const { user, text } = gratitude.data;
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="gratitude Details">
      <div
        className={cn("flex gap-8 p-6 rounded-[50px] bg-white border", {
          "bg-slate-800": isDark,
        })}
      >
        <img
          className="size-[150px] rounded-full"
          src={user.photo || "https://source.unsplash.com/random"}
          alt=""
        />
        <div className="space-y-6">
          <div>
            <h4
              className={cn("card-heading text-xl font-semibold ", {
                "text-slate-300": isDark,
              })}
            >
              {user.name}
            </h4>
            <p className="text-lg text-slate-400">Provider</p>
          </div>
          <p>{text}</p>
        </div>
      </div>
    </Modal>
  );
};
