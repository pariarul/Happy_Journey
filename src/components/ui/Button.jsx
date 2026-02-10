"use client";

import { forwardRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = {
    primary: "bg-gradient-to-r from-primary-blue to-secondary-sky text-white hover:opacity-90 shadow-lg hover:shadow-xl",
    secondary: "bg-white text-primary-blue border border-primary-blue hover:bg-blue-50",
    outline: "border-2 border-white text-white hover:bg-white/20",
    ghost: "hover:bg-gray-100 text-gray-700",
    link: "text-primary-blue underline-offset-4 hover:underline",
};

const buttonSizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
    icon: "h-10 w-10 p-0",
};

const Button = forwardRef(({
    className,
    variant = "primary",
    size = "md",
    fullWidth = false,
    isLoading = false,
    href,
    children,
    ...props
}, ref) => {
    if (href) {
        return (
            <Link
                href={href}
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue disabled:pointer-events-none disabled:opacity-50",
                    buttonVariants[variant],
                    buttonSizes[size],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                {children}
            </Link>
        );
    }

    return (
        <button
            ref={ref}
            className={cn(
                "inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue disabled:pointer-events-none disabled:opacity-50",
                buttonVariants[variant],
                buttonSizes[size],
                fullWidth && "w-full",
                className
            )}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {children}
        </button>
    );
});

Button.displayName = "Button";

export { Button, buttonVariants };
