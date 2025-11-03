import { cn, tv } from "@heroui/theme";

interface BorderBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  wrapperClass?: string;
  variant?: "primary" | "light-primary" | "secondary" | "red" | "light-red" | "violet-transparent" | "green-gradient";
  rounded?: "md" | "lg" | "sm";
}

const borderBox = tv({
  slots: {
    border: "inline-flex items-center justify-center",
    wrapper: "flex items-center justify-center w-full h-full rounded-[inherit] p-2 text-white dark:text-white",
  },
  // base: "rounded-xl", 
  variants: {
    variant: {
      primary: {
        border: "bg-gradient-to-br from-[#3E3E3E] to-[#2D2C2F00]",
        wrapper: "bg-black-200"
      },
      'light-primary': {
        border: "bg-gradient-to-br from-gray-30 to-gray-30 dark:bg-gradient-to-br dark:from-[#3E3E3E] dark:to-[#2D2C2F00]",
        wrapper: "bg-gray-40 dark:bg-black-200"
      },
      secondary: {
        border: "bg-gradient-to-br from-[#2E2E2E]",
        wrapper: "bg-[#272728]"
      },
      red: {
        border: "bg-gradient-to-br from-[#772828] to-[#891B1B]",
        wrapper: "bg-[#351414]"
      },
      'light-red': {
        border: "bg-gradient-to-br from-[#B85858] to-[#57575700]",
        wrapper: "bg-[#522525]"
      },
      'violet-transparent': {
        border: "bg-violet-10",
        wrapper: "bg-white"
      },
      'green-gradient': {
        border: "bg-gradient-to-br from-[#BEF2DA] to-[#1ABC72]",
        wrapper: "bg-green-20"
      },
    },
    rounded: {
      sm: { border: "p-[1px] rounded-lg" },
      md: { border: "p-[1px] rounded-xl" },
      lg: { border: "p-[5px] rounded-[18px]" },
    },
  },
  defaultVariants: {
    variant: "primary",
    rounded: "md",
  },
});

export const BorderBox: React.FC<BorderBoxProps> = ({
  variant,
  rounded,
  className,
  wrapperClass,
  children,
  ...props
}) => {
  const { border, wrapper } = borderBox({ variant, rounded });

  return (
    <div className={cn(border(), className)} {...props}>
      <div className={cn(wrapper(), wrapperClass)}>
        {children}
      </div>
    </div>
  );
}