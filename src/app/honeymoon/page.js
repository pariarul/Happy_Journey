"use client";

import React, { useState } from 'react';
import Image from "next/image";
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { 
    Heart, Sun, MapPin, Coffee, Utensils, 
    Waves, Camera, Bed, Sparkles, ArrowRight,
    Plane, ShieldCheck, Gem, Quote
} from "lucide-react";
import { Button } from "@/components/ui/Button";

const domesticDestinations = [
  { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000", desc: "Golden sands and Portuguese charm." },
  { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000", desc: "Emerald backwaters and spice-scented air." },
  { name: "Shimla", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000", desc: "Colonial echoes in the snowy peaks." },
  { name: "Kulu Manali", image: "https://images.unsplash.com/photo-1605649440417-0639e448375f?q=80&w=1000", desc: "Adventure and intimacy in high valleys." },
  { name: "Andaman", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1000", desc: "Isolated paradise with crystal shores." },
  { name: "Himachal", image: "https://images.unsplash.com/photo-1563820641013-05b10077df3c?q=80&w=1000", desc: "Land of gods and majestic mountains." },
  { name: "Munnar", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000", desc: "Velvet green tea gardens and mist." },
  { name: "Kodaikanal", image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc0b5b?q=80&w=1000", desc: "Romantic lakeside and pine forests." },
  { name: "Coorg", image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=1000", desc: "The misty hills and coffee estates." },
  { name: "Ooty", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000", desc: "Queen of hills and botanical wonders." },
  { name: "Kashmir", image: "https://images.unsplash.com/photo-1566833925222-d045c71e5820?q=80&w=1000", desc: "Alpine lakes and floating gardens." },
  { name: "Darjeeling", image: "https://images.unsplash.com/photo-1592323860589-913364ea4c6d?q=80&w=1000", desc: "Heritage trains and sunrise views." },
];

const internationalDestinations = [
  { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000", desc: "Azure waters and private villa life." },
  { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000", desc: "Spiritual sunsets and tropical luxury." },
  { name: "Mauritius", image: "https://images.unsplash.com/photo-1589979485637-259746f3910f?q=80&w=1000", desc: "Unmatched beaches and coral reefs." },
  { name: "Phuket", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000", desc: "Island hopping and exotic island life." },
  { name: "Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000", desc: "Crystal lakes and snowcapped dreams." },
  { name: "Seychelles", image: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1000", desc: "Hidden gems and unique island shapes." },
  { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000", desc: "Iconic romance and artistic charm." },
  { name: "Italy", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000", desc: "Rolling vineyards and historic cities." },
  { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000", desc: "Golden culture and serene island stays." },
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea932a235c9?q=80&w=1000", desc: "Futuristic luxury and desert magic." },
  { name: "Sri Lanka", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000", desc: "Lush wildlife and ancient heritage." },
  { name: "Singapore", image: "https://images.unsplash.com/photo-1525625239912-4ebca2d2cc78?q=80&w=1000", desc: "Urban gardens and modern sophistication." },
];

export default function HoneymoonPage() {
    const [activeTab, setActiveTab] = useState('domestic');
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 250]);
    const opacityHero = useTransform(scrollY, [0, 300], [1, 0]);

    const currentDestinations = activeTab === 'domestic' ? domesticDestinations : internationalDestinations;

    return (
        <div className="bg-[#fcf8f8] min-h-screen font-sans">
            {/* Hero Section - Immersive Parallax */}
            <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: y1, opacity: opacityHero }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2000"
                        alt="Honeymoon Hero"
                        fill
                        className="object-cover scale-110"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl space-y-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="mx-auto inline-flex items-center justify-center w-28 h-28 bg-white/10 backdrop-blur-xl rounded-full shadow-2xl border border-white/30 mb-6"
                    >
                        <Heart size={56} className="text-rose-300 fill-rose-300/40 animate-pulse" />
                    </motion.div>

                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 1 }}
                        className="text-6xl md:text-8xl lg:text-9xl font-bold font-serif leading-[0.9] drop-shadow-2xl"
                    >
                        Eternal <span className="text-rose-200 italic font-medium">Romance</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7, duration: 1 }}
                        className="text-xl md:text-2xl text-rose-50 font-light max-w-2xl mx-auto drop-shadow-md leading-relaxed"
                    >
                        Celebrate your new beginning in the world&apos;s most enchanting destinations, where every moment is a masterpiece.
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                    >
                      <Button size="xl" className="rounded-full px-12 bg-white text-rose-600 hover:bg-rose-50 shadow-2xl transition-all font-bold">
                        Let&apos;s Plan Your Dream
                      </Button>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
                  <div className="w-1 h-16 bg-gradient-to-t from-white to-transparent rounded-full" />
                </div>
            </div>

            {/* Experience Selection */}
            <section className="py-24 container mx-auto px-4 md:px-6 -mt-20 relative z-20">
                <div className="bg-white rounded-[4rem] p-12 md:p-20 shadow-[0_50px_100px_rgba(0,0,0,0.05)] border border-rose-50/50">
                    <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                        <span className="text-rose-500 font-bold uppercase tracking-widest text-sm">The Happy Journey Way</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
                            Crafting Your <span className="text-rose-400">Love Story</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                        {[
                            { icon: Coffee, title: "Breakfast in Bed", desc: "Gourmet delights served with a view." },
                            { icon: Sun, title: "Golden Sunsets", desc: "Private cruises on calm waters." },
                            { icon: Utensils, title: "Starlit Dinners", desc: "Candlelight dining on the sand." },
                            { icon: Camera, title: "Memories Captured", desc: "Professional couple photoshoots." }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group space-y-4"
                            >
                                <div className="mx-auto w-20 h-20 bg-rose-50 rounded-[2rem] flex items-center justify-center text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                                    <item.icon size={36} />
                                </div>
                                <h3 className="font-bold text-xl text-gray-900">{item.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* destination Selection - Interactive Tabs */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <h2 className="text-5xl md:text-6xl font-bold font-serif text-gray-900">
                                Discover Your <span className="text-rose-500">Perfect Spot</span>
                            </h2>
                            <p className="text-gray-500 text-lg">
                                Whether it&apos;s the mystical mountains of India or the crystal islands of the Pacific, find the backdrop for your forever.
                            </p>
                        </div>

                        {/* Tab Switcher */}
                        <div className="bg-gray-100 p-2 rounded-3xl flex relative">
                            <motion.div
                              className="absolute bg-white rounded-2xl h-[calc(100%-16px)] top-2 shadow-sm"
                              initial={false}
                              animate={{
                                left: activeTab === 'domestic' ? 8 : '50%',
                                width: 'calc(50% - 12px)'
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            <button
                                onClick={() => setActiveTab('domestic')}
                                className={`relative z-10 px-10 py-4 rounded-2xl text-sm font-black transition-colors duration-300 ${activeTab === 'domestic' ? 'text-rose-600' : 'text-gray-500'}`}
                            >
                                DOMESTIC
                            </button>
                            <button
                                onClick={() => setActiveTab('international')}
                                className={`relative z-10 px-10 py-4 rounded-2xl text-sm font-black transition-colors duration-300 ${activeTab === 'international' ? 'text-rose-600' : 'text-gray-500'}`}
                            >
                                INTERNATIONAL
                            </button>
                        </div>
                    </div>

                    <motion.div 
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        <AnimatePresence mode="popLayout">
                            {currentDestinations.map((dest, i) => (
                                <motion.div
                                    key={`${activeTab}-${dest.name}`}
                                    initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.9, y: 30 }}
                                    transition={{ duration: 0.5, delay: i * 0.05 }}
                                    className="group relative h-[450px] rounded-[3rem] overflow-hidden shadow-xl cursor-pointer"
                                >
                                    <Image
                                        src={dest.image}
                                        fill
                                        className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                        alt={dest.name}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                                    <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-2 rounded-2xl w-fit mb-4">
                                            <MapPin size={16} className="text-white" />
                                        </div>
                                        <h3 className="text-3xl font-bold font-serif text-white mb-2">{dest.name}</h3>
                                        <p className="text-white/80 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity">{dest.desc}</p>
                                        <Button 
                                            variant="outline" 
                                            className="w-full rounded-2xl border-white/50 text-white hover:bg-white hover:text-rose-600 font-bold"
                                        >
                                            Explore Details
                                        </Button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us - Dark Premium */}
            <section className="py-32 bg-[#0a0a0a] text-white relative overflow-hidden">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-rose-900/10 rounded-full blur-[150px]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-12">
                            <div className="space-y-6">
                                <h2 className="text-5xl md:text-6xl font-bold font-serif leading-tight">
                                    Our Secret to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-300">Perfect Beginnings</span>
                                </h2>
                                <p className="text-gray-400 text-lg leading-relaxed">
                                    We don&apos;t just book trips; we design chapters of your life story. Our honeymoon specialists are dedicated to ensuring your first trip as a couple is nothing short of legendary.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {[
                                    { icon: ShieldCheck, title: "Stress-Free Prep", desc: "We handle every logistics, while you enjoy the romance." },
                                    { icon: Gem, title: "Luxe Amenities", desc: "Upgrades and secret surprises at every destination." },
                                    { icon: Plane, title: "Seamless Transit", desc: "Private transfers and VIP lounge access globally." },
                                    { icon: Heart, title: "Personal Concierge", desc: "24/7 dedicated support for any spontaneous requests." }
                                ].map((feature, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="shrink-0 w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-rose-400 border border-white/10">
                                            <feature.icon size={24} />
                                        </div>
                                        <div className="space-y-2">
                                            <h4 className="font-bold text-xl">{feature.title}</h4>
                                            <p className="text-gray-500 text-sm">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-[4rem] overflow-hidden aspect-[4/5]">
                                <Image 
                                    src="https://images.unsplash.com/photo-1540339832862-437913ca01b7?q=80&w=1000" 
                                    fill 
                                    className="object-cover" 
                                    alt="Luxury Honeymoon"
                                />
                            </div>
                            {/* Floating Card */}
                            <motion.div 
                                initial={{ x: 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                className="absolute -bottom-10 -left-10 bg-white p-8 rounded-[3rem] shadow-2xl text-gray-900 max-w-xs space-y-4"
                            >
                                <Quote className="text-rose-500 scale-x-[-1]" />
                                <p className="italic font-medium text-lg leading-snug">&quot;The most magical 2 weeks of our lives. Happy Journey made everything feel effortless.&quot;</p>
                                <div>
                                    <div className="font-bold">Ariesha & Kunal</div>
                                    <div className="text-gray-500 text-sm uppercase tracking-widest font-bold">Maldives 2024</div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="py-40 text-center container mx-auto px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="space-y-12"
                >
                    <Heart size={64} className="mx-auto text-rose-300 animate-pulse fill-rose-300/20" />
                    <h2 className="text-5xl md:text-7xl font-bold font-serif text-gray-900 max-w-4xl mx-auto leading-tight">
                        Your Love Deserves <br /><span className="text-rose-500 italic">An Epic Start.</span>
                    </h2>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button size="xl" className="bg-rose-600 hover:bg-rose-700 text-white rounded-full px-16 shadow-2xl shadow-rose-200">
                            Book Your Dream Packages
                        </Button>
                        <Button variant="outline" size="xl" className="rounded-full px-16 border-rose-200 text-gray-600 hover:bg-rose-50">
                            Download Guide
                        </Button>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
