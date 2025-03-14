import React from "react";
import { CalendarRange, Edit, IndianRupee, Tag, Trash2 } from "lucide-react";

const ExpenseList = ({ expenses, handleEdit, handleDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="p-6 pb-3">
        <h2 className="text-xl font-bold text-blue-800 border-b-4 pb-2">
          Your Expenses
        </h2>

        {expenses.length === 0 ? (
          <div className="p-4 text-center text-blue-500">
            No expenses added yet. Add your first expense.
          </div>
        ) : (
          <div>
            <ul className="divide-y divide-gray-200">
              {expenses
                .sort((a, b) => b.date - a.date)
                .map((expense) => (
                  <li key={expense.id} className="p-4 hover:bg-blue-50">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex justify-center items-center mr-3">
                          <IndianRupee className="text-blue-500" size={20} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-blue-800 tracking-wide">
                            {expense.title}
                          </h3>
                          <div className="flex items-center text-blue-500 text-sm">
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
                        <span className="text-lg font-semibold text-blue-800 mr-4">
                          ₹ {parseFloat(expense.amount).toFixed(2)}
                        </span>
                        <div className="flex space-x-1">
                          <button
                            onClick={() => handleEdit(expense)}
                            className="p-1 rounded hover:bg-blue-200 text-gray-500 cursor-pointer transition-colors duration-300"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(expense.id)}
                            className="p-1 rounded hover:bg-blue-200 text-red-500 cursor-pointer transition-colors duration-300"
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
  );
};

export default ExpenseList;
