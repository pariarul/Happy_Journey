"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Heart, Sun, MapPin, Coffee, Utensils, Waves, Camera, Bed } from "lucide-react";
import { Button } from "@/components/ui/Button";

const destinations = [
    { name: "Maldives", image: "https://images.unsplash.com/photo-1544550581-5f7ceaf7f992?q=80&w=1000", desc: "Private island resorts and crystal clear lagoons.", icon: Waves },
    { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000", desc: "Tropical forests, ancient temples, and serene beaches.", icon: Sun },
    { name: "Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000", desc: "Snow-capped peaks, alpine meadows, and romance.", icon: Bed },
    { name: "Kashmir", image: "https://images.unsplash.com/photo-1566837945700-30057527ade0?q=80&w=1000", desc: "The paradise on earth with stunning valleys and lakes.", icon: Camera },
];

export default function HoneymoonPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 800], [0, 250]);

    return (
        <div className="bg-gradient-to-br from-rose-50/50 to-pink-50/50 min-h-screen">
            {/* Hero */}
            <div className="relative h-[90vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=2000"
                        alt="Honeymoon Hero"
                        fill
                        className="object-cover scale-110 blur-[1px]"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
                    <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-rose-50 to-transparent"></div>
                </motion.div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center justify-center w-24 h-24 bg-white/10 backdrop-blur-md rounded-full shadow-lg border border-white/20 mb-8"
                    >
                        <Heart size={48} className="text-rose-300 fill-rose-300/20" />
                    </motion.div>

                    <h1 className="text-6xl md:text-8xl font-bold font-serif leading-none drop-shadow-2xl">
                        Love in <br /><span className="text-rose-200 italic">Paradise</span>
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="text-xl md:text-2xl text-rose-50 font-light max-w-xl mx-auto drop-shadow-md leading-relaxed"
                    >
                        Handpicked romantic escapes designed to celebrate your new beginning.
                    </motion.p>
                </div>
            </div>

            {/* Intro */}
            <div className="container mx-auto px-4 md:px-6 relative z-10 -mt-32">
                <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl space-y-12 text-center max-w-5xl mx-auto transform hover:-translate-y-2 transition-transform duration-500">
                    <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900 leading-tight">
                        Every Detail, <br /><span className="text-rose-500">Curated for Romance</span>
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { icon: Coffee, label: "Romantic Dinners" },
                            { icon: Sun, label: "Sunset Cruises" },
                            { icon: MapPin, label: "Private Tours" },
                            { icon: Utensils, label: "Couple Spa" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center gap-4 text-gray-600 hover:text-rose-500 transition-colors"
                            >
                                <item.icon size={32} />
                                <span className="font-medium">{item.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Destinations - Staggered Grid */}
            <div className="py-24 container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
                    {destinations.map((dest, i) => (
                        <motion.div
                            key={dest.name}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1, duration: 0.6 }}
                            className={`${i % 2 === 1 ? "lg:translate-y-24" : ""} group relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer`}
                        >
                            <Image
                                src={dest.image}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[10%] group-hover:grayscale-0"
                                alt={dest.name}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                            <div className="absolute top-8 right-8 bg-white/10 backdrop-blur-md p-4 rounded-full text-white border border-white/20">
                                <dest.icon size={28} />
                            </div>

                            <div className="absolute bottom-0 left-0 right-0 p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-4xl font-bold font-serif text-white mb-3">{dest.name}</h3>
                                <p className="text-rose-100/90 text-lg mb-6 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100">{dest.desc}</p>
                                <Button variant="outline" className="rounded-full px-8 border-white text-white hover:bg-white hover:text-rose-500 opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                                    View Packages
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Quote/CTA */}
            <div className="py-32 text-center container mx-auto px-4 md:px-6">
                <Heart size={48} className="mx-auto text-rose-300 mb-8 animate-pulse" />
                <h2 className="text-4xl md:text-6xl font-bold font-serif text-gray-900 mb-12 max-w-4xl mx-auto leading-tight">
                    "To love and be loved is to feel the sun from both sides."
                </h2>
                <Button size="lg" className="bg-rose-500 hover:bg-rose-600 text-white border-none rounded-full h-16 px-12 text-lg shadow-xl shadow-rose-200 hover:scale-105 transition-transform">
                    Start Your Journey
                </Button>
            </div>
        </div>
    );
}
