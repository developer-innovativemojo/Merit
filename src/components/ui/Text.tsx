import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

type ComponentAs = "h1" | "h2";

interface Props {
  children: React.ReactNode;
  className?: string;
  as?: ComponentAs;
  onclick?: React.MouseEventHandler<HTMLHeadingElement | HTMLParagraphElement>;
  Style?: React.CSSProperties;
}

const Text = forwardRef<HTMLHeadingElement | HTMLParagraphElement, Props>(
  (props, ref) => {
    const { children, className, as, onclick, Style } = props;
    if (as === "h1") {
      return (
        <h1
          ref={ref}
          className={cn(
            "font-inter text-[60px] font-bold text-primary leading-[66px] mob:text-[45px]",
            className
          )}
          onClick={onclick}
          style={Style}
        >
          {children}
        </h1>
      );
    }

    if (as === "h2") {
      return (
        <h2
          ref={ref}
          className={cn(
            "font-inter text-[48px] font-semibold text-primary leading-[48px] mob:text-[35px]",
            className
          )}
          onClick={onclick}
        >
          {children}
        </h2>
      );
    }
    return (
      <p
        ref={ref}
        className={cn(
          "font-inter text-[16px] font-normal leading-6  text-[#30434D]",
          className
        )}
        onClick={onclick}
      >
        {children}
      </p>
    );
  }
);

Text.displayName = "Text";

export default Text;
