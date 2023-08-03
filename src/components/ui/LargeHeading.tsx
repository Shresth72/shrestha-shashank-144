import { FC } from "react";

import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

const headingVariants = cva(
  "font-extrabold leading-tight tracking-normal text-left",
  {
    variants: {
      size: {
        default: "text-xl md:text-2xl lg:text-3xl",
        lg: "text-2xl md:text-3xl lg:text-4xl",
        sm: "text-lg md:text-xl lg:text-xl",
        xl: "text-5xl sm:text-6xl md:text-7xl lg:text-[83px] xl:text-[90px] xxl:text-[100px]",
        xxl: "text-6xl md:text-7xl lg:text-[90px]",
        xxxl: "text-6xl md:text-7xl lg:text-9xl",
      },
      type: {
        default: "text-white",
        ghost: "text-[#1a1a1a]",
      },
    },
    defaultVariants: {
      size: "default",
      type: "default",
    },
  }
);

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  type,
  ...props
}) => {
  return (
    <h1
      {...props}
      className={cn(headingVariants({ size, type, className }))}
      style={{ fontFamily: "Afrah" }}
    >
      {children}
    </h1>
  );
};

export default LargeHeading;
export { headingVariants };
