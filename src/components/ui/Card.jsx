"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Card = ({ children, className, ...props }) => (
    <motion.div
        whileHover={{ y: -5 }}
        transition={{ type: "spring", stiffness: 300 }}
        className={cn(
            "rounded-2xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100",
            className
        )}
        {...props}
    >
        {children}
    </motion.div>
);

export const CardHeader = ({ children, className, ...props }) => (
    <div className={cn("flex flex-col space-y-1.5 pb-4", className)} {...props}>
        {children}
    </div>
);

export const CardTitle = ({ children, className, ...props }) => (
    <h3 className={cn("font-heading text-xl font-bold leading-none tracking-tight text-gray-900", className)} {...props}>
        {children}
    </h3>
);

export const CardContent = ({ children, className, ...props }) => (
    <div className={cn("text-sm text-gray-500", className)} {...props}>
        {children}
    </div>
);

export const CardFooter = ({ children, className, ...props }) => (
    <div className={cn("flex items-center pt-4", className)} {...props}>
        {children}
    </div>
);
