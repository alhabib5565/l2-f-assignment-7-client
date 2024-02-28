import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import AddImage from "@/components/ui/shared/AddImage";
import { Textarea } from "@/components/ui/textarea";
import Container from "@/layout/Container";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCreateSupplyMutation } from "@/redux/features/supply/supplyApi";
import { toast } from "sonner";
import { TSupplyForm, supplyValidationSchema } from "@/types/supply.typs";
import { useNavigate } from "react-router-dom";

const CreateSupply = () => {
  //state
  const [imageUrl, setImageUrl] = useState("");

  //hooks
  const [createSupply, { isLoading }] = useCreateSupplyMutation();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TSupplyForm>({
    resolver: zodResolver(supplyValidationSchema),
  });
  const onSubmit = async (data: FieldValues) => {
    const { amount, description, title, category } = data;
    if (amount && description && title && category && imageUrl) {
      const toastId = toast.loading("Pending create supply...");
      try {
        const supplyData = {
          amount,
          description,
          title,
          category,
          imageUrl,
        };
        const res = await createSupply(supplyData).unwrap();
        if (res.data.acknowledged) {
          reset();
          toast.success(res.message || "supply create successful!", {
            id: toastId,
          });
          navigate("/dashboard");
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.message || "supply create failed. Please try again", {
          id: toastId,
        });
      }
    } else {
      toast.warning("Every field is required");
    }
  };

  return (
    <Container>
      <form
        className="max-w-2xl mx-auto my-10 border-2 p-4 lg:p-6 bg-white  rounded-xl"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-full items-center gap-1.5 mb-6">
          <Label htmlFor="title">Title</Label>
          <Input
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
            id="description"
            {...register("description")}
            placeholder="Description "
          />
          {errors.description && (
            <p className="text-sm text-red-500">{errors.description.message}</p>
          )}
        </div>
        <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        <div className="flex justify-end mt-6">
          <Button disabled={isLoading}>Add Supply</Button>
        </div>
      </form>
    </Container>
  );
};

export default CreateSupply;
