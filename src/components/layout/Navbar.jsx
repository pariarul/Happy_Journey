"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, Globe, ChevronDown, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Packages", href: "/packages" },
    { name: "Honeymoon", href: "/honeymoon" },
    { name: "Cruises", href: "/cruises" },
    { name: "Weddings", href: "/wedding" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [hidden, setHidden] = useState(false);
    // Removed isScrolled logic
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
    });

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <>
            <motion.nav
                variants={{
                    visible: { y: 0 },
                    hidden: { y: "-100%" },
                }}
                animate={hidden ? "hidden" : "visible"}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-50 py-3 bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100",
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="relative z-50 flex items-center gap-2">
                            <Image
                                src="/full_logo.png"
                                alt="Happy Journey Logo"
                                width={160}
                                height={50}
                                priority
                                className="h-auto w-auto object-contain"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 bg-gray-50/50 p-1.5 rounded-full border border-gray-100">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1",
                                            isActive
                                                ? "bg-primary-blue text-white shadow-md"
                                                : "text-gray-600 hover:bg-white hover:shadow-sm"
                                        )}
                                    >
                                        {link.name}
                                        {isActive && (
                                            <motion.div
                                                layoutId="activeTab"
                                                className="absolute inset-0 rounded-full bg-transparent"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>

                        {/* CTA & Mobile Toggle */}
                        <div className="flex items-center gap-4">
                            <div className="hidden lg:block">
                                <Button
                                    href="whatsapp://send?phone=9876543210"
                                    id="nav-plan-trip-btn"
                                    size="sm"
                                    className={cn(
                                        "rounded-full px-6 shadow-lg shadow-blue-500/20 bg-primary-blue text-white hover:bg-blue-700"
                                    )}
                                >
                                    Plan Trip <MoveRight size={16} className="ml-2" />
                                </Button>
                            </div>

                            <button
                                id="mobile-menu-toggle"
                                onClick={() => setIsOpen(!isOpen)}
                                className={cn(
                                    "lg:hidden relative z-50 p-2 rounded-full transition-all duration-300 bg-gray-100 text-gray-900",
                                    isOpen && "rotate-90"
                                )}
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
                        transition={{ duration: 0.5, ease: "circIn" }}
                        className="fixed inset-0 bg-white z-40 lg:hidden pt-24 px-6 overflow-y-auto flex flex-col"
                    >
                        <div className="flex-1 flex flex-col justify-center space-y-6">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.name}
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={cn(
                                            "block text-4xl font-bold font-heading tracking-tight transition-colors",
                                            pathname === link.href ? "text-primary-blue" : "text-gray-300 hover:text-gray-900"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="py-12 border-t border-gray-100 space-y-6"
                        >
                            <Button href="/contact" size="lg" className="w-full text-lg py-6 rounded-2xl shadow-xl shadow-blue-500/20">
                                Start Planning Today
                            </Button>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-gray-50 rounded-2xl">
                                    <span className="block text-gray-500 text-sm mb-1">Email Us</span>
                                    <a href="mailto:info@happyjourney.com" className="font-semibold text-gray-900">info@happyjourney.com</a>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl">
                                    <span className="block text-gray-500 text-sm mb-1">Call Us</span>
                                    <a href="tel:+919876543210" className="font-semibold text-gray-900">+91 98765 43210</a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
