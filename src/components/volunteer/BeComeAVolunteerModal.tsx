import { Dispatch, SetStateAction } from "react";
import Modal from "../ui/Modal";
import VolunteerSignUp from "../form/VolunteerSignUp";

type TBeComeVolenteerModal = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};
const BeComeAVolunteerModal = ({
  isOpen,
  setIsOpen,
}: TBeComeVolenteerModal) => {
  return (
    <Modal
      title="Please register as a volunteer"
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <VolunteerSignUp></VolunteerSignUp>
    </Modal>
  );
};

export default BeComeAVolunteerModal;
