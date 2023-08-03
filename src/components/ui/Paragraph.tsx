import * as React from "react";
import { VariantProps, cva } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const paragraphVariants = cva(
  "max-w-prose text-slate-700 text-slate-300 mb-2",
  {
    variants: {
      size: {
        default: "text-[14px] sm:text-lg xxl:text-2xl xl:text-xl",
        lg: "text-4xl",
        sm: "text-sm sm:text-base",
        xs: "text-xs"
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface ParagraphProps
  extends React.HTMLAttributes<HTMLParagraphElement>,
    VariantProps<typeof paragraphVariants> {}

const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, size, children, ...props }, ref) => {
    return (
      <p
        ref={ref}
        {...props}
        className={cn(paragraphVariants({ size, className }))}
        style={{ fontFamily: "Infinity" }}
      >
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
