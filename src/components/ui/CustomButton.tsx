import cn from "@/libs/cn";
import { Slot } from "@radix-ui/react-slot";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
    "flex items-center gap-[0.5rem] px-[1rem] py-[0.4rem] rounded-sm",
    {
        variants: {
            variant: {
                fill: "bg-primary text-primary-foreground",
                outline: "border border-input",
            },
        },
        defaultVariants: {
            variant: "fill",
        },
    }
);

interface Props
    extends ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const CustomButton = forwardRef<HTMLButtonElement, Props>(
    ({ className, variant, asChild, children }, ref) => {
        const Comp = asChild ? Slot : "button";

        return (
            <Comp
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
            >
                {children}
            </Comp>
        );
    }
);

CustomButton.displayName = "CustomButton";
export default CustomButton;
