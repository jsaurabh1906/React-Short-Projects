import React, { forwardRef, useImperativeHandle, useRef } from "react";
import { X } from "lucide-react";
const categories = [
  "Food",
  "Transportation",
  "Entertainment",
  "Utilities",
  "Shopping",
  "Healthcare",
  "Other",
];
const ModalWrapper = forwardRef(({ children }, ref) => {
  const formRef = useRef();

  useImperativeHandle(ref, () => ({
    showModal: () => formRef.current.showModal(),
    closeModal: () => formRef.current.close(),
  }));

  return (
    <dialog
      ref={formRef}
      className="bg-white/80 backdrop-blur-lg w-[90%] md:w-[500px] mx-auto my-10 md:my-20 rounded-2xl shadow-2xl p-6 animate-zoom-in border border-blue-300"
    >
      {children}
    </dialog>
  );
});

const ModalHeader = ({ onClose, isEditMode }) => (
  <div className="flex justify-between items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white px-5 py-3 rounded-t-2xl">
    <h2 className="text-xl font-semibold">
      {isEditMode ? "Update Expense" : "Add Expense"}
    </h2>
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
      className="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-50 text-blue-900 placeholder-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
      placeholder="Expense Name"
      type="text"
      name="title"
      value={formData.title}
      onChange={onChange}
      required
    />
    <input
      className="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-50 text-blue-900 placeholder-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
      placeholder="Amount"
      type="number"
      name="amount"
      value={formData.amount}
      onChange={onChange}
      required
    />
    {/* <input
      className="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-50 text-blue-900 placeholder-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
      placeholder="Category"
      name="category"
      value={formData.category}
      onChange={onChange}
      required
    /> */}
    <select
      id="category"
      name="category"
      value={formData.category}
      onChange={onChange}
      className="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-50 text-blue-900 
            placeholder-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none 
            shadow-sm cursor-pointer"
      required
    >
      <option value="">Select a category</option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>

    <input
      className="w-full px-4 py-2 border border-blue-400 rounded-lg bg-blue-50 text-blue-900 placeholder-blue-500 focus:ring-2 focus:ring-blue-500 focus:outline-none shadow-sm"
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
      className="px-5 py-2 rounded-lg text-blue-700 border border-blue-500 hover:bg-blue-200 transition shadow-md"
    >
      Cancel
    </button>
    <button
      onClick={onHandleSubmit}
      type="submit"
      className="px-6 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow-md"
    >
      Submit
    </button>
  </div>
);

const FormModal = forwardRef(
  ({ formData, setFormData, onChange, onHandleSubmit, isEditMode }, ref) => {
    return (
      <ModalWrapper ref={ref}>
        <ModalHeader
          onClose={() => ref.current.closeModal()}
          isEditMode={isEditMode}
        />
        <ModalForm
          formData={formData}
          setFormData={setFormData}
          onChange={onChange}
        />
        <ModalActions
          onClose={() => ref.current.closeModal()}
          onHandleSubmit={onHandleSubmit}
          isEditMode={isEditMode}
        />
      </ModalWrapper>
    );
  }
);

export default FormModal;
