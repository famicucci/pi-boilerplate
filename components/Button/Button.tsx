import { Button, Children } from "@/models";
import * as React from "react";
import styles from "../../styles/button.module.css";

const Button = ({
  color,
  type,
  children,
  className,
  onClick,
}: Button & Children) => {
  const colors: {
    primary: string;
    secondary: string;
    none: string;
  } = {
    primary: styles.colorPrimary,
    secondary: styles.colorSecondary,
    none: "",
  };

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={`${className} ${styles.button} ${colors[color]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
