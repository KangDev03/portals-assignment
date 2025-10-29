import { cn, tv } from "@heroui/theme";

interface BorderBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  wrapperClass?: string;
  variant?: "primary" | "violet-transparent";
  rounded?: "md" | "lg";
}

const borderBox = tv({
  slots: {
    border: "w-fit h-fit",
    wrapper: "flex items-center justify-center w-full h-full rounded-[inherit] p-2",
  },
  // base: "rounded-xl", 
  variants: {
    variant: {
      primary: { border: "bg-gradient-to-br from-[#3E3E3E] to-[#2D2C2F00]", wrapper: "bg-black-200" },
      'violet-transparent': { border: "bg-violet-10", wrapper: "bg-white" },
    },
    rounded: {
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