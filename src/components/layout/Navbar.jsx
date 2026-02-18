"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { Menu, X, Phone, Globe, ChevronDown, MoveRight, Sparkles, MapPin, Navigation } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Packages", href: "/packages" },
    { name: "Honeymoon", href: "/honeymoon" },
    { name: "Cruises", href: "/cruises" },
    { name: "Weddings", href: "/wedding" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [hidden, setHidden] = useState(false);
    const { scrollY } = useScroll();
    const pathname = usePathname();

    // Check if current page has a dark hero
    const hasDarkHero = ["/", "/packages", "/cruises", "/honeymoon"].includes(pathname);

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        setIsScrolled(latest > 50);
        setHidden(latest > previous && latest > 300 && !isOpen);
    });

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    const isTranslucent = !isScrolled && hasDarkHero;

    return (
        <>
            <motion.header
                initial={{ y: -100, opacity: 0 }}
                animate={{ 
                  y: hidden ? -120 : 0, 
                  opacity: 1,
                  scale: isScrolled ? 0.95 : 1
                }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 left-0 right-0 z-[100] flex justify-center pt-6 px-6 pointer-events-none"
            >
                {/* --- The Floating Island --- */}
                <div className={cn(
                    "pointer-events-auto flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] shadow-2xl",
                    isScrolled 
                      ? "bg-white/80 backdrop-blur-3xl border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.1)]" 
                      : isTranslucent 
                        ? "bg-white/10 backdrop-blur-md border border-white/10 shadow-none" 
                        : "bg-white border border-gray-100 shadow-xl"
                )}>
                    
                    {/* Branded Notch */}
                    <Link href="/" className="pl-4 pr-6 py-2 border-r border-gray-200/20 group">
                        <Image
                            src="/full_logo.png"
                            alt="Logo"
                            width={140}
                            height={40}
                            className={cn(
                              "h-7 w-auto object-contain transition-all duration-500 group-hover:scale-105",
                              isTranslucent ? "brightness-0 invert" : ""
                            )}
                        />
                    </Link>

                    {/* Navigation - Inline Boutique */}
                    <nav className="hidden lg:flex items-center gap-1 px-4">
                        {navLinks.map((link) => {
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "relative px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-500",
                                        isTranslucent ? "text-white" : "text-[#0A1128]",
                                        isActive ? "opacity-100" : "opacity-40 hover:opacity-100"
                                    )}
                                >
                                    <span className="relative z-10">{link.name}</span>
                                    {isActive && (
                                        <motion.div
                                            layoutId="capsuleActive"
                                            className={cn(
                                              "absolute inset-0 rounded-full",
                                              isTranslucent ? "bg-white/10" : "bg-[#0A1128]/5 shadow-sm"
                                            )}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                </Link>
                            );
                        })}
                    </nav>

                    {/* Action Hub */}
                    <div className="flex items-center gap-2 ml-2">
                        <Button
                          href="/contact"
                          className={cn(
                              "hidden md:flex rounded-full px-6 py-5 text-[10px] font-black uppercase tracking-widest border-none transition-all duration-500",
                              isScrolled 
                                ? "bg-sky-500 text-white hover:bg-[#0A1128] shadow-sky-500/20" 
                                : isTranslucent 
                                  ? "bg-white text-black hover:bg-sky-400 hover:text-white" 
                                  : "bg-[#0A1128] text-white hover:bg-sky-600 shadow-lg shadow-sky-500/10"
                          )}
                        >
                          Book Now
                        </Button>

                        {/* Unique Toggle Orb */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={cn(
                                "flex items-center justify-center w-12 h-12 rounded-full transition-all duration-500 group relative overflow-hidden",
                                isOpen 
                                  ? "bg-sky-500 text-white scale-90" 
                                  : isTranslucent 
                                    ? "bg-white/20 text-white backdrop-blur-xl" 
                                    : "bg-[#0A1128] text-white"
                            )}
                        >
                            <div className="relative w-5 h-5">
                                <span className={cn(
                                  "absolute left-0 top-1 w-5 h-0.5 transition-all duration-500",
                                  isOpen ? "rotate-45 translate-y-1.5 bg-white" : "bg-current"
                                )} />
                                <span className={cn(
                                  "absolute left-0 bottom-1 w-3 h-0.5 transition-all duration-500 translate-x-1",
                                  isOpen ? "-rotate-45 -translate-y-1.5 w-5 -translate-x-0 bg-white" : "bg-current"
                                )} />
                            </div>
                        </button>
                    </div>
                </div>
            </motion.header>

            {/* --- Magazine mobile Menu: Full Page Art --- */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="fixed inset-0 bg-[#050B18] z-[90] flex flex-col p-6 md:p-12"
                    >
                        {/* Elegant Magazine-style Background Grid */}
                        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
                            <div className="absolute top-0 left-1/4 w-px h-full bg-white/20" />
                            <div className="absolute top-0 left-2/4 w-px h-full bg-white/20" />
                            <div className="absolute top-0 left-3/4 w-px h-full bg-white/20" />
                        </div>

                        {/* Top Branding Section */}
                        <div className="relative z-10 flex justify-between items-start mb-20">
                            <div className="space-y-4">
                                <div className="text-sky-500 font-black uppercase tracking-[0.5em] text-[10px]">Explorer&apos;s Journal</div>
                                <h3 className="text-white text-3xl font-serif italic">Discover the Extraordinary</h3>
                            </div>
                            <div className="hidden lg:block text-right">
                                <div className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2">Since 2018</div>
                                <div className="text-white/20 text-4xl font-serif">Happy Journey</div>
                            </div>
                        </div>

                        {/* Main Menu Links - Asymmetrical Magazine Layout */}
                        <div className="relative z-10 flex-1 flex flex-col md:flex-row gap-20 items-end">
                            <div className="flex-1 flex flex-col gap-6 w-full">
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ x: -100, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        transition={{ delay: i * 0.1, duration: 0.8 }}
                                    >
                                        <Link
                                            href={link.href}
                                            className="group inline-flex items-baseline gap-8"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            <span className="text-sky-500 font-serif italic text-2xl md:text-4xl opacity-40 group-hover:opacity-100 transition-opacity">
                                              {String(i + 1).padStart(2, '0')}
                                            </span>
                                            <h2 className={cn(
                                                "text-6xl md:text-9xl font-bold font-serif tracking-tighter transition-all duration-700",
                                                pathname === link.href ? "text-white" : "text-white/10 hover:text-white/50"
                                            )}>
                                                {link.name}
                                            </h2>
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Featured Mobile Menu Image/Card */}
                            <div className="hidden lg:block w-1/4 mb-10 group">
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 shadow-3xl">
                                    <Image 
                                      src="https://images.unsplash.com/photo-1540339832862-437913ca01b7?q=80&w=1000" 
                                      fill 
                                      className="object-cover transition-transform duration-[3000ms] group-hover:scale-110" 
                                      alt="Featured" 
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                                    <div className="absolute bottom-8 left-8 right-8">
                                        <div className="flex items-center gap-2 text-sky-400 font-black uppercase text-[10px] tracking-widest mb-2">
                                          <Sparkles size={12} /> Seasonal Arrival
                                        </div>
                                        <h4 className="text-white text-2xl font-bold font-serif">Swiss Alp Retreats</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Footer Section */}
                        <div className="relative z-10 mt-20 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between gap-12 text-white/40">
                            <div className="flex gap-12">
                                <div className="space-y-2">
                                    <div className="text-[10px] font-black uppercase text-sky-500 tracking-widest">Inquiries</div>
                                    <p className="text-white text-sm">curate@happyjourney.travel</p>
                                </div>
                                <div className="space-y-2">
                                    <div className="text-[10px] font-black uppercase text-sky-500 tracking-widest">Concierge</div>
                                    <p className="text-white text-sm">+91 98765 43210</p>
                                </div>
                            </div>
                            
                            <div className="flex items-end gap-6 text-[10px] font-black uppercase tracking-[0.2em]">
                                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                                <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                                <a href="#" className="hover:text-white transition-colors">Vimeo</a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
