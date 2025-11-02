'use client';
import { Avatar as BaseAvatar } from "@heroui/avatar";
import { extendVariants } from "@heroui/system";
import { cn } from "@heroui/theme";

const colorClasses = [
  "bg-pink",
  "bg-violet",
  "bg-blue",
  "bg-green",
  "bg-gray",
];

const StyledAvatar = extendVariants(BaseAvatar, {
  variants: {
    base: {
      default: { base: 'text-white border border-border' }
    },
    color: {
      "blue": { base: "bg-blue " },
      "gray": { base: "bg-gray " },
    },
    border: {
      true: { base: "border border-border" },
      false: { base: "border-0" },
    },
    radius: {
      none: { base: "rounded-none" },
      md: { base: "rounded-md" },
      lg: { base: "rounded-lg" },
      xl: { base: "rounded-xl" },
    },
    size: {
      sm: { base: "size-4.5 text-sm" },
      md: { base: "size-7.5 text-md" },
      lg: { base: "size-8 text-sm" },
      xl: { base: "size-9 text-sm" },
    },
  },
  defaultVariants: {
    base: "default",
    color: "gray",
    border: true,
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
