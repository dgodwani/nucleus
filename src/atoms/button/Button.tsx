// components/button/button.tsx
import React from "react";

export type ButtonProps = {};



const Button: React.FC<ButtonProps> = ({
  ...props
}) => {
  return (
    <Button
      {...props}
    >
    </Button>
  );
};

export default Button;