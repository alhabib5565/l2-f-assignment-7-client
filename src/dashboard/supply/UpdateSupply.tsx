import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import AddImage from "@/components/ui/shared/AddImage";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/layout/Container";
import { cn } from "@/lib/utils";
import { useUpdateSupplyMutation } from "@/redux/features/supply/supplyApi";
import { useAppSelector } from "@/redux/hooks";
import { TGoodsData, TSupplyForm } from "@/types/supply.typs";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { toast } from "sonner";

type TUpdateSupplyProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id: string;
};

const UpdateSupply = ({ isOpen, setIsOpen, id }: TUpdateSupplyProps) => {
  const [imageUrl, setImageUrl] = useState("");
  const [supplyData, setSupplyData] = useState<TGoodsData | object>({});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSupplyForm>();

  useEffect(() => {
    const getSupplyData = async () => {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_URL}/supply/${id}`
      );
      const data = await res.json();
      setSupplyData(data.data);
      setImageUrl(data.data.imageUrl);
    };
    getSupplyData();
  }, [id]);

  const { amount, category, description, title } = supplyData as TGoodsData;
  const [updateSupplyData] = useUpdateSupplyMutation();

  const onSubmit = async (data: FieldValues) => {
    const toastId = toast.loading("Processing your update request...");
    try {
      const updatedSupplyData = {
        amount: data.amount || amount,
        category: data.category || category,
        description: data.description || description,
        title: data.title || title,
        imageUrl,
      };
      const res = await updateSupplyData({ id, updatedSupplyData }).unwrap();
      toast.success(res.message || "supply update successful!", {
        id: toastId,
      });
      reset();
      setIsOpen(false);

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message || "update failed. Please try again", {
        id: toastId,
      });
    }
  };

  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen} title="Update Supply">
      <Container>
        <form
          className={cn(
            "max-w-2xl mx-auto my-5 border-2 p-4 lg:p-6 bg-white  rounded-xl",
            { "bg-slate-800": isDark }
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="grid w-full items-center gap-1.5 mb-6">
            <Label htmlFor="title">Title</Label>
            <Input
              defaultValue={title || ""}
              type="text"
              id="title"
              {...register("title")}
              placeholder="Title "
            />
            {errors.title && (
              <p className="text-sm text-red-500">{errors.title.message}</p>
            )}
          </div>
          <div className="grid w-full items-center gap-1.5 mb-6">
            <Label htmlFor="category">Category</Label>
            <Input
              defaultValue={category || ""}
              type="text"
              id="category"
              {...register("category")}
              placeholder="Category "
            />
            {errors.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>
          <div className="grid w-full items-center gap-1.5 mb-6">
            <Label htmlFor="amount">Amount</Label>
            <Input
              defaultValue={amount || ""}
              type="number"
              id="amount"
              {...register("amount")}
              placeholder="Amount "
            />
            {errors.amount && (
              <p className="text-sm text-red-500">{errors.amount.message}</p>
            )}
          </div>
          <div className="grid w-full items-center gap-1.5 mb-6">
            <Label htmlFor="description">Description</Label>
            <Textarea
              defaultValue={description || ""}
              id="description"
              {...register("description")}
              placeholder="Description "
            />
            {errors.description && (
              <p className="text-sm text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>
          <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
          <div className="flex justify-end mt-6">
            <Button>Add Supply</Button>
          </div>
        </form>
      </Container>
    </Modal>
  );
};

export default UpdateSupply;
