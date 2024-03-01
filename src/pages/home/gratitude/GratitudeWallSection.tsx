import GratitudeCard from "@/components/ui/shared/GratitudeCard";
import Loader from "@/components/ui/shared/Loader";
import SectionHeader from "@/components/ui/shared/SectionHeader";
import { responsive } from "@/constant";
import Container from "@/layout/Container";
import { cn } from "@/lib/utils";
import { useGetAllGratitudeQuery } from "@/redux/features/gratitudeApi/gratitudeApi";
import { useAppSelector } from "@/redux/hooks";
import { TGratitude } from "@/types";
import Carousel from "react-multi-carousel";

const GratitudeWallSection = () => {
  const { data: gratitudes, isLoading } = useGetAllGratitudeQuery(undefined);
  const { isDark } = useAppSelector((state) => state.theme);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div
      className={cn("bg-[#F8EEE8] py-14 lg:py-32", {
        "bg-slate-950/40": isDark,
      })}
    >
      <Container className="py-">
        <SectionHeader
          subTitle="USERS FEEDBACK"
          title="What Our Awesome Clients Say About Us"
        />
        <Carousel
          draggable={true}
          swipeable={true}
          responsive={responsive}
          autoPlay={true}
          autoPlaySpeed={3000}
          className=" mt-14 gap-32"
          itemClass="px-5"
        >
          {gratitudes.data.slice(0, 6).map((gratitude: TGratitude) => (
            <GratitudeCard className="flex-col" gratitudeData={gratitude} />
          ))}
        </Carousel>
      </Container>
    </div>
  );
};

export default GratitudeWallSection;
