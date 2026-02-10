"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, MapPin, CheckCircle2, Search, ArrowRight, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";

const packages = [
    {
        id: 1,
        title: "Agra & Delhi Tour",
        category: "Domestic",
        duration: "4 Days / 3 Nights",
        places: ["Taj Mahal", "Red Fort", "India Gate"],
        price: "₹12,999",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000",
        idealFor: ["Family", "Couples", "Friends"],
        rating: 4.8
    },
    {
        id: 2,
        title: "Kerala Backwater Tour",
        category: "Domestic",
        duration: "5 Days / 4 Nights",
        places: ["Munnar", "Alleppey", "Cochin"],
        price: "₹18,500",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000",
        idealFor: ["Couples", "Nature Lovers"],
        rating: 4.9
    },
    {
        id: 3,
        title: "Dubai Luxury Tour",
        category: "International",
        duration: "4 Days / 3 Nights",
        places: ["Burj Khalifa", "Desert Safari", "Marina"],
        price: "₹45,000",
        image: "https://images.unsplash.com/photo-1512453979798-5ea932a235c9?q=80&w=1000",
        idealFor: ["Shopping", "Luxury"],
        rating: 4.7
    },
    {
        id: 4,
        title: "Andaman Island Escape",
        category: "Domestic",
        duration: "6 Days / 5 Nights",
        places: ["Havelock", "Neil Island", "Port Blair"],
        price: "₹25,000",
        image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1000",
        idealFor: ["Adventure", "Beach"],
        rating: 4.8
    },
    {
        id: 5,
        title: "Europe Highlights",
        category: "International",
        duration: "10 Days / 9 Nights",
        places: ["Paris", "Swiss Alps", "Rome"],
        price: "₹1,20,000",
        image: "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?q=80&w=1000",
        idealFor: ["Culture", "History"],
        rating: 5.0
    },
    {
        id: 6,
        title: "Bali Tropical Paradise",
        category: "International",
        duration: "5 Days / 4 Nights",
        places: ["Ubud", "Kuta", "Temples"],
        price: "₹35,000",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000",
        idealFor: ["Relaxation", "Culture"],
        rating: 4.6
    }
];

const filters = ["All", "Domestic", "International", "Pilgrimage", "Hill Stations", "Beach Holidays"];

export default function PackagesPage() {
    const [activeFilter, setActiveFilter] = useState("All");

    const filteredPackages = activeFilter === "All"
        ? packages
        : packages.filter(pkg => pkg.category === activeFilter || pkg.idealFor.includes(activeFilter));

    return (
        <div className="pt-24 pb-24 bg-gray-50/50 min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="text-secondary-sky font-medium tracking-widest text-sm uppercase mb-3 block">Discover The World</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-heading text-primary-blue mb-6">Our Exclusive Packages</h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        Embark on Extraordinary Journeys. Handpicked experiences for every kind of traveler.
                    </p>
                </motion.div>
            </div>

            {/* Filters */}
            <div className="container mx-auto px-4 md:px-6 mb-16">
                <div className="flex flex-wrap justify-center gap-4">
                    {filters.map((filter, i) => (
                        <motion.button
                            key={filter}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.05 }}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-sm hover:shadow-md ${activeFilter === filter
                                    ? "bg-primary-blue text-white shadow-blue-200"
                                    : "bg-white text-gray-600 hover:bg-gray-50 border border-gray-100"
                                }`}
                        >
                            {filter}
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Packages Grid */}
            <div className="container mx-auto px-4 md:px-6 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    <AnimatePresence mode="popLayout">
                        {filteredPackages.map((pkg) => (
                            <motion.div
                                layout
                                key={pkg.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group h-full"
                            >
                                <div className="h-full bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 flex flex-col">
                                    <div className="relative h-64 overflow-hidden">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary-blue shadow-lg flex items-center gap-1">
                                            <Star size={12} fill="currentColor" className="text-yellow-400" /> {pkg.rating}
                                        </div>
                                        <div className="absolute bottom-4 left-4">
                                            <span className="bg-primary-blue/90 backdrop-blur-md text-white px-3 py-1 rounded-lg text-xs font-medium tracking-wide uppercase">
                                                {pkg.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold font-heading text-gray-900 group-hover:text-primary-blue transition-colors">
                                                {pkg.title}
                                            </h3>
                                        </div>

                                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6 bg-gray-50 w-fit px-3 py-1 rounded-full border border-gray-100">
                                            <Clock size={16} className="text-secondary-sky" />
                                            <span>{pkg.duration}</span>
                                        </div>

                                        <div className="space-y-3 mb-8 flex-grow">
                                            <p className="text-sm font-semibold text-gray-900 flex items-center gap-2"><MapPin size={16} className="text-gray-400" /> Highlights</p>
                                            <div className="flex flex-wrap gap-2">
                                                {pkg.places.map(place => (
                                                    <span key={place} className="text-xs px-3 py-1.5 bg-gray-50 text-gray-600 rounded-lg border border-gray-100 group-hover:bg-blue-50 group-hover:text-primary-blue transition-colors">
                                                        {place}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 border-t border-gray-100 flex items-end justify-between mt-auto">
                                            <div>
                                                <span className="text-xs text-gray-400 font-medium uppercase tracking-wide block mb-1">Starting from</span>
                                                <span className="text-2xl font-bold text-primary-blue">{pkg.price}</span>
                                            </div>
                                            <Button size="sm" className="rounded-xl px-6 h-10 shadow-lg shadow-blue-100 group-hover:bg-primary-blue group-hover:text-white transition-all">
                                                View Details
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* No Results */}
                {filteredPackages.length === 0 && (
                    <div className="text-center py-24 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <Filter className="mx-auto h-16 w-16 text-gray-200 mb-6" />
                        <h3 className="text-xl font-bold text-gray-900 mb-2">No packages found</h3>
                        <p className="text-gray-500">Try selecting a different category or clear filters.</p>
                        <Button variant="outline" onClick={() => setActiveFilter("All")} className="mt-6">Clear All Filters</Button>
                    </div>
                )}
            </div>

            {/* CTA Section */}
            <div className="container mx-auto px-4 md:px-6">
                <div className="relative rounded-[3rem] overflow-hidden bg-gradient-to-br from-primary-blue via-blue-600 to-secondary-sky p-12 md:p-20 text-white shadow-2xl text-center">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-black/10 rounded-full blur-3xl -ml-20 -mb-20"></div>

                    <div className="relative z-10 space-y-8 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-5xl font-bold font-heading">Didn't Find What You're Looking For?</h2>
                        <p className="text-blue-100 text-xl font-light leading-relaxed">Let us design a trip just for you. Our experts will craft the perfect itinerary based on your preferences, budget, and dreams.</p>
                        <Button variant="secondary" size="lg" href="/contact" className="h-16 px-10 text-lg rounded-full shadow-xl bg-white text-primary-blue hover:bg-gray-50 border-none">
                            Request Custom Package <ArrowRight className="ml-2" />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
