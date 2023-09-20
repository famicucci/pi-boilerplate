import { UseControllerProps } from "react-hook-form";

export interface TextField {
  name: UseControllerProps<any>["name"];
  type: string;
  icon?: React.ReactNode;
  placeholder?: string;
  fullWidth?: boolean;
  error?: { message: string } | undefined;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  color?: string | undefined;
}
