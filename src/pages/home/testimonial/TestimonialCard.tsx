import { cn } from "@/lib/utils";
type TProvider = {
  provider: {
    providerImage: string;
    providerName: string;
    designation: string;
    review: string;
  };
};
const TestimonialCard = ({ provider }: TProvider) => {
  return (
    <div
      className={cn(
        "max-w-[513px] w-full max-h-[400px] h-full rounded-[30px] p-8 bg-[#F7EDE7] transition-all space-y-5 border-2 border-primary"
      )}
    >
      <div className="flex gap-4 items-center">
        <div className="border-primary border-2 rounded-full p-1">
          <img
            className="w-[85px] h-[85px] rounded-full"
            src={provider.providerImage}
            alt=""
          />
        </div>
        <div>
          <h4 className="card-heading font-semibold">
            {provider.providerName}
          </h4>
          <p className="text-[20px]">{provider.designation}</p>
        </div>
      </div>
      <p className="text-[16px]">{provider.review}</p>
    </div>
  );
};

export default TestimonialCard;
