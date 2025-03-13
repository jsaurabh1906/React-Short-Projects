import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { X } from "lucide-react";

const ModalWrapper = forwardRef(({ children }, ref) => {
  const formRef = useRef();

  useImperativeHandle(ref, () => ({
    showModal: () => formRef.current.showModal(),
    closeModal: () => formRef.current.close(),
  }));

  return (
    <dialog
      ref={formRef}
      className="bg-white/80 backdrop-blur-lg w-[90%] md:w-[500px] mx-auto my-10 md:my-20 rounded-2xl shadow-2xl p-6 animate-zoom-in border border-purple-300"
    >
      {children}
    </dialog>
  );
});

const ModalHeader = ({ onClose }) => (
  <div className="flex justify-between items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white px-5 py-3 rounded-t-2xl">
    <h2 className="text-xl font-semibold">Add Expense</h2>
    <button
      type="button"
      onClick={onClose}
      className="text-white hover:text-gray-200 transition-transform transform hover:scale-110"
    >
      <X size={24} />
    </button>
  </div>
);

const ModalForm = ({ formData, setFormData, onChange }) => (
  <form method="dialog" className="space-y-5 p-5">
    <input
      className="w-full px-4 py-2 border border-purple-400 rounded-lg bg-purple-50 text-purple-900 placeholder-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
      placeholder="Expense Name"
      type="text"
      name="title"
      value={formData.title}
      onChange={onChange}
      required
    />
    <input
      className="w-full px-4 py-2 border border-purple-400 rounded-lg bg-purple-50 text-purple-900 placeholder-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
      placeholder="Amount"
      type="number"
      name="amount"
      value={formData.amount}
      onChange={onChange}
      required
    />
    <input
      className="w-full px-4 py-2 border border-purple-400 rounded-lg bg-purple-50 text-purple-900 placeholder-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
      placeholder="Category"
      name="category"
      value={formData.category}
      onChange={onChange}
      required
    />
    <input
      className="w-full px-4 py-2 border border-purple-400 rounded-lg bg-purple-50 text-purple-900 placeholder-purple-500 focus:ring-2 focus:ring-purple-500 focus:outline-none shadow-sm"
      placeholder="Date"
      type="date"
      name="date"
      value={formData.date}
      onChange={onChange}
      required
    />
  </form>
);

const ModalActions = ({ onClose, onHandleSubmit }) => (
  <div className="flex justify-end space-x-4 mt-5">
    <button
      type="button"
      onClick={onClose}
      className="px-5 py-2 rounded-lg text-purple-700 border border-purple-500 hover:bg-purple-200 transition shadow-md"
    >
      Cancel
    </button>
    <button
      onClick={onHandleSubmit}
      type="submit"
      className="px-6 py-2 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition shadow-md"
    >
      Submit
    </button>
  </div>
);

const FormModal = forwardRef((props, ref) => {
  const { formData, setFormData, onChange, onHandleSubmit } = props;
  return (
    <ModalWrapper ref={ref}>
      <ModalHeader onClose={() => ref.current.closeModal()} />
      <ModalForm {...props} />
      <ModalActions
        onClose={() => ref.current.closeModal()}
        onHandleSubmit={onHandleSubmit}
      />
    </ModalWrapper>
  );
});

export default FormModal;
