import styles from "./Button.module.scss";

const Button = ({ type, text }) => {
  return (
    <button
      className={type === "danger" ? styles["button-danger"] : styles.button}
    >
      {text}
    </button>
  );
};

export default Button;
