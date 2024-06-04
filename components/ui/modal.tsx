"use client";

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";
import { IconButton } from "./icon-button";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({ children, open, onClose }) => {
  return (
    <Transition as={Fragment} show={open}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <div className="fixed inset-0 bg-black bg-opacity-50" />

        <div className="fixed inset-0 overflow-y-auto ">
          <div className="min-h-full flex items-center justify-center">
            <TransitionChild
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <DialogPanel className="w-full max-w-3xl overflow-hidden rounded-lg text-left align-middle">
                <div className="relative flex w-full items-center overflow-hidden px-4 md:px-6 xl:px-8 shadow-2xl pt-14 pb-8 mt-8 md:p-6 xl:p-8 bg-white rounded-xl">
                  <div className="absolute right-4 top-4">
                    <IconButton onClick={onClose} icon={<X size={16} />} />
                  </div>
                  {children}
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
