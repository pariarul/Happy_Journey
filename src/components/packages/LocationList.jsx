"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Plane, Map } from "lucide-react";
import Image from "next/image";

const internationalPackages = [
    { id: 1, place: "Dubai", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1512453979798-5ea932a235c9?q=80&w=1000" },
    { id: 2, place: "Thailand", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000" },
    { id: 3, place: "Singapore", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000" },
    { id: 4, place: "Malaysia", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000" },
    { id: 5, place: "Maldives", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000" },
    { id: 6, place: "Bali", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000" },
    { id: 7, place: "Mauritius", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1544372990-25e40a1d605c?q=80&w=1000" },
    { id: 8, place: "Switzerland", duration: "7 Days / 6 Nights", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000" },
    { id: 9, place: "Europe", duration: "14 Days / 13 Nights", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1000" },
    { id: 10, place: "Vietnam & Cambodia", duration: "10 Days / 9 Nights", image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000" },
    { id: 11, place: "China", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000" },
    { id: 12, place: "Japan", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000" },
    { id: 13, place: "Cambodia", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000" },
    { id: 14, place: "Sri Lanka", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1588258524675-55d6560bc931?q=80&w=1000" },
    { id: 15, place: "Vietnam", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1000" },
    { id: 16, place: "Hong Kong", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1534349762230-e738198f3fa3?q=80&w=1000" },
    { id: 17, place: "Nepal", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1582845607311-2eb2eb4ba5e6?q=80&w=1000" },
    { id: 18, place: "Australia", duration: "13 Days / 12 Nights", image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?q=80&w=1000" },
    { id: 19, place: "Singapore & Kuala Lumpur", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1586720498701-09653894e634?q=80&w=1000" },
];

const domesticPackages = [
    { id: 1, place: "Ooty & Masinagudi", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1582239455799-73fb4b9713c7?q=80&w=1000" },
    { id: 2, place: "Coorg & Mysore & Bangalore", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1590445772390-333034981d7f?q=80&w=1000" },
    { id: 3, place: "Kodaikanal", duration: "2 Days / 1 Night", image: "https://images.unsplash.com/photo-1549643276-8e503ae0c7b4?q=80&w=1000" },
    { id: 4, place: "Munnar", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1629810452367-ffc2f5d962c6?q=80&w=1000" },
    { id: 5, place: "Wayanad", duration: "3 Days / 2 Nights", image: "https://images.unsplash.com/photo-1596328249627-ef31f13d8d69?q=80&w=1000" },
    { id: 6, place: "Varkala", duration: "3 Days / 2 Nights", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb79b1?q=80&w=1000" },
    { id: 8, place: "Vagamon", duration: "3 Days / 2 Nights", image: "https://images.unsplash.com/photo-1626082268759-e93570262194?q=80&w=1000" },
    { id: 9, place: "Yercaud", duration: "2 Days / 1 Night", image: "https://images.unsplash.com/photo-1606210123554-46c59508092f?q=80&w=1000" },
    { id: 10, place: "Goa", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000" },
    { id: 11, place: "Andaman", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1000" },
    { id: 12, place: "Lakshadweep", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1616744834898-35606d8848f9?q=80&w=1000" },
    { id: 13, place: "Agra & Delhi", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1000" },
    { id: 14, place: "Amritsar, Delhi, Agra & Jaipur", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1568288599427-14e3204975e5?q=80&w=1000" },
    { id: 15, place: "Jammu & Kashmir", duration: "7 Days / 6 Nights", image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&w=1000" },
    { id: 16, place: "Kullu Manali", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1593183569420-a6121f06f522?q=80&w=1000" },
    { id: 17, place: "Shimla, Manali & Delhi", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1562650578-18e3845b46e3?q=80&w=1000" },
    { id: 18, place: "Manali & Shimla", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1580584551108-7dfd42d3ad33?q=80&w=1000" },
    { id: 19, place: "Ladakh", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1000" },
    { id: 20, place: "Maharashtra", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1552596856-11f26f23ee97?q=80&w=1000" },
    { id: 21, place: "Lonavala & Mumbai", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1579969248231-c4d6f8393c83?q=80&w=1000" },
    { id: 22, place: "Allahabad, Varanasi & Ayodhya", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1561361513-35bdcd2576a2?q=80&w=1000" },
    { id: 23, place: "Ayodhya", duration: "3 Days / 2 Nights", image: "https://images.unsplash.com/photo-1634998705668-3e4ae05d761d?q=80&w=1000" },
    { id: 24, place: "Gangtok & Darjeeling", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1626017058864-1c2514d3f2ec?q=80&w=1000" },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.05
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function LocationList() {
    const [activeCategory, setActiveCategory] = useState("Domestic");

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 md:px-6">

                {/* Category Selection Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    {/* Domestic Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveCategory("Domestic")}
                        className={`relative h-64 rounded-[2rem] overflow-hidden cursor-pointer group shadow-xl transition-all duration-300 ${activeCategory === "Domestic" ? "ring-4 ring-primary-blue ring-offset-4" : "opacity-80 hover:opacity-100"}`}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1000"
                            alt="Domestic Tours"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <div className="flex items-center gap-2 mb-2 text-green-400">
                                <Map size={24} />
                                <span className="font-bold tracking-widest uppercase text-sm">Incredible India</span>
                            </div>
                            <h3 className="text-3xl font-bold font-heading">Domestic Packages</h3>
                        </div>
                        {activeCategory === 'Domestic' && (
                            <div className="absolute top-6 right-6 bg-white text-primary-blue p-2 rounded-full shadow-lg">
                                <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                            </div>
                        )}
                    </motion.div>

                    {/* International Card */}
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveCategory("International")}
                        className={`relative h-64 rounded-[2rem] overflow-hidden cursor-pointer group shadow-xl transition-all duration-300 ${activeCategory === "International" ? "ring-4 ring-primary-blue ring-offset-4" : "opacity-80 hover:opacity-100"}`}
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1504609773096-104ff10587bd?q=80&w=1000"
                            alt="International Tours"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute bottom-6 left-6 text-white">
                            <div className="flex items-center gap-2 mb-2 text-blue-400">
                                <Plane size={24} />
                                <span className="font-bold tracking-widest uppercase text-sm">World Wide</span>
                            </div>
                            <h3 className="text-3xl font-bold font-heading">International Packages</h3>
                        </div>
                        {activeCategory === 'International' && (
                            <div className="absolute top-6 right-6 bg-white text-primary-blue p-2 rounded-full shadow-lg">
                                <div className="w-3 h-3 bg-primary-blue rounded-full"></div>
                            </div>
                        )}
                    </motion.div>
                </div>

                {/* Package List Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-gray-50 rounded-[2.5rem] p-8 md:p-12 border border-gray-100 shadow-sm"
                    >
                        <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-200/60">
                            <div className={`p-4 rounded-2xl ${activeCategory === 'Domestic' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-primary-blue'}`}>
                                {activeCategory === 'Domestic' ? <Map size={32} /> : <Plane size={32} />}
                            </div>
                            <div>
                                <h3 className="text-3xl font-bold text-gray-900">{activeCategory} Destinations</h3>
                                <p className="text-gray-500 text-lg">
                                    {activeCategory === 'Domestic'
                                        ? "Explore the hidden gems and famous landmarks of India."
                                        : "Discover exotic locations and breathtaking views across the globe."}
                                </p>
                            </div>
                        </div>

                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                        >
                            {(activeCategory === 'Domestic' ? domesticPackages : internationalPackages).map((pkg) => (
                                <motion.div
                                    key={pkg.id}
                                    variants={item}
                                    className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-blue-200 transition-all duration-500 flex flex-col hover:-translate-y-2"
                                >
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={pkg.image}
                                            alt={pkg.place}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                        <div className="absolute bottom-3 left-3 right-3 text-white">
                                            <h4 className="text-lg font-bold font-heading line-clamp-1 group-hover:text-white transition-colors">
                                                {pkg.place}
                                            </h4>
                                        </div>
                                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold text-primary-blue shadow-lg">
                                            #{pkg.id}
                                        </div>
                                    </div>

                                    <div className="p-4 flex items-center justify-between bg-white relative z-10">
                                        <div className="flex items-center gap-2 text-xs font-medium text-gray-500 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-100 group-hover:bg-blue-50 group-hover:text-primary-blue transition-colors">
                                            <Calendar size={14} className="text-secondary-sky" />
                                            {pkg.duration}
                                        </div>
                                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-primary-blue group-hover:text-white transition-all duration-300">
                                            <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            </div>
        </section>
    );
}
