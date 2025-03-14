import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
import Spinner from "./Spinner";

const button = cva(
  [
    "px-6",
    "py-4",
    "rounded-[4px]",
    "font-bold",
    "text-[14px]",
    "leading-[36px]",
    "font-montserrat"
  ],
  {
    variants: {
      variant: {
        primary: [
          "bg-primary text-secondary font-semibold text-[14px] font-bold font-montserrat",
        ],
      },
      size: {
        small: ["py-4", "px-6"],
        medium: [""],
      },
    },
    compoundVariants: [{ variant: "primary", size: "medium" }],
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  className,
  variant,
  size,
  isLoading,
  children,
  ...props
}) => (
  <button
    disabled={isLoading}
    className={cn(
      button({ variant, size, className }),
      "relative flex items-center justify-center"
    )}
    {...props}
  >
    {isLoading ? <Spinner /> : children}
  </button>
);

export default Button;
