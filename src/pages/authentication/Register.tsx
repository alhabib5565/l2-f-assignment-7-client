import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Container from "@/layout/Container";
import { useRegisterMutation } from "@/redux/features/auth/authApi";
import { Label } from "@radix-ui/react-label";
import { ArrowLeft } from "lucide-react";
import { FieldValues, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
const Register = () => {
  const { register, handleSubmit } = useForm();
  const [registerNow] = useRegisterMutation();
  const navigate = useNavigate();
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    const toastId = toast.loading("Loading, please wait..");
    try {
      const res = await registerNow(data).unwrap();
      toast.success(res.message || "Success! Your account has been created", {
        id: toastId,
      });
      navigate("/", { replace: true });
      console.log(res);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error.message || "Registration failed. Please try again.", {
        id: toastId,
      });
      console.log(error);
    }
  };
  return (
    <Container className="h-screen">
      <div className="h-full">
        <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
          <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
            <img
              src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="w-full"
              alt="Sample image"
            />
          </div>

          <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
            <div className="mb-6 flex gap-4 justify-between items-center">
              <Link to="/">
                <Button
                  variant={"outline"}
                  className="hover:bg-primary hover:text-white bg-transparent flex items-center gap-2 group"
                >
                  <ArrowLeft className="size-5 group-hover:translate-x-[-5px]" />
                  Back
                </Button>
              </Link>
              <h3 className="text-2xl grow font-medium text-center text-primary">
                Register to our website
              </h3>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="name">User Name</Label>
                <Input
                  type="text"
                  id="name"
                  {...register("name")}
                  placeholder="Name"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  id="email"
                  {...register("email")}
                  placeholder="Email address"
                />
              </div>
              <div className="grid w-full items-center gap-1.5 mb-6">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="password"
                  {...register("password")}
                  placeholder="Password address"
                />
              </div>

              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
                <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-danger transition duration-150 ease-in-out hover:text-primary focus:text-primary active:text-danger-700"
                  >
                    Login
                  </Link>
                </p>
                <Button
                  type="submit"
                  className="px-7 py-2 uppercase font-medium text-sm hover:shadow"
                >
                  Register
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Register;
