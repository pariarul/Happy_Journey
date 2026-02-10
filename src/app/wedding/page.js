"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapPin, Heart, Music, Camera, Utensils, Users, CheckCircle2, ChevronDown, Calendar, Crown, Sun } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const weddingTypes = [
    {
        title: "Beach Weddings",
        destinations: ["Goa", "Kerala", "Bali"],
        desc: "Soft sands, ocean breeze, and sunset vows.",
        image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1000",
        icon: Sun
    },
    {
        title: "Royal Palace Weddings",
        destinations: ["Udaipur", "Jaipur", "Jodhpur"],
        desc: "A grand celebration in royal heritage locations.",
        image: "https://images.unsplash.com/photo-1598460627255-bfa36ba59203?q=80&w=1000",
        icon: Crown
    },
    {
        title: "Hill Station Weddings",
        destinations: ["Ooty", "Munnar", "Shimla"],
        desc: "Perfect for intimate weddings amidst nature.",
        image: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=1000",
        icon: MapPin
    },
    {
        title: "International Weddings",
        destinations: ["Thailand", "Dubai", "Sri Lanka"],
        desc: "Luxury weddings with global elegance.",
        image: "https://images.unsplash.com/photo-1519225421980-715cb0202128?q=80&w=1000",
        icon: Users // Generic icon for "world/people"
    }
];

const services = [
    { icon: MapPin, text: "Venue Selection" },
    { icon: Users, text: "Guest Management" },
    { icon: Music, text: "Entertainment" },
    { icon: Utensils, text: "Catering" },
    { icon: Camera, text: "Photography" },
    { icon: Heart, text: "Décor & Themes" },
];

export default function WeddingPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 100]);

    return (
        <div className="min-h-screen bg-rose-50/30 overflow-hidden">
            {/* Cinematic Hero */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2000"
                        alt="Wedding Hero"
                        fill
                        className="object-cover scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-rose-50/90"></div>
                </motion.div>

                <div className="relative z-10 text-center px-4 max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-white border border-rose-200/30 text-sm font-medium tracking-widest uppercase mb-6 shadow-lg">
                            Destination Weddings
                        </span>
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif text-white tracking-tight drop-shadow-lg leading-none">
                            Your Forever <br /><span className="italic font-light text-rose-100">Starts Here</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                        className="text-xl md:text-2xl text-rose-50 font-light max-w-2xl mx-auto leading-relaxed drop-shadow-md"
                    >
                        From royal palaces to serene beaches, we craft weddings that are as unique as your love story.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.8 }}
                        className="pt-8"
                    >
                        <Button size="lg" className="bg-white text-rose-500 hover:bg-rose-50 border-none px-10 h-16 rounded-full text-lg shadow-2xl transition-transform hover:scale-105">
                            Plan Your Dream Wedding
                        </Button>
                    </motion.div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70 animate-bounce">
                    <ChevronDown size={32} />
                </div>
            </section>

            {/* Wedding Types - Horizontal Scroll */}
            <section className="py-24 relative z-10 bg-white rounded-t-[3rem] -mt-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)]">
                <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
                    <span className="text-rose-400 font-medium tracking-widest text-sm uppercase mb-3 block">Choose Your Vibe</span>
                    <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900">Magical Settings</h2>
                </div>

                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {weddingTypes.map((type, index) => (
                            <motion.div
                                key={type.title}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                            >
                                <Image
                                    src={type.image}
                                    alt={type.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                                <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-md p-3 rounded-full text-white group-hover:bg-white group-hover:text-rose-500 transition-colors">
                                    <type.icon size={24} />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-2xl font-bold text-white mb-2 font-heading">{type.title}</h3>
                                    <p className="text-rose-100 text-sm mb-4 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{type.desc}</p>
                                    <div className="flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                        {type.destinations.map(dest => (
                                            <span key={dest} className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-medium border border-white/10">
                                                {dest}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services - Grid with Icon Backgrounds */}
            <section className="py-24 bg-rose-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="w-full md:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold font-serif text-gray-900 leading-tight">We Handle The Details <br /><span className="text-rose-500">You Enjoy The Moment</span></h2>
                            <p className="text-gray-600 text-lg leading-relaxed">Planning a destination wedding can be overwhelming. Our expert team manages everything end-to-end, so you can focus on what matters most—celebrating your love.</p>

                            <div className="grid grid-cols-2 gap-6 pt-4">
                                {services.map((s, i) => (
                                    <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-rose-100 hover:border-rose-300 transition-colors group">
                                        <div className="p-3 bg-rose-50 rounded-xl text-rose-500 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-300">
                                            <s.icon size={20} />
                                        </div>
                                        <span className="font-semibold text-gray-800">{s.text}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="mt-8 bg-rose-500 hover:bg-rose-600 text-white border-none h-14 px-8 rounded-full shadow-lg shadow-rose-200">
                                Talk to Our Wedding Planner
                            </Button>
                        </div>

                        <div className="w-full md:w-1/2 relative h-[600px]">
                            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-white rounded-[3rem] overflow-hidden shadow-2xl z-20 rotate-3 hover:rotate-0 transition-transform duration-700">
                                <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000" fill className="object-cover" alt="Wedding Couple" />
                            </div>
                            <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-rose-200 rounded-[3rem] overflow-hidden shadow-xl z-10 -rotate-3 hover:rotate-0 transition-transform duration-700">
                                <Image src="https://images.unsplash.com/photo-1532462283925-502a5fb121f6?q=80&w=1000" fill className="object-cover" alt="Wedding Decor" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 md:px-6">
                    <h2 className="text-3xl font-bold font-heading mb-16">Why HappyJourney?</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                        {[
                            { title: "Personalized Themes", desc: "Unique to your style", icon: Heart },
                            { title: "Transparent Pricing", desc: "No hidden costs", icon: CheckCircle2 },
                            { title: "Experienced Team", desc: "100+ Weddings Planned", icon: Crown },
                            { title: "Global Vendor Network", desc: "Best-in-class service", icon: Users }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center gap-4 group"
                            >
                                <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-rose-100">
                                    <item.icon size={32} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
