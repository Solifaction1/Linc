import React from "react";

type propsConfig = {
  open?: boolean;
  children?: React.ReactNode;
  backgroundBlur?: boolean;
  allowClickOut?: boolean;
  allowKeyPress?: boolean;
  className?: string;
  handleClick?: React.MouseEventHandler<HTMLButtonElement>;
  closePopUp?: () => void;
};

const defaultProps = {
  open: true,
  children: <h2>Hier komt een grote titel</h2>,
  backgroundBlur: true,
  allowClickOut: true,
  allowKeyPress: true,
  className: "",
  handleClick: (): void => console.log("Default function"),
  closePopUp: (): void => console.log("Default function"),
};

export type { propsConfig };
export { defaultProps };
