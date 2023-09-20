import * as React from "react";
import styles from "../../styles/textField.module.css";
import { TextField } from "@/models/textField";

export default function TextField({
  name,
  placeholder,
  type,
  icon,
  fullWidth,
  error,
  value,
  onChange,
  color,
}: TextField) {
  // este componente puede ser de color blanco o gris. Si no viene nada en color, es gris
  // conditional rendering color
  const borderBottomColor =
    color === "white" ? styles.borderBottomWhite : styles.borderBottomGray;
  const iconColor =
    color === "white" ? styles.iconColorWhite : styles.iconColorGray;
  const placeholderColor =
    color === "white" ? styles.placeholderWhite : styles.placeholderGray;

  return (
    <div className={!fullWidth ? styles.container : styles.containerFullWidth}>
      <div
        className={`${borderBottomColor} ${
          styles.inputContainer
        } ${iconColor} ${!error && styles.spaceErrorMessage}`}
      >
        <input
          name={name}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          className={`${styles.input} ${placeholderColor}`}
        />
        {icon && <>{icon}</>}
      </div>
      {error && <p className={styles.errorMessage}>{error.message}</p>}
    </div>
  );
}
