import React from "react";

import { CustomButtonProps } from "interfaces/common";
import { Button, padding } from "@pankod/refine-mui";

const CustomButton = ({
  type,
  title,
  backgroundColor,
  fullWidth,
  handleClick,
  color,
  icon,
}: CustomButtonProps) => {
  return (
    <Button
      sx={{
        flex: fullWidth ? 1 : "unset",
        padding: "10px 15px",
        width: fullWidth ? "100%" : "fit-content",
        minWidth: 130,
        backgroundColor,
        color,
        fontSize: 16,
        fontWeight: 600,
        gap: "10px",
        textTransform: "capitalize",
        "&:hover": {
          opacity: 0.9,
          backgroundColor,
        },
      }}
      onClick={handleClick}
    >
      {icon}
      {title}
    </Button>
  );
};

export default CustomButton;
