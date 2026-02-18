"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Compass, Globe, Sparkles, Map } from "lucide-react";
import { Button } from "@/components/ui/Button";
import LocationList from "@/components/packages/LocationList";
import Link from "next/link";

export default function PackagesPage() {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 150]);

    return (
        <div className="bg-[#f0f4f8] min-h-screen font-sans overflow-x-hidden">
            {/* Cinematic Hero */}
            <div className="relative h-[70vh] md:h-[80vh] flex items-center justify-center overflow-hidden bg-[#0A1128]">
                {/* Background Parallax and Overlays */}
                <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000')] bg-cover bg-center brightness-[0.35] contrast-125 scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1128]/50 to-[#f0f4f8]" />
                </motion.div>

                {/* Animated Decorative Elements */}
                <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none">
                    <motion.div 
                        animate={{ rotate: 360 }}
                        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-1/4 -left-1/4 w-[1000px] h-[1000px] border border-white/5 rounded-full"
                    />
                    <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] border border-white/5 rounded-full"
                    />
                </div>

                <div className="relative z-10 text-center text-white px-4 max-w-6xl space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-300 text-xs font-black uppercase tracking-[0.3em] mb-4">
                            <Globe size={14} className="animate-pulse" />
                            <span>Global Expeditions</span>
                        </div>
                        <h1 className="text-6xl md:text-9xl font-bold font-serif tracking-tighter leading-[0.85]">
                            Curated <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300 italic font-medium">Experiences</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-sky-100/70 max-w-3xl mx-auto leading-relaxed font-light">
                            From hidden mountain retreats to vibrant urban marvels, discover journeys designed to ignite your soul.
                        </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <Button size="xl" className="rounded-full px-12 bg-sky-500 hover:bg-sky-400 text-white shadow-[0_20px_40px_rgba(14,165,233,0.3)] border-none transition-all font-bold group">
                        Start Exploring
                        <ArrowRight size={20} className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                      </Button>
                    </motion.div>
                </div>
                
                {/* Floaties */}
                <motion.div 
                    animate={{ y: [0, -20, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 right-[15%] text-sky-400/20 hidden lg:block"
                >
                    <Compass size={120} strokeWidth={0.5} />
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 left-[10%] text-indigo-400/20 hidden lg:block"
                >
                    <Map size={100} strokeWidth={0.5} />
                </motion.div>
            </div>

            {/* Main Content - Categories & Grid */}
            <div className="relative z-10 -mt-24 pb-32">
                <LocationList />
            </div>

            {/* Premium CTA Section */}
            <div className="container mx-auto px-4 md:px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="relative rounded-[4rem] overflow-hidden bg-[#0A1128] p-12 md:p-24 text-white shadow-2xl text-center border border-white/5"
                >
                    {/* Decorative Background */}
                    <div className="absolute inset-0">
                        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-sky-500/20 via-transparent to-indigo-500/20" />
                        <div className="absolute inset-0 backdrop-blur-[2px]" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20" />
                    </div>

                    <div className="relative z-10 space-y-10 max-w-4xl mx-auto">
                        <div className="inline-flex items-center gap-3 text-sky-400 uppercase tracking-widest text-sm font-black mb-4">
                            <Sparkles size={20} />
                            <span>Tailor-Made Journeys</span>
                            <Sparkles size={20} />
                        </div>
                        <h2 className="text-5xl md:text-7xl font-bold font-serif leading-tight">Can&apos;t find your <span className="italic text-sky-300">perfect match?</span></h2>
                        <p className="text-sky-100/60 text-xl font-light leading-relaxed max-w-2xl mx-auto">
                            Our travel architects are ready to craft a one-of-a-kind itinerary that perfectly reflects your personal taste and budget.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
                            <Button size="xl" className="rounded-full px-12 bg-white text-black hover:bg-sky-50 shadow-2xl font-black text-lg transition-all transform hover:scale-105 border-none">
                                Request Custom Itinerary
                            </Button>
                            <Link href="/contact" className="text-sky-400 font-bold hover:text-white transition-colors flex items-center gap-2 group underline-offset-8 hover:underline italic">
                                Speak with an Expert <ArrowRight size={18} className="transform group-hover:translate-x-2 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
