import React from "react";
import { CircularProgress, IconButton as MuiIconButton } from "@mui/material";
import { useLoadingButtonStyle } from "./useLoadingButtonStyles";

interface IconButtonProps {
  className?: string;
  label?: string;
  controls?: string;
  onClick?: (e: React.MouseEvent) => void;
  Icon?: React.ReactElement;
  isLoading?: boolean;
  disabled?: boolean;
  disableRipple?: boolean;
  children?: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
  className,
  onClick,
  children,
  label,
  controls,
  Icon,
  isLoading,
  disableRipple = false,
  ...rest
}) => {
  const loadingClasses = useLoadingButtonStyle();
  return (
    <MuiIconButton
      className={className}
      onClick={onClick}
      aria-label={label}
      aria-controls={controls}
      {...rest}
      disableRipple={disableRipple}
    >
      {isLoading && (
        <div className={loadingClasses.loadingIconOverlay}>
          <CircularProgress size={25} />
        </div>
      )}
      {Icon || children}
    </MuiIconButton>
  );
};

export default IconButton;
