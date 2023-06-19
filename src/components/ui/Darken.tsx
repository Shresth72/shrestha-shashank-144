import * as React from "react";

interface ParagraphProps extends React.HTMLAttributes<HTMLSpanElement> {}

const Darken = React.forwardRef<HTMLSpanElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <span ref={ref} {...props} className="text-[#666666]">
        {children}
      </span>
    );
  }
);

Darken.displayName = "Darken";

export default Darken;
