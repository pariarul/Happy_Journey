"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, MapPin, Search } from "lucide-react";
import { Button } from "@/components/ui/Button";

const positions = [
    { title: "Travel Consultant", type: "Full-Time", loc: "New Delhi", desc: "Plan perfect itineraries & manage bookings." },
    { title: "Digital Marketing Lead", type: "Full-Time", loc: "Remote", desc: "Drive growth & manage social presence." },
    { title: "Customer Success Exec", type: "Full-Time", loc: "New Delhi", desc: "Ensure client happiness post-booking." },
];

export default function CareersPage() {
    return (
        <div className="bg-gradient-to-br from-indigo-50 to-blue-50 text-gray-900 min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-4 md:px-6 mb-20">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 space-y-6"
                    >
                        <span className="text-primary-blue font-bold tracking-wider text-sm uppercase">We're Hiring</span>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 tracking-tight leading-tight">
                            Build the Future of <br /><span className="text-secondary-sky">Travel</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed font-light mb-8">
                            Join a team of explorers, dreamers, and doers passionate about creating unforgettable journeys.
                        </p>
                        <div className="flex gap-4">
                            <Button size="lg" className="h-14 px-8 rounded-full shadow-lg shadow-blue-200">View Roles</Button>
                            <Button variant="outline" size="lg" className="h-14 px-8 rounded-full border-gray-300 text-gray-600 hover:bg-white hover:text-primary-blue">Life at HappyJourney</Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative h-[500px] rounded-[3rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-700 cursor-pointer"
                    >
                        <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000" fill className="object-cover" alt="Office Life" />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/80 to-transparent opacity-80 mix-blend-multiply"></div>
                        <div className="absolute bottom-10 left-10 text-white font-bold text-3xl font-heading">Passionate Team</div>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200">
                    <h2 className="text-3xl font-bold font-heading">Open Positions</h2>
                    <div className="text-gray-500 text-sm hidden md:block">3 roles available</div>
                </div>

                <div className="space-y-6">
                    {positions.map((jobs, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6 group"
                        >
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-blue transition-colors mb-2">{jobs.title}</h3>
                                <div className="flex items-center gap-4 text-gray-500 text-sm font-medium">
                                    <span className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-md text-gray-700"><Briefcase size={14} /> {jobs.type}</span>
                                    <span className="flex items-center gap-1 bg-gray-50 px-3 py-1 rounded-md text-gray-700"><MapPin size={14} /> {jobs.loc}</span>
                                </div>
                                <p className="text-gray-600 mt-4 max-w-xl line-clamp-2">{jobs.desc}</p>
                            </div>
                            <Button variant="outline" className="shrink-0 border-blue-100 text-primary-blue hover:bg-primary-blue hover:text-white rounded-full px-8 opacity-0 group-hover:opacity-100 transition-opacity">
                                Apply Now
                            </Button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20 bg-primary-blue text-white rounded-[2.5rem] p-12 relative overflow-hidden text-center md:text-left">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="bg-white/20 p-6 rounded-2xl backdrop-blur-sm">
                            <GraduationCap size={40} className="text-white" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold font-heading mb-2">Student Programs</h3>
                            <p className="text-blue-100 text-lg mb-6 max-w-2xl">Start your journey with our internship program designed for future leaders in travel & tourism.</p>
                            <Button className="bg-white text-primary-blue border-none rounded-full px-8 hover:bg-blue-50">Explore Internships</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
