import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { FieldValues, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { useCreateGratitudeMutation } from "@/redux/features/gratitudeApi/gratitudeApi";
import { cn } from "@/lib/utils";

const ReviewForm = ({ supplyId }: { supplyId: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const user = useAppSelector((state) => state.auth.user);
  const [createGratitude] = useCreateGratitudeMutation();
  const { isDark } = useAppSelector((state) => state.theme);

  const onSubmit = async (data: FieldValues) => {
    if (!user) {
      return toast.error("please login");
    }

    const toastId = toast.loading("Processing your request...");
    try {
      const fomatedData = {
        text: data.text,
        user: {
          name: user.name,
          email: user.email,
          photo: user.photo || "",
        },
        supplyId,
        createAt: new Date(),
      };
      const res = await createGratitude(fomatedData).unwrap();
      toast.success(res.message || "Successfull!", {
        id: toastId,
      });
      reset();
      console.log(res);
    } catch (error) {
      toast.error(" failed. Please try again", {
        id: toastId,
      });
    }
  };

  return (
    <div
      className={cn("space-y-4 bg-slate-50 p-4 rounded-lg", {
        "bg-slate-800": isDark,
      })}
    >
      <h2 className={cn("text-xl text-center", { "text-slate-400": isDark })}>
        Thankful Hearts Wall
      </h2>
      <p className={cn(" text-center", { "text-slate-400": isDark })}>
        Express your appreciation for the support you've received during tough
        times.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="w-full min-w-[300px]">
        <Textarea
          placeholder="Add A Comment..."
          className={cn("rounded-lg bg-gray-50 h-32", {
            "bg-slate-500 focus:border-white border-slate-400 text-white":
              isDark,
          })}
          {...register("text", {
            required: true,
          })}
        />
        {errors.text?.type === "required" && (
          <p className="text-red-500 text-sm mt-1">The field is required</p>
        )}
        <div className="flex justify-end mt-4">
          <Button type="submit">Send</Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
