"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
    Anchor, Compass, Sun, MapPin, Fish, 
    GlassWater, Umbrella, Calendar, Sparkles, 
    ArrowRight, Ship, ShieldCheck, Gem, Quote,
    Waves, Star
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const cruises = [
    {
        title: "Mediterranean Royal",
        route: "Barcelona - Rome - Athens",
        duration: "7 Nights",
        price: "Starts ₹1,45,000",
        image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
        desc: "A journey through history on the most sophisticated vessel at sea. Explore Rome's ancient glory and Santorini's sunsets.",
        ports: ["Barcelona", "Rome", "Athens", "Santorini"],
        tag: "Bestseller"
    },
    {
        title: "Caribbean Majestic",
        route: "Miami - Bahamas - Cozumel",
        duration: "5 Nights",
        price: "Starts ₹85,000",
        image: "https://images.unsplash.com/photo-1599640845513-534431836ea5?q=80&w=1000",
        desc: "Tropical bliss meets high-end luxury. Enjoy private island access and world-class onboard spa treatments.",
        ports: ["Miami", "Nassau", "Cozumel", "Key West"],
        tag: "Trending"
    },
    {
        title: "Alaskan Grandeur",
        route: "Seattle - Juneau - Glacier Bay",
        duration: "10 Nights",
        price: "Starts ₹2,10,000",
        image: "https://images.unsplash.com/photo-1518182170546-07fb614d9313?q=80&w=1000",
        desc: "Witness the raw power of nature from our observation decks. Five-star dining amidst spectacular icy landscapes.",
        ports: ["Seattle", "Juneau", "Skagway", "Victoria"],
        tag: "Luxury Plus"
    }
];

const features = [
    { icon: GlassWater, title: "Michelin Dining", desc: "Exquisite culinary journeys curated by world-renowned chefs." },
    { icon: Umbrella, title: "Private Butler", desc: "Dedicated 24/7 service for our suite-class guests." },
    { icon: Fish, title: "Vista Suites", desc: "Floor-to-ceiling ocean views with private veranda access." },
    { icon: Sun, title: "Grand Atrium", desc: "Breathtaking entertainment and luxury shopping onboard." }
];

