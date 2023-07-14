import { VariantProps, cva } from "class-variance-authority";
import { FC } from "react";
import { cn } from "@/lib/utils";
import * as React from "react";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "active:scale-95 inline-flex items-center text-base md:text-lg h-8 sm:h-10 py-2 px-4 w-32 justify-center font-medium transition-colors duration-700 focus:outline-none disabled:opacity-50 disabled:pointer-events-none ",
  {
    variants: {
      variant: {
        default:
          "bg-[#858585] text-black hover:bg-gray-200 focus:ring-0 focus:ring-offset-2 focus:ring-white",
        black:
          "bg-black text-gray-300 hover:bg-white hover:text-black focus:ring-0 dark:focus:ring-white dark:focus:ring-offset-1",
        link: "bg-transparent active:text-underline text-white underline-offset-4",
        
      },
      
    },
    defaultVariants: {
      variant: "default",
      
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant,  isLoading, ...props }, ref) => {
    return (
      <button
        style={{ fontFamily: "Afrah" }}
        className={cn(buttonVariants({ className, variant }))}
        ref={ref}
        disabled={isLoading}
        {...props}
      >
        {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
