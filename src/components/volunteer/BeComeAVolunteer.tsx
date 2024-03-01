import { useState } from "react";
import { Button } from "../ui/button";
import BeComeAVolunteerModal from "./BeComeAVolunteerModal";

const BeComeAVolunteer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleModalOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Button
        onClick={handleModalOpen}
        variant={"outline"}
        className="bg-transparent text-primary border-primary border hover:text-primary w-full lg:w-fit"
      >
        Be come a volunteer
      </Button>
      <BeComeAVolunteerModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      ></BeComeAVolunteerModal>
    </>
  );
};

export default BeComeAVolunteer;
