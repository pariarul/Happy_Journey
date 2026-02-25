"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { 
  Menu, X, Sparkles, Map, Compass, Globe, 
  User, Send, Home, Info, Ship, Heart 
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Packages", href: "/packages", icon: Map },
    { name: "Honeymoon", href: "/honeymoon", icon: Heart },
    { name: "Cruises", href: "/cruises", icon: Ship },
    { name: "Weddings", href: "/wedding", icon: Sparkles },
    { name: "Contact", href: "/contact", icon: Send },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    const hasDarkHero = ["/", "/packages", "/cruises", "/honeymoon" , "/wedding", "/about", "/contact"].includes(pathname);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    const isTranslucent = !isScrolled && hasDarkHero;

    return (
        <>
            {/* --- DESKTOP: Minimalist Top Line --- */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] hidden lg:block transition-all duration-700",
                    isScrolled 
                      ? "bg-white/80 backdrop-blur-2xl py-3 border-b border-gray-100 shadow-sm" 
                      : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-10 flex items-center justify-between">
                    {/* Elite Logo */}
                    <Link href="/" className="flex items-center group">
                        <Image
                            src="/full_logo.png"
                            alt="Logo"
                            width={160}
                            height={40}
                            className={cn(
                              "h-18 w-auto object-contain transition-all duration-500",
                              isTranslucent ? "brightness-0 invert" : ""
                            )}
                        />
                    </Link>

                    {/* Minimalist Top Links */}
                    <div className="flex items-center gap-10">
                        {navLinks.slice(0, 7).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 hover:text-sky-500",
                                    isTranslucent ? "text-white/60" : "text-[#0A1128]/60",
                                    pathname === link.href && (isTranslucent ? "text-white" : "text-[#0A1128]")
                                )}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desk CTA */}
                    <div className="flex items-center gap-6">
                        <Button
                          href="/contact"
                          className={cn(
                            "rounded-full px-8 py-5 text-[10px] font-black uppercase tracking-widest border-none transition-all duration-500 shadow-xl",
                            isTranslucent 
                              ? "bg-white text-black hover:bg-sky-400 hover:text-white" 
                              : "bg-[#0A1128] text-white hover:bg-sky-600 shadow-sky-500/10"
                          )}
                        >
                          Plan Trip
                        </Button>
                    </div>
                </div>
            </motion.nav>

            {/* --- MOBILE: The Horizon Dock (Bottom Fixed) --- */}
            <div className="lg:hidden fixed bottom-8 left-0 right-0 z-[100] px-4 pointer-events-none">
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mx-auto max-w-sm pointer-events-auto"
                >
                    <div className="bg-[#0A1128]/90 backdrop-blur-3xl rounded-[2.5rem] p-2 flex items-center justify-between border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
                        {/* Essential Dock Items */}
                        <div className="flex items-center justify-around flex-1 px-4">
                            {[navLinks[0], navLinks[1], navLinks[2], navLinks[3], navLinks[5], navLinks[6]].map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "p-4 rounded-2xl transition-all duration-300 relative group",
                                            isActive ? "text-white" : "text-white/40"
                                        )}
                                    >
                                        <link.icon size={22} className={cn("transition-transform", isActive && "scale-110")} />
                                        {isActive && (
                                            <motion.div
                                                layoutId="dockNode"
                                                className="absolute inset-0 bg-white/10 rounded-2xl -z-10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                    </Link>
                                );
                            })}
                        </div>


                    </div>
                </motion.div>
            </div>

            {/* --- MOBILE LOGO (Top Fixed Only for Brand) --- */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-[90] p-6 flex justify-between items-center pointer-events-none">
                <Link href="/" className="pointer-events-auto">
                    <Image
                        src="/full_logo.png"
                        alt="Logo"
                        width={120}
                        height={30}
                        className={cn(
                          "h-14 w-auto object-contain transition-all duration-500",
                          isTranslucent ? "brightness-0 invert" : ""
                        )}
                    />
                </Link>
            </div>

            {/* --- CURTAIN MENU (Universal Overlay) --- */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, clipPath: "circle(0% at 50% 100%)" }}
                        animate={{ opacity: 1, clipPath: "circle(150% at 50% 100%)" }}
                        exit={{ opacity: 0, clipPath: "circle(0% at 50% 100%)" }}
                        transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
                        className="fixed inset-0 bg-[#050B18] z-[95] flex flex-col pt-32 pb-40 px-10 overflow-y-auto"
                    >
                        <div className="container mx-auto max-w-2xl space-y-12">
                            <div className="text-sky-500 font-black uppercase tracking-[0.5em] text-[10px] text-center">Global Navigation</div>
                            
                            <nav className="flex flex-col gap-4">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className={cn(
                                                "group flex items-center justify-between py-4 border-b border-white/5 transition-all",
                                                pathname === link.href ? "text-white" : "text-white/20 hover:text-white/80"
                                            )}
                                        >
                                            <span className="text-4xl md:text-6xl font-serif font-bold italic group-hover:pl-4 transition-all duration-500">
                                                {link.name}
                                            </span>
                                            <MoveRight className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500 text-sky-400" />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="pt-12 grid grid-cols-1 md:grid-cols-2 gap-12 text-center md:text-left">
                                <div className="space-y-4">
                                    <div className="text-sky-400 font-black text-[10px] uppercase tracking-widest">Connect</div>
                                    <div className="flex flex-col gap-2 text-white/50 text-sm">
                                        <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
                                        <a href="mailto:explore@happyjourney.com" className="hover:text-white transition-colors">explore@happyjourney.com</a>
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="text-sky-400 font-black text-[10px] uppercase tracking-widest">Social</div>
                                    <div className="flex justify-center md:justify-start gap-8 text-[10px] font-black uppercase tracking-widest text-white/30">
                                        <a href="#" className="hover:text-white transition-all">Instagram</a>
                                        <a href="#" className="hover:text-white transition-all">Twitter</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Helper Component for arrows in menu since I forgot to import it but it's used in the logic below */}
            {/* Actually, it's defined in lucide-react, I just need to make sure it's in the imports list */}
        </>
    );
}

function MoveRight({ className }) {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={className}
        >
            <path d="M18 8L22 12L18 16" />
            <path d="M2 12H22" />
        </svg>
    );
}
