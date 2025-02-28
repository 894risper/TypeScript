import * as React from "react";
import { cn } from  "../lib/utils" 

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  type?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type = "text", ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn("flex h-10 w-full", className)} 
      ref={ref}
      {...props}
    />
  );
});

Input.displayName = "Input";

export { Input };
