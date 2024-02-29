import { FieldValues, useForm } from "react-hook-form";
import { useAppSelector } from "@/redux/hooks";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useCreateTestimonialMutation } from "@/redux/features/testimonialApi/testimonialApi";
import { Input } from "@/components/ui/input";

const CreateTestimonials = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const user = useAppSelector((state) => state.auth.user);
  const { isDark } = useAppSelector((state) => state.theme);
  const [createTestimonials] = useCreateTestimonialMutation();

  const onSubmit = async (data: FieldValues) => {
    if (!user) {
      return toast.error("please login");
    }

    const toastId = toast.loading("Processing your request...");
    try {
      const fomatedData = {
        review: data.text,
        designation: data.designation,
        providerName: user.name,
        providerEmail: user.email,
        providerImage: user.photo || "",
      };
      const res = await createTestimonials(fomatedData).unwrap();
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
    <div className="min-h-[calc(100vh-72px)] w-full flex justify-center items-center">
      <div
        className={cn("space-y-4 max-w-2xl bg-slate-50 p-4 h-fit rounded-lg", {
          "bg-slate-800": isDark,
        })}
      >
        <h2 className={cn("text-xl text-center", { "text-slate-400": isDark })}>
          Share Your Experience
        </h2>
        <p className={cn(" text-center", { "text-slate-400": isDark })}>
          We value your feedback! Share your experience and let others know how
          your support has made a difference.
        </p>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full min-w-[300px] space-y-6"
        >
          <Input
            type="text"
            placeholder="Write designation"
            className={cn("rounded-lg bg-gray-50", {
              "bg-slate-500 focus:border-white border-slate-400 text-white placeholder:text-slate-200":
                isDark,
            })}
            {...register("designation", {
              required: true,
            })}
          />
          <Textarea
            placeholder="Write Your Experience..."
            className={cn("rounded-lg bg-gray-50 h-32", {
              "bg-slate-500 focus:border-white border-slate-400 text-white placeholder:text-slate-200":
                isDark,
            })}
            {...register("text", {
              required: true,
            })}
          />
          {errors.text?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">The field is required</p>
          )}

          {errors.text?.type === "required" && (
            <p className="text-red-500 text-sm mt-1">The field is required</p>
          )}
          <div className="flex justify-end ">
            <Button type="submit">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTestimonials;