export default function CruisesPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 200]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <div className="bg-[#04080F] min-h-screen text-white font-sans overflow-x-hidden">
            {/* Hero Section - The Dreamscape */}
            <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: y1, opacity: opacityHero }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1599640845513-534431836ea5?q=80&w=2000"
                        alt="Cruise Hero"
                        fill
                        className="object-cover brightness-50 contrast-125 scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#04080F]/80 via-transparent to-[#04080F]" />
                </motion.div>

                {/* Shimmering Water Effect Overlay */}
                <div className="absolute inset-0 z-[1] pointer-events-none opacity-20">
                  <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse" />
                </div>

                <div className="relative z-10 text-center px-4 max-w-6xl space-y-12">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="mx-auto inline-flex items-center justify-center w-24 h-24 bg-white/5 backdrop-blur-2xl rounded-full shadow-[0_0_50px_rgba(255,255,255,0.1)] border border-white/20 mb-4"
                    >
                        <Anchor size={48} className="text-sky-300 animate-bounce" />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3, duration: 1 }}
                      className="space-y-6"
                    >
                      <span className="text-sky-400 font-bold tracking-[0.3em] uppercase text-sm block">The Pinnacle of Sea Travel</span>
                      <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-bold font-serif leading-[0.85] tracking-tighter">
                          Grand <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-300 italic">Voyages</span>
                      </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-xl md:text-3xl text-sky-100/80 font-light max-w-3xl mx-auto leading-relaxed"
                    >
                        Where the horizon meets luxury. Experience tailored itineraries and five-star elegance on the world&apos;s finest oceans.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                    >
                      <Button size="xl" className="rounded-full px-16 bg-gradient-to-r from-sky-500 to-indigo-500 text-white hover:shadow-[0_0_40px_rgba(56,189,248,0.4)] border-none transition-all font-bold group">
                        Begin Your Odyssey
                        <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
                  <span className="text-sky-300/30 text-xs font-bold tracking-widest uppercase rotate-90 origin-left ml-4 mb-12">Discover More</span>
                  <div className="w-[1px] h-24 bg-gradient-to-t from-sky-400 to-transparent" />
                </div>
            </div>

            {/* Signature Experiences - Glassmorphism Grid */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-sky-900 to-transparent" />
                
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-4xl mx-auto mb-20 space-y-6">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="flex items-center justify-center gap-3 text-sky-400 mb-2"
                        >
                          <Gem size={20} />
                          <span className="font-black uppercase tracking-[0.2em] text-xs">Exclusivity Guaranteed</span>
                          <Gem size={20} />
                        </motion.div>
                        <h2 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
                            The Signature <span className="text-sky-300 italic">Experience</span>
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-light">
                            Beyond transportation, we offer a lifestyle. From the first pour of champagne to the final departure, every detail is orchestrated for your delight.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-[3rem] bg-white/5 backdrop-blur-md border border-white/10 hover:border-sky-500/50 hover:bg-white/10 transition-all duration-700 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-24 h-24 bg-sky-500/10 rounded-br-[4rem] group-hover:scale-150 transition-transform duration-700" />
                                <div className="relative z-10 space-y-6">
                                    <div className="w-16 h-16 bg-sky-500/20 rounded-2xl flex items-center justify-center text-sky-300 group-hover:bg-sky-500 group-hover:text-white transition-all duration-500">
                                        <item.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Voyages - Immersive List */}
            <section className="py-32 bg-[#060D17]">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-10">
                        <div className="space-y-6 max-w-2xl">
                            <h2 className="text-5xl md:text-6xl font-bold font-serif text-white">
                                Crafted <span className="text-sky-500">Itineraries</span>
                            </h2>
                            <p className="text-gray-400 text-lg">
                                Handpicked voyages that combine legendary ports with hidden gems only accessible by sea.
                            </p>
                        </div>
                        <Button variant="outline" className="rounded-full px-12 py-8 border-sky-900 text-sky-400 hover:bg-sky-900/30 hover:text-white transition-all font-bold">
                            View All Ships
                        </Button>
                    </div>

                    <div className="space-y-40">
                        {cruises.map((cruise, i) => (
                            <motion.div
                                key={cruise.title}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ margin: "-100px" }}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                                className={`flex flex-col lg:flex-row gap-16 lg:gap-32 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                            >
                                {/* Ship Visual */}
                                <div className="w-full lg:w-3/5 relative group">
                                    <div className="relative h-[550px] rounded-[4rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] transform transition-all duration-1000 group-hover:scale-[1.03]">
                                        <Image src={cruise.image} fill className="object-cover contrast-110 saturate-[1.1] transition-transform duration-[2000ms] group-hover:scale-110" alt={cruise.title} />
                                        
                                        {/* Overlay Content on Image */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                                        
                                        <div className="absolute top-10 left-10 flex gap-3">
                                          <div className="bg-sky-500/90 backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-black text-white uppercase tracking-widest flex items-center gap-2 shadow-2xl">
                                              <Sparkles size={14} /> {cruise.tag}
                                          </div>
                                          <div className="bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full text-xs font-black text-white uppercase tracking-widest border border-white/20">
                                              {cruise.duration}
                                          </div>
                                        </div>

                                        <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                                          <div className="bg-white/10 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10 max-w-[280px]">
                                            <div className="text-xs text-sky-300 font-bold uppercase tracking-widest mb-2">Ocean Fare</div>
                                            <div className="text-3xl font-bold text-white">{cruise.price}</div>
                                          </div>
                                        </div>
                                    </div>
                                    
                                    {/* Decorative Frame */}
                                    <div className={`absolute -z-10 top-12 ${i % 2 === 1 ? "-right-12" : "-left-12"} w-full h-full border border-sky-900/30 rounded-[4rem] pointer-events-none transform group-hover:rotate-3 transition-transform duration-1000`} />
                                </div>

                                {/* Text Content */}
                                <div className="w-full lg:w-2/5 space-y-10 text-left">
                                    <div className="space-y-4">
                                      <h3 className="text-4xl md:text-6xl font-bold font-serif text-white leading-tight">{cruise.title}</h3>
                                      <div className="flex items-center gap-4 text-sky-400 font-bold tracking-widest text-sm uppercase">
                                          <Compass size={22} className="animate-spin-slow" />
                                          <span>{cruise.route}</span>
                                      </div>
                                    </div>
                                    
                                    <p className="text-gray-400 text-xl font-light leading-relaxed">{cruise.desc}</p>

                                    <div className="grid grid-cols-2 gap-4">
                                        {cruise.ports.map(port => (
                                            <div key={port} className="bg-white/5 border border-white/5 p-4 rounded-2xl flex items-center gap-3 group/port cursor-default hover:bg-sky-500/10 hover:border-sky-500/30 transition-colors">
                                                <div className="w-2 h-2 rounded-full bg-sky-500" />
                                                <span className="text-white font-medium text-sm group-hover/port:text-sky-300 transition-colors">{port}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="pt-6">
                                      <Button size="xl" variant="outline" className="w-full rounded-full border-sky-500/30 text-white hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-all font-bold shadow-xl">
                                          Reserve Your Suite
                                      </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials - Signature Suite Experience */}
            <section className="py-40 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-[#060D17] to-[#04080F]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                  <div className="max-w-5xl mx-auto bg-white/5 backdrop-blur-2xl rounded-[5rem] p-16 md:p-32 border border-white/10 text-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[100px] -mr-48 -mt-48" />
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] -ml-48 -mb-48" />
                    
                    <Quote size={84} className="mx-auto text-sky-500/20 mb-12" />
                    
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <h2 className="text-3xl md:text-5xl font-serif font-light italic leading-snug mb-12">
                        &quot;Not just a cruise, but a seamless gateway to the world&apos;s wonders. The attention to detail on the Mediterranean Royal was simply unparalleled.&quot;
                      </h2>
                      <div className="space-y-2">
                        <div className="text-2xl font-bold tracking-tight">The Sterling Family</div>
                        <div className="text-sky-400 font-black uppercase tracking-widest text-xs">VVIP Platinum Members</div>
                      </div>
                      
                      <div className="flex justify-center gap-1 mt-10">
                        <Star size={20} className="fill-sky-500 text-sky-500" />
                        <Star size={20} className="fill-sky-500 text-sky-500" />
                        <Star size={20} className="fill-sky-500 text-sky-500" />
                        <Star size={20} className="fill-sky-500 text-sky-500" />
                        <Star size={20} className="fill-sky-500 text-sky-500" />
                      </div>
                    </motion.div>
                  </div>
                </div>
            </section>

            {/* CTA Final - The Horizon */}
            <section className="py-40 relative overflow-hidden text-center">
                <div className="container mx-auto px-4 max-w-4xl relative z-10 space-y-12">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.8 }}
                    >
                      <h2 className="text-5xl md:text-8xl font-bold font-serif mb-8">
                        The Sea is <br /><span className="italic text-sky-300">Calling.</span>
                      </h2>
                      <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-16 font-light">
                        Limited luxury suites available for our 2026 Season. Secure your place on the voyage of a lifetime.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                        <Button size="xl" className="rounded-full px-16 bg-white text-black hover:bg-sky-100 shadow-[0_0_50px_rgba(255,255,255,0.2)] font-black text-lg transition-all transform hover:scale-105">
                          Request a Quote
                        </Button>
                        <Link href="/contact" className="text-sky-400 font-bold hover:text-white transition-colors flex items-center gap-2 group underline-offset-8 hover:underline">
                          Speak with a Specialist <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                        </Link>
                      </div>
                    </motion.div>
                </div>
                
                {/* Background Text Effect */}
                <div className="absolute -bottom-1/4 left-0 w-full text-center pointer-events-none select-none overflow-hidden">
                  <span className="text-[20rem] font-black text-white/[0.02] tracking-tighter uppercase whitespace-nowrap">
                    HAPPY JOURNEY CRUISES
                  </span>
                </div>
            </section>

            {/* Custom Styles for extra flavor */}
            <style jsx global>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .animate-spin-slow {
                animation: spin-slow 8s linear infinite;
              }
            `}</style>
        </div>
    );
}
