'use client';
import { Card as BaseCard } from "@heroui/card";
import { extendVariants } from "@heroui/system";
import { cn } from "@heroui/theme";

export const MyCard = extendVariants(BaseCard, {
  variants: {
    variant: {
      solid: { base: "w-full h-fit bg-black-80 border border-gray-10 rounded-2xl" },
    },
    size: {
      sm: { base: "p-2 gap-2" },
      md: { base: "p-4 gap-4" },
      lg: { base: "px-5 py-4 gap-6" },
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});