import React from 'react'
import { cn } from '@/lib/utils'
import { VariantProps, cva } from "class-variance-authority";

const buttonVariants = cva(
    "relative group border text-foreground mx-auto text-center rounded-full font-medium transition-all duration-300",
    {
        variants: {
            variant: {
                default: "bg-sharks-blue/5 hover:bg-sharks-blue/0 border-sharks-blue/20 text-white",
                solid: "bg-white hover:bg-white/90 text-sharks-navy-deep border-transparent hover:border-white/50 hover:shadow-xl hover:shadow-sharks-blue/20 transition-all duration-200",
                ghost: "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07] text-white/85 hover:text-white backdrop-blur-sm",
            },
            size: {
                default: "px-7 py-2 text-[13px]",
                sm: "px-5 py-1.5 text-[12px]",
                lg: "px-10 py-3 text-[14px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> { neon?: boolean }

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, neon = true, size, variant, children, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size }), className)}
                ref={ref}
                {...props}
            >
                {/* Top neon glow line */}
                <span className={cn(
                    "absolute h-px opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out inset-x-0 inset-y-0 bg-gradient-to-r w-3/4 mx-auto from-transparent via-sharks-blue-light to-transparent hidden",
                    neon && "block"
                )} />
                {children}
                {/* Bottom neon glow line */}
                <span className={cn(
                    "absolute group-hover:opacity-30 transition-all duration-500 ease-in-out inset-x-0 h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-sharks-blue-light to-transparent hidden",
                    neon && "block"
                )} />
            </button>
        );
    }
)

Button.displayName = 'Button';

export { Button, buttonVariants };
