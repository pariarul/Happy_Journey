"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import LocationList from "@/components/packages/LocationList";

export default function PackagesPage() {
    return (
        <div className="pt-24 pb-24 bg-gray-50/50 min-h-screen">
            {/* Header */}
            <div className="container mx-auto px-4 md:px-6 mb-12 text-center">
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

            {/* Interactive Location List (Categories + Grid) */}
            <LocationList />

            {/* CTA Section */}
            <div className="container mx-auto px-4 md:px-6 mt-12">
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
