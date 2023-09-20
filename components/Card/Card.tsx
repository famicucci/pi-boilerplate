import { Children } from "@/models";
import * as React from "react";
import styles from "../../styles/card.module.css";
import { Card } from "@/models/card";

export function Card({ children, className }: Card & Children) {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
}
