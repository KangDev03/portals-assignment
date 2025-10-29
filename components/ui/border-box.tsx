import { tv } from "@heroui/theme";

interface BorderBoxProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "primary";
  size?: "md" | "lg";
}

const borderBox = tv({
  base: "rounded-xl",
  variants: {
    variant: {
      primary: "bg-gradient-to-br from-[#3E3E3E] to-[#2D2C2F00]",
    },
    size: {
      md: "p-[1px]",
      lg: "p-6",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

export const BorderBox: React.FC<BorderBoxProps> = ({
  variant,
  size,
  className,
  children,
  ...props
}) => {
  return (
    <div className={borderBox({ variant, size, className })} {...props}>
      <div className="w-full h-full rounded-[inherit] bg-black-200 p-2">
        {children}
      </div>
    </div>
  );
}