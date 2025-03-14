import React from "react";
import styles from "./ExpensesByCategory.module.scss";

const ExpensesByCategory = ({ expenses }) => {
  const totalExpenses = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );

  const expensesByCategory = expenses.reduce((acc, expense) => {
    const category = expense.category;
    const amount = parseFloat(expense.amount);
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  return (
    <div className={styles["expenses-category"]}>
      <h2 className="mb-4 text-xl font-bold text-blue-800 border-b-4 pb-2">
        Expenses by Category
      </h2>
      <div className={styles["category-list"]}>
        {Object.entries(expensesByCategory).map(([category, amount]) => {
          const percentage = totalExpenses ? (amount / totalExpenses) * 100 : 0;
          return (
            <div key={category} className={styles["category-item"]}>
              <div className={styles["category-info"]}>
                <span className={styles["category-name"]}>{category}</span>
                <span className={styles["category-value"]}>
                  ₹{amount.toFixed(2)}
                </span>
              </div>
              <div className={styles["progress-bar"]}>
                <div
                  className={styles["progress-fill"]}
                  style={{ width: `${(amount / totalExpenses) * 100}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExpensesByCategory;
