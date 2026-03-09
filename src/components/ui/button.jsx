import * as React from "react";

const Button = React.forwardRef(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variantClasses = {
      default: "bg-primary-600 text-white hover:bg-primary-700",
      outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50",
      ghost: "text-gray-700 hover:bg-gray-50",
      link: "text-primary-600 hover:underline"
    };

    const sizeClasses = {
      default: "h-10 px-4 py-2",
      sm: "h-9 px-3",
      lg: "h-11 px-8",
      icon: "h-10 w-10"
    };

    return (
      <button
        className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
