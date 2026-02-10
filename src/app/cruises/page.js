"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Anchor, Compass, Sun, MapPin, Fish, GlassWater, Umbrella, Calendar } from "lucide-react";
import { Button } from "@/components/ui/Button";

const cruises = [
    {
        title: "Mediterranean Luxury",
        route: "Barcelona - Rome - Athens",
        duration: "7 Nights",
        image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000",
        desc: "Explore the cradle of civilization in ultimate comfort.",
        ports: ["Barcelona", "Rome", "Athens", "Santorini"]
    },
    {
        title: "Caribbean Escape",
        route: "Miami - Bahamas - Cozumel",
        duration: "5 Nights",
        image: "https://images.unsplash.com/photo-1599640845513-534431836ea5?q=80&w=1000",
        desc: "Sun, sand, and turquoise waters await.",
        ports: ["Miami", "Nassau", "Cozumel", "Key West"]
    },
    {
        title: "Alaskan Adventure",
        route: "Seattle - Juneau - Glacier Bay",
        duration: "7 Nights",
        image: "https://images.unsplash.com/photo-1518182170546-07fb614d9313?q=80&w=1000",
        desc: "Witness majestic glaciers and wildlife.",
        ports: ["Seattle", "Juneau", "Skagway", "Ketchikan"]
    }
];

const features = [
    { icon: GlassWater, title: "All-Inclusive Dining", desc: "Savor gourmet meals & drinks." },
    { icon: Umbrella, title: "Shore Excursions", desc: "Curated experiences at every port." },
    { icon: Fish, title: "Ocean View Suites", desc: "Unmatched vistas from your room." },
    { icon: Sun, title: "Onboard Entertainment", desc: "Shows, casinos, and more." }
];

export default function CruisesPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className="bg-sky-50/50 min-h-screen overflow-hidden">
            {/* Hero */}
            <div className="relative h-[80vh] flex items-center justify-center overflow-hidden">
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1599640845513-534431836ea5?q=80&w=2000"
                        alt="Cruise Hero"
                        fill
                        className="object-cover brightness-75 scale-110"
                        priority
                    />
                </motion.div>

                <div className="relative z-10 text-center text-white px-4 max-w-5xl">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center mx-auto mb-8 border border-white/20">
                            <Anchor size={40} />
                        </div>
                        <h1 className="text-6xl md:text-8xl font-bold font-heading tracking-tighter drop-shadow-2xl">
                            Sail Into <br /><span className="text-sky-300">Luxury</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-sky-100 max-w-2xl mx-auto leading-relaxed font-light drop-shadow-md">
                            Experience the world from a new perspective. Majestic oceans, exotic ports, and unparalleled comfort.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-sky-50 to-transparent"></div>
            </div>

            {/* Intro & Features */}
            <div className="py-24 container mx-auto px-4 md:px-6 relative z-10 -mt-20">
                <div className="bg-white rounded-[3rem] p-12 shadow-2xl border border-sky-100/50">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold font-heading text-sky-900 mb-6">Why Cruise With Us?</h2>
                        <p className="text-gray-600 max-w-3xl mx-auto text-lg">From booking to boarding, we ensure a seamless voyage. Enjoy exclusive perks, upgrades, and personalized itineraries.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {features.map((f, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="text-center space-y-4 group"
                            >
                                <div className="mx-auto w-20 h-20 bg-sky-50 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center text-sky-500 shadow-sm">
                                    <f.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900">{f.title}</h3>
                                <p className="text-gray-500 leading-relaxed">{f.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Cruise Cards - Vertical List */}
            <div className="pb-24 container mx-auto px-4 md:px-6">
                <h2 className="text-4xl md:text-5xl font-bold font-heading text-sky-900 mb-16 text-center">Featured Voyages</h2>
                <div className="space-y-24">
                    {cruises.map((cruise, i) => (
                        <motion.div
                            key={cruise.title}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                        >
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]">
                                    <Image src={cruise.image} fill className="object-cover" alt={cruise.title} />
                                    <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold text-sky-600 shadow-lg flex items-center gap-2">
                                        <Calendar size={16} /> {cruise.duration}
                                    </div>
                                </div>
                                {/* Decorative Elements */}
                                <div className="absolute -z-10 top-10 -right-10 w-full h-full border-2 border-sky-200 rounded-[2.5rem]"></div>
                            </div>

                            <div className="w-full lg:w-1/2 space-y-8 text-left">
                                <h3 className="text-3xl md:text-5xl font-bold font-heading text-sky-900 leading-tight">{cruise.title}</h3>
                                <div className="flex items-center gap-3 text-sky-600 font-medium text-lg">
                                    <Compass size={24} />
                                    <span>{cruise.route}</span>
                                </div>
                                <p className="text-gray-600 text-lg leading-relaxed">{cruise.desc}</p>

                                <div className="bg-white p-6 rounded-2xl shadow-sm border border-sky-50">
                                    <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2"><MapPin size={18} className="text-sky-400" /> Key Ports of Call</h4>
                                    <div className="flex flex-wrap gap-3">
                                        {cruise.ports.map(port => (
                                            <span key={port} className="bg-sky-50 text-sky-700 px-4 py-2 rounded-lg text-sm font-medium">
                                                {port}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <Button size="lg" className="bg-sky-600 hover:bg-sky-700 text-white rounded-full px-10 h-14 shadow-lg shadow-sky-200 border-none">
                                    View Detailed Itinerary
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
