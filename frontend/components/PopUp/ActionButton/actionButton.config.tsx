import React from "react";

type propsConfig = {
  buttonType?: "close" | string;
  size?: "sm" | "md" | "lg" | string;
  disabled?: boolean;
  className?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const defaultProps = {
  buttonType: "primary",
  size: "md",
  disabled: false,
  className: "",
  handleClick: (): void => console.log("test"),
};

export type { propsConfig };
export { defaultProps };
