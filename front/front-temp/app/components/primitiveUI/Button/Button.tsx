import React from "react";
import MuiButton from "@mui/material/Button";
import clsx from "clsx";
import { CircularProgress } from "@mui/material";

export interface ButtonProps {
  label?: string;
  onClick?: React.MouseEventHandler;
  className?: string;
  id?: string;
  variant?: "outlined" | "contained";
  color?:
    | "primary"
    | "secondary"
    | "inherit"
    | "success"
    | "error"
    | "info"
    | "warning"
    | undefined;
  disabled?: boolean;
  component?: "span";
  size?: "small" | "medium" | "large";
  shape?: "round" | "square";
  fill?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  isLoading?: boolean;
  classes?: {
    startIcon?: string;
    label?: string;
  };
  children?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  label,
  color,
  variant,
  size,
  disabled,
  fill,
  isLoading,
  id,
  shape = "square",
  ...rest
}) => {
  return (
    <MuiButton
      id={id}
      onClick={onClick}
      color={color}
      variant={variant}
      size={size}
      disabled={disabled}
      {...rest}
    >
      {isLoading && (
        <div>
          <CircularProgress size={25} />
        </div>
      )}
      {label || children}
    </MuiButton>
  );
};

export default Button;
