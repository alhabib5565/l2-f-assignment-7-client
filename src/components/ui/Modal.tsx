import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/hooks";
import { Dialog, Transition } from "@headlessui/react";
import { Dispatch, Fragment, ReactNode, SetStateAction } from "react";

export type TModalPorps = {
  isOpen: boolean;
  title: string;
  children: ReactNode;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ isOpen, setIsOpen, title, children }: TModalPorps) => {
  function closeModal() {
    setIsOpen(false);
  }
  const { isDark } = useAppSelector((state) => state.theme);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-hidden">
            <div className="flex min-h-full items-center justify-center  text-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={cn(
                    "w-full max-w-2xl transform h-[90vh] overflow-y-scroll rounded-2xl bg-white my-10 p-6 text-left align-middle shadow-xl transition-all",
                    { "bg-slate-800": isDark }
                  )}
                >
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    {title}
                  </Dialog.Title>
                  {/* modal body */}
                  <div className="mt-2">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
