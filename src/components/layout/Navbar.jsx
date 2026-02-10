"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Phone, Globe, ChevronDown, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
    const [isScrolled, setIsScrolled] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setIsScrolled(latest > 50);
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
                    "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "py-3 bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100/50"
                        : "py-6 bg-transparent"
                )}
            >
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="relative z-50 group flex items-center gap-2">
                            <div className={cn(
                                "h-10 w-10 rounded-xl flex items-center justify-center transition-colors shadow-lg",
                                isScrolled ? "bg-primary-blue text-white" : "bg-white text-primary-blue"
                            )}>
                                <Globe size={24} />
                            </div>
                            <div className="flex flex-col">
                                <span className={cn(
                                    "text-xl font-bold font-heading leading-none transition-colors",
                                    isScrolled ? "text-gray-900" : "text-white"
                                )}>
                                    HappyJourney
                                </span>
                                <span className={cn(
                                    "text-[10px] tracking-widest uppercase font-medium transition-colors opacity-80",
                                    isScrolled ? "text-gray-500" : "text-gray-200"
                                )}>
                                    Premium Travel
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-sm p-1.5 rounded-full border border-white/10 shadow-lg">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-1",
                                            isScrolled
                                                ? isActive ? "bg-primary-blue text-white shadow-md" : "text-gray-600 hover:bg-gray-100"
                                                : isActive ? "bg-white text-primary-blue shadow-md" : "text-white hover:bg-white/20"
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
                                    href="/contact"
                                    id="nav-plan-trip-btn"
                                    size="sm"
                                    className={cn(
                                        "rounded-full px-6 shadow-lg shadow-blue-500/20",
                                        isScrolled ? "" : "bg-white text-primary-blue hover:bg-blue-50"
                                    )}
                                >
                                    Plan Trip <MoveRight size={16} className="ml-2" />
                                </Button>
                            </div>

                            <button
                                id="mobile-menu-toggle"
                                onClick={() => setIsOpen(!isOpen)}
                                className={cn(
                                    "lg:hidden relative z-50 p-2 rounded-full transition-all duration-300",
                                    isOpen
                                        ? "bg-gray-100 text-gray-900 rotate-90"
                                        : isScrolled ? "bg-gray-100 text-gray-900" : "bg-white/20 text-white hover:bg-white/30"
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
