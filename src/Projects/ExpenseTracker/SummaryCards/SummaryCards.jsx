import React from "react";
import styles from "./SummaryCards.module.scss";

const SummaryCards = ({ expenses }) => {
  const totalExpense = expenses.reduce(
    (sum, expense) => sum + parseFloat(expense.amount),
    0
  );
  const latestExpense =
    expenses.length > 0
      ? parseFloat(expenses[expenses.length - 1].amount).toFixed(2)
      : "N/A";
  return (
    <div className={styles["summary-cards"]}>
      <div className={styles.card}>
        <p className={styles.label}>Total Expense</p>
        <p className={styles.value}>₹ {totalExpense.toFixed(2)}</p>
      </div>
      <div className={styles.card}>
        <p className={styles.label}>Number of Expense</p>
        <p className={styles.value}>{expenses.length}</p>
      </div>
      <div className={styles.card}>
        <p className={styles.label}>Latest Expense</p>
        <p className={styles.value}>₹ {latestExpense}</p>
      </div>
    </div>
  );
};

export default SummaryCards;
