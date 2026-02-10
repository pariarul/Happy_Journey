"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Globe, Users, Trophy, MapPin, Target, Sparkles, Smile, Shield } from "lucide-react";
import { Button } from "@/components/ui/Button";

const stats = [
    { value: "15+", label: "Years Experience", icon: Shield },
    { value: "10k+", label: "Happy Travelers", icon: Smile },
    { value: "50+", label: "Destinations", icon: MapPin },
    { value: "24/7", label: "Support", icon: Users }
];

export default function AboutPage() {
    return (
        <div className="pt-[72px] min-h-screen bg-white overflow-hidden">
            {/* Hero Section */}
            <div className="relative h-[60vh] flex items-center justify-center">
                <Image
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000"
                    alt="About Hero"
                    fill
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 text-center text-white px-4 max-w-4xl"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-sm font-medium tracking-widest mb-4 uppercase">Our Story</span>
                    <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight">We Create <span className="text-secondary-sky">Lifelong Memories</span></h1>
                    <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
                        HappyJourney is more than just a travel agency; we are architects of dreams, crafting perfect getaways since 2008.
                    </p>
                </motion.div>
            </div>

            {/* Vision & Mission - Grid Layout with Images */}
            <div className="py-24 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700"
                        >
                            <Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000" fill className="object-cover" alt="Travel" />
                            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
                                <div className="text-white font-heading text-2xl font-bold">Wanderlust since 2008</div>
                            </div>
                        </motion.div>
                        <div className="space-y-8">
                            <div className="flex items-start gap-6">
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-primary-blue border border-gray-100">
                                    <Target size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Our Vision</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">To be India’s most loved premium travel brand, setting new standards in luxury, reliability, and customer satisfaction across the globe.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-6">
                                <div className="bg-white p-4 rounded-2xl shadow-sm text-secondary-sky border border-gray-100">
                                    <Sparkles size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-heading text-gray-900 mb-2">Our Mission</h3>
                                    <p className="text-gray-600 leading-relaxed text-lg">To deliver safe, luxurious, and affordable travel experiences that cater to the unique desires of every traveler, creating stories worth sharing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats - Floating Cards */}
            <div className="container mx-auto px-4 md:px-6 py-24">
                <div className="relative">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[300px] bg-gradient-to-r from-blue-50 to-cyan-50 rounded-[4rem] -z-10 rotate-3"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="flex flex-col items-center bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300"
                            >
                                <div className="mb-4 text-primary-blue bg-blue-50 p-4 rounded-full">
                                    <stat.icon size={32} />
                                </div>
                                <span className="text-4xl md:text-5xl font-bold font-heading text-gray-900 mb-2">{stat.value}</span>
                                <span className="text-gray-500 text-sm md:text-base uppercase tracking-wider font-medium">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team CTA */}
            <div className="pb-24 pt-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="relative rounded-[3rem] overflow-hidden min-h-[500px] flex items-center justify-center shadow-2xl group">
                        <Image
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070"
                            alt="Team"
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-primary-blue/90 mix-blend-multiply opacity-90 group-hover:opacity-80 transition-opacity duration-500"></div>

                        <div className="relative z-10 text-center text-white space-y-8 p-8 max-w-3xl">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading">Join Our Passionate Team</h2>
                            <p className="text-xl text-blue-100 leading-relaxed font-light">
                                We are always looking for travel enthusiasts, dreamers, and doers to join us in crafting beautiful journeys for the world.
                            </p>
                            <div className="flex gap-4 justify-center pt-4">
                                <Button href="/careers" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue h-14 px-8 text-lg rounded-full">
                                    View Open Positions
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
