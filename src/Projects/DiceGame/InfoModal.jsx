import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { IoCloseCircle } from "react-icons/io5";

const InfoModal = forwardRef((props, ref) => {
  const infoModalRef = useRef(null);

  // Expose open and close functions to parent component
  useImperativeHandle(ref, () => ({
    showModal: () => {
      infoModalRef.current.showModal();
      infoModalRef.current.classList.remove("slide-out-left-top");
      infoModalRef.current.classList.add("slide-in-right-bottom");
    },
    closeModal: () => {
      infoModalRef.current.classList.remove("slide-in-right-bottom");
      infoModalRef.current.classList.add("slide-out-left-top");

      setTimeout(() => {
        infoModalRef.current.close();
        infoModalRef.current.classList.remove("slide-out-left-top");
      }, 500);
    },
  }));

  return (
    <dialog
      ref={infoModalRef}
      className="bg-white w-[90%] md:w-md m-auto max-w-md p-6 rounded-lg shadow-lg backdrop:bg-black/50"
    >
      {/* Modal Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-4">
        <h2 className="text-xl font-bold text-brown-700">How to Play</h2>
        <IoCloseCircle
          size={24}
          className="text-brown-700 cursor-pointer hover:text-brown-600"
          onClick={() => ref.current.closeModal()}
        />
      </div>

      {/* Game Rules */}
      <ul className="text-brown-700 list-disc pl-4 space-y-2">
        <li>
          Select a number between <strong>1-6</strong>.
        </li>
        <li>Click the dice to roll it.</li>
        <li>
          If your selected number <strong>matches</strong> the rolled dice
          number, your
          <strong> score increases</strong> by the rolled number.
        </li>
        <li>
          If they don’t match, your <strong>score decreases</strong> by{" "}
          <strong>2</strong>.
        </li>
      </ul>

      {/* Close Button */}
      <div className="mt-6 flex justify-center">
        <button
          onClick={() => ref.current.closeModal()}
          className="bg-brown-700 text-white px-4 py-2 rounded-lg hover:bg-brown-600"
        >
          Got it!
        </button>
      </div>
    </dialog>
  );
});

export default InfoModal;
