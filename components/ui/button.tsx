'use client';
import { Button as BaseButton } from "@heroui/button";
import { extendVariants } from "@heroui/system";
import { cn } from "@heroui/theme";

export const CustomButton = extendVariants(BaseButton, {
  variants: {
    base: {
      default: "transition-all duration-300"
    },
    variant: {
      primary: "bg-violet-20 text-white",
      secondary: "bg-black-200 text-white",
    },
    size: {
      sm: "px-3.5 py-2 gap-2 font-semibold text-sm",
      md: "px-4.5 py-2.5 gap-2.5 font-semibold text-md",
    },
    rounded: {
      none: "rounded-none",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "sm",
    rounded: "xl",
  },
});