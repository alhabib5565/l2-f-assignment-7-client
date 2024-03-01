import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Label } from "@radix-ui/react-label";
import { FieldValues, useForm } from "react-hook-form";
import { Input } from "../ui/input";
import AddImage from "../ui/shared/AddImage";
import { Button } from "../ui/button";
import { useState } from "react";
import Container from "@/layout/Container";
import { zodResolver } from "@hookform/resolvers/zod";
import { TVolunteerForm, volunteerValidationSchema } from "@/types";
import { useCreateVolunteerMutation } from "@/redux/features/volunteerApi/volunteerApi";
import { toast } from "sonner";

const VolunteerSignUp = () => {
  const [imageUrl, setImageUrl] = useState("");

  const { isDark } = useAppSelector((state) => state.theme);
  const [createVolunteer] = useCreateVolunteerMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TVolunteerForm>({
    resolver: zodResolver(volunteerValidationSchema),
  });
  const onSubmit = async (data: FieldValues) => {
    const { name, email, phoneNumber, location } = data;
    if (name && email && phoneNumber && location && imageUrl) {
      const toastId = toast.loading("Loading...");
      try {
        const supplyData = {
          name,
          email,
          phoneNumber,
          location,
          imageUrl,
        };
        const res = await createVolunteer(supplyData).unwrap();
        if (res.data.acknowledged) {
          reset();
          setImageUrl("");
          toast.success(
            res.message || "successfully register as a volunteer!",
            {
              id: toastId,
            }
          );
        }
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        toast.error(error.message || "supply create failed. Please try again", {
          id: toastId,
        });
      }
    } else {
      toast.error("Every field is required");
    }
  };
  const isLoading = false;
  return (
    <Container>
      <form
        className={cn(
          "max-w-2xl mx-auto my-10 border-2 p-4 lg:p-6 rounded-xl",
          { "bg-slate-800": isDark }
        )}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid w-full items-center gap-1.5 mb-4">
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            {...register("name")}
            placeholder="Write your name"
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="grid w-full items-center gap-1.5 mb-4">
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            {...register("email")}
            placeholder="Write your email "
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="grid w-full items-center gap-1.5 mb-4">
          <Label htmlFor="phoneNumber">Phone Number</Label>
          <Input
            type="number"
            id="phoneNumber"
            {...register("phoneNumber")}
            placeholder="Write your phone number "
          />
          {errors.phoneNumber && (
            <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
          )}
        </div>
        <div className="grid w-full items-center gap-1.5 mb-4">
          <Label htmlFor="phoneNumber">Location</Label>
          <Input
            type="text"
            id="location"
            {...register("location")}
            placeholder="Write your location "
          />
          {errors.location && (
            <p className="text-sm text-red-500">{errors.location.message}</p>
          )}
        </div>

        <div className="grid w-full items-center gap-1.5 mb-4">
          <Label>Add your photo</Label>
          <AddImage imageUrl={imageUrl} setImageUrl={setImageUrl} />
        </div>
        <div className="flex justify-end mt-6">
          <Button disabled={isLoading}>Add Supply</Button>
        </div>
      </form>
    </Container>
  );
};

export default VolunteerSignUp;
