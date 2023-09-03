import { forwardRef } from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button disabled={disabled} type={type} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button component";

export default Button;
