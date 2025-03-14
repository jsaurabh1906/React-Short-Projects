import React, { useEffect, useRef, useState } from "react";
import FormModal from "./FormModal";
import {
  CalendarRange,
  Edit,
  IndianRupee,
  Plus,
  Tag,
  Trash2,
} from "lucide-react";
import { toast } from "react-toastify";
import ExpenseList from "./ExpenseList";
import SummaryCards from "./SummaryCards/SummaryCards";
import ExpensesByCategory from "./ExpensesByCategory/ExpensesByCategory";

const initialState = {
  title: "",
  amount: "",
  category: "",
  date: new Date().toISOString().split("T")[0],
};

const preLoadedExpenses = [
  {
    id: 1,
    title: "Groceries",
    amount: 100,
    category: "Food",
    date: "2025-03-10",
  },
  {
    id: 2,
    title: "Rent",
    amount: 500,
    category: "Housing",
    date: "2025-03-11",
  },
  {
    id: 3,
    title: "Electricity Bill",
    amount: 700,
    category: "Utilities",
    date: "2025-03-12",
  },
];

const ExpenseTrackerApp = () => {
  const formModalRef = useRef(null);
  const [formData, setFormData] = useState(initialState);
  const [editId, setEditId] = useState(null);
  const [expenses, setExpenses] = useState(() => {
    const localData = localStorage.getItem("expenses");
    if (localData) {
      return JSON.parse(localData);
    } else {
      localStorage.setItem("expenses", JSON.stringify(preLoadedExpenses)); // Save initial expenses
      return preLoadedExpenses;
    }
  });

  // This useEffect hook is used to store the expenses array in local storage whenever the expenses array changes
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  // This function is used to open the form modal
  const openFormModal = () => {
    formModalRef.current.showModal();
  };

  // Handle Form changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // console.log(formData);
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.title ||
      !formData.amount ||
      !formData.category ||
      !formData.date
    ) {
      toast.error("Please fill all the fields");
      return;
    }

    if (editId !== null) {
      // Update the expense
      setExpenses((prev) =>
        prev.map((expense) =>
          expense.id === editId ? { ...expense, ...formData } : expense
        )
      );
    } else {
      //ADD NEW EXPENSE
      const newExpense = {
        id: Date.now(),
        ...formData,
        amount: parseFloat(formData.amount),
      };

      setExpenses((prev) => [...prev, newExpense]);
    }
    resetForm();
  };

  // Reset Form
  const resetForm = () => {
    setFormData(initialState);
    setEditId(null);
    formModalRef.current.closeModal();
  };

  // Edit Expense
  const handleEdit = (expense) => {
    setFormData(expense);
    setEditId(expense.id);
    openFormModal();
  };

  //Delete Expense
  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-blue-700">
          Expense Tracker
        </h1>
        <div className="my-4 flex justify-end">
          <button
            onClick={openFormModal}
            className="flex items-center text-white font-semibold bg-blue-700 hover:bg-blue-600 m-2 py-2 px-4 rounded-lg shadow-md  transition-all duration-300"
          >
            <Plus size={20} className="mr-2" /> Add Expense
          </button>
        </div>
        {/* Summary Cards  */}
        <SummaryCards expenses={expenses} />
        {/* Add or Update Form Modal  */}
        <FormModal
          ref={formModalRef}
          formData={formData}
          setFormData={setFormData}
          onChange={handleChange}
          onHandleSubmit={handleSubmit}
          isEditMode={editId !== null}
        />

        {/* Expenses List */}
        <ExpenseList
          expenses={expenses}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {/* Expenses by category */}
        <ExpensesByCategory expenses={expenses} />
      </div>
    </div>
  );
};

export default ExpenseTrackerApp;
