'use client';
import { Avatar as BaseAvatar } from "@heroui/avatar";
import { extendVariants } from "@heroui/system";
import { cn } from "@heroui/theme";

const colorClasses = [
  "bg-pink text-white",
  "bg-violet text-white",
  "bg-blue text-white",
  "bg-green text-white",
];

const StyledAvatar = extendVariants(BaseAvatar, {
  variants: {
    color: {
      "blue": { base: "bg-blue text-white" },
    },
    radius: {
      none: { base: "rounded-none" },
      md: { base: "rounded-md" },
      xl: { base: "rounded-xl" },
    },
    size: {
      sm: { base: "size-4.5 text-sm" },
      md: { base: "size-6 text-md" },
      lg: { base: "size-8 text-lg" },
      xl: { base: "size-9 text-sm" },
    },
  },
  defaultVariants: {
    color: "blue",
    radius: "xl",
    size: "xl",
  },
});

export const Avatar = ({
  src,
  name,
  className,
  ...props
}: React.ComponentProps<typeof StyledAvatar>) => {
  const colorIndex = name
    ? name.charCodeAt(0) % colorClasses.length
    : Math.floor(Math.random() * colorClasses.length);

  const bgColor = !src ? colorClasses[colorIndex] : "";

  return (
    // <div
    //   className={cn(
    //     "inline-flex items-center justify-center rounded-xl border border-border p-[1px]"
    //   )}
    // >
    // </div>
    <StyledAvatar
      {...props}
      src={src}
      name={name}
      className={cn(bgColor, className)}
    />
  );
};
