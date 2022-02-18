import React, { Fragment } from "react";
import { useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import ReactPlayer from "react-player";

const VideoPlayer = ({ isOpen, setIsOpen }) => {
  const cancelButtonRef = useRef(null);
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={setIsOpen}
      >
        <div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="bg-skin-accent fixed inset-0 bg-opacity-70 transition-opacity" />
          </Transition.Child>
          {/* Trick to center the video dialog box */}
          <span
            className="hidden sm:inline-block sm:h-screen sm:align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <div className="bg-skin-scheme-color mx-auto my-auto inline-block transform overflow-hidden rounded-lg shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
            <ReactPlayer
              controls
              url="https://youtu.be/mevoIZ-eAe4"
              width="100%"
              className="aspect-video w-full"
            />
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default VideoPlayer;
