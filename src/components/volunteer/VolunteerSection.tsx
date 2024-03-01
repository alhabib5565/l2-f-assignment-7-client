import Container from "@/layout/Container";
import VolunteerCard from "./VolunteerCard";
import SectionHeader from "../ui/shared/SectionHeader";
import { useAppSelector } from "@/redux/hooks";
import { cn } from "@/lib/utils";

const VolunteerSection = () => {
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <div
      className={cn(" bg-[#FFF0E7] py-14 lg:py-24", { "bg-slate-800": isDark })}
    >
      <SectionHeader
        subTitle="OUR VOLUNTEERS"
        title="Meet With Our Awesome Volunteers"
      />
      <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
        <VolunteerCard />
        <VolunteerCard />
        <VolunteerCard />
        <VolunteerCard />
      </Container>
    </div>
  );
};

export default VolunteerSection;
