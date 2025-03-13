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
const categories = [
  "Food",
  "Transportation",
  "Entertainment",
  "Utilities",
  "Shopping",
  "Healthcare",
  "Other",
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
  useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);
  const openFormModal = () => {
    formModalRef.current.showModal();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log(formData);
  };

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

  const resetForm = () => {
    setFormData(initialState);
    formModalRef.current.closeModal();
  };

  const handleEdit = (expense) => {};
  const handleDelete = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id));
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">
          Expense Tracker
        </h1>
        <div className="my-4 flex justify-end">
          <button
            onClick={openFormModal}
            className="flex items-center text-white font-semibold bg-purple-700 hover:bg-purple-600 m-2 py-2 px-4 rounded-lg shadow-md  transition-all duration-300"
          >
            <Plus size={20} className="mr-2" /> Add Expense
          </button>
        </div>
        {/* Add or Update Form Modal  */}
        <FormModal
          ref={formModalRef}
          formData={formData}
          setFormData={setFormData}
          onChange={handleChange}
          onHandleSubmit={handleSubmit}
        />

        {/* Expenses List */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 pb-3">
            <h2 className="text-xl font-bold text-purple-800 border-b-4 pb-2">
              Your Expenses
            </h2>

            {expenses.length === 0 ? (
              <div className="p-4 text-center text-purple-500">
                No expenses added yet. Add your first expense.
              </div>
            ) : (
              <div>
                <ul className="divide-y divide-gray-200">
                  {expenses
                    .sort((a, b) => b.date - a.date)
                    .map((expense) => (
                      <li key={expense.id} className="p-4 hover:bg-purple-50">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-purple-100 flex justify-center items-center mr-3">
                              <IndianRupee
                                className="text-purple-500"
                                size={20}
                              />
                            </div>
                            <div>
                              <h3 className="font-semibold text-purple-800 tracking-wide">
                                {expense.title}
                              </h3>
                              <div className="flex items-center text-purple-500 text-sm">
                                <CalendarRange size={14} className="mr-1" />
                                <span className="mr-3">
                                  {new Date(expense.date).toLocaleDateString()}
                                </span>
                                <Tag size={14} className="mr-1" />
                                <span>{expense.category}</span>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center">
                            <span className="text-lg font-semibold text-purple-800 mr-4">
                              ₹ {parseFloat(expense.amount).toFixed(2)}
                            </span>
                            <div className="flex space-x-1">
                              <button className="p-1 rounded hover:bg-purple-200 text-gray-500 cursor-pointer transition-colors duration-300">
                                <Edit size={18} />
                              </button>
                              <button
                                onClick={() => handleDelete(expense.id)}
                                className="p-1 rounded hover:bg-purple-200 text-red-500 cursor-pointer transition-colors duration-300"
                              >
                                <Trash2 size={18} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpenseTrackerApp;
