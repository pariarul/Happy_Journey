"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, ArrowRight, Plane, Map, Star, Globe, Sparkles } from "lucide-react";


const internationalPackages = [
  { id: 1, place: "Dubai", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=1000", rating: 4.8 },

  { id: 2, place: "Thailand", duration: "4 Days / 3 Nights", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000", rating: 4.7 },

  { id: 3, place: "Singapore", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1496939376851-89342e90adcd?q=80&w=1000", rating: 4.9 },

  { id: 4, place: "Malaysia", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=1000", rating: 4.6 },

  { id: 5, place: "Maldives", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000", rating: 5.0 },

  { id: 6, place: "Bali", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000", rating: 4.8 },

  { id: 7, place: "Mauritius", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000", rating: 4.7 },

  { id: 8, place: "Switzerland", duration: "7 Days / 6 Nights", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000", rating: 4.9 },

  { id: 9, place: "Europe", duration: "14 Days / 13 Nights", image: "https://images.unsplash.com/photo-1519677100203-a0e668c92439?q=80&w=1000", rating: 4.9 },

  { id: 10, place: "Vietnam & Cambodia", duration: "10 Days / 9 Nights", image: "https://images.unsplash.com/photo-1583417319070-4a69db38a482?q=80&w=1000", rating: 4.6 },

  { id: 11, place: "China", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000", rating: 4.4 },

  { id: 12, place: "Japan", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000", rating: 4.9 },

  { id: 13, place: "Cambodia", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1528127269322-539801943592?q=80&w=1000", rating: 4.5 },

  { id: 14, place: "Sri Lanka", duration: "5 Days / 4 Nights", image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=1000&auto=format&fit=crop", rating: 4.6 },

  { id: 15, place: "Vietnam", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1559592413-7cec4d0cae2b?q=80&w=1000", rating: 4.7 },

  { id: 16, place: "Hong Kong", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?q=80&w=1000", rating: 4.5 },

  { id: 17, place: "Nepal", duration: "6 Days / 5 Nights", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000", rating: 4.7 },

  { id: 18, place: "Australia", duration: "13 Days / 12 Nights", image: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?q=80&w=1000", rating: 4.8 },

  { id: 19, place: "Singapore & Kuala Lumpur", duration: "6 Days / 5 Nights",  image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=1000", rating: 4.7 },
];

const domesticPackages = [
{ id: 1, place: "Ooty & Masinagudi", duration: "4 Days / 3 Nights", image: "https://picsum.photos/seed/ooty-hills-tea/1000/700", rating: 4.6 },

{ id: 2, place: "Coorg & Mysore", duration: "5 Days / 4 Nights", image: "https://picsum.photos/seed/coorg-coffee-estate/1000/700", rating: 4.7 },

{ id: 3, place: "Kodaikanal", duration: "2 Days / 1 Night", image: "https://picsum.photos/seed/kodaikanal-lake-mist/1000/700", rating: 4.5 },

{ id: 4, place: "Munnar", duration: "4 Days / 3 Nights", image: "https://picsum.photos/seed/munnar-tea-gardens/1000/700", rating: 4.8 },

{ id: 5, place: "Wayanad", duration: "3 Days / 2 Nights", image: "https://picsum.photos/seed/wayanad-forest-waterfall/1000/700", rating: 4.6 },

{ id: 6, place: "Varkala", duration: "3 Days / 2 Nights", image: "https://picsum.photos/seed/varkala-cliff-beach/1000/700", rating: 4.7 },

{ id: 7, place: "Vagamon", duration: "3 Days / 2 Nights", image: "https://picsum.photos/seed/vagamon-meadows/1000/700", rating: 4.4 },

{ id: 8, place: "Yercaud", duration: "2 Days / 1 Night", image: "https://picsum.photos/seed/yercaud-hills-lake/1000/700", rating: 4.3 },

{ id: 9, place: "Goa", duration: "5 Days / 4 Nights", image: "https://picsum.photos/seed/goa-beach-sunset/1000/700", rating: 4.9 },

{ id: 10, place: "Andaman", duration: "6 Days / 5 Nights", image: "https://picsum.photos/seed/andaman-island-bluewater/1000/700", rating: 5.0 },

{ id: 11, place: "Lakshadweep", duration: "4 Days / 3 Nights", image: "https://picsum.photos/seed/lakshadweep-lagoon/1000/700", rating: 4.8 },

{ id: 12, place: "Agra & Delhi", duration: "4 Days / 3 Nights", image: "https://picsum.photos/seed/tajmahal-delhi-monument/1000/700", rating: 4.7 },

{ id: 13, place: "Rajasthan Grand", duration: "5 Days / 4 Nights", image: "https://picsum.photos/seed/rajasthan-palace-desert/1000/700", rating: 4.8 },

{ id: 14, place: "Jammu & Kashmir", duration: "7 Days / 6 Nights", image: "https://picsum.photos/seed/kashmir-snow-mountains/1000/700", rating: 4.9 },

{ id: 15, place: "Kullu Manali", duration: "5 Days / 4 Nights", image: "https://picsum.photos/seed/manali-snow-mountains/1000/700", rating: 4.7 },

{ id: 16, place: "Shimla & Manali", duration: "6 Days / 5 Nights", image: "https://picsum.photos/seed/shimla-hillstation/1000/700", rating: 4.7 },

{ id: 17, place: "Manali & Shimla", duration: "6 Days / 5 Nights", image: "https://picsum.photos/seed/himachal-mountains/1000/700", rating: 4.6 },

{ id: 18, place: "Ladakh", duration: "5 Days / 4 Nights", image: "https://picsum.photos/seed/ladakh-mountains-lake/1000/700", rating: 4.9 },

{ id: 19, place: "Maharashtra", duration: "6 Days / 5 Nights", image: "https://picsum.photos/seed/maharashtra-fort-hills/1000/700", rating: 4.4 },

{ id: 20, place: "Mumbai & Lonavala", duration: "4 Days / 3 Nights", image: "https://picsum.photos/seed/mumbai-city-lonavala/1000/700", rating: 4.5 },

{ id: 21, place: "Ancient Varanasi", duration: "5 Days / 4 Nights", image: "https://picsum.photos/seed/varanasi-ghats/1000/700", rating: 4.8 },

{ id: 22, place: "Ayodhya", duration: "3 Days / 2 Nights", image: "https://picsum.photos/seed/ayodhya-temple/1000/700", rating: 4.7 },

{ id: 23, place: "Gangtok & Darjeeling", duration: "5 Days / 4 Nights", image: "https://picsum.photos/seed/darjeeling-tea-hills/1000/700", rating: 4.6 }
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
};

export default function LocationList() {
    const [activeCategory, setActiveCategory] = useState("Domestic");

    return (
        <section className="py-20 relative px-4 md:px-0">
            <div className="container mx-auto">
                
                {/* Sophisticated Category Selector */}
                <div className="flex flex-col md:flex-row items-center justify-between mb-20 gap-8">
                    <div className="space-y-4 text-left">
                        <motion.div 
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          className="flex items-center gap-2 text-sky-500 font-black uppercase tracking-[0.2em] text-xs"
                        >
                          
                          <span>Filter Your Adventure</span>
                        </motion.div>
                        <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#0A1128]">
                            Choose Your <span className="text-sky-500 italic">Realm</span>
                        </h2>
                    </div>

                    <div className="flex p-2 bg-white rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.05)] border border-gray-100">
                        <button
                          onClick={() => setActiveCategory("Domestic")}
                          className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-all duration-500 ${activeCategory === "Domestic" ? "bg-[#0A1128] text-white shadow-xl" : "text-gray-400 hover:text-[#0A1128]"}`}
                        >
                          <Map size={18} />
                          <span>Domestic</span>
                        </button>
                        <button
                          onClick={() => setActiveCategory("International")}
                          className={`flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold transition-all duration-500 ${activeCategory === "International" ? "bg-[#0A1128] text-white shadow-xl" : "text-gray-400 hover:text-[#0A1128]"}`}
                        >
                          <Plane size={18} />
                          <span>International</span>
                        </button>
                    </div>
                </div>

                {/* Package Grid Display */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeCategory}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40, scale: 0.95 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="space-y-16"
                    >
                        {/* Summary Bar */}
                        <div className="flex flex-col md:flex-row items-center justify-between bg-white/40 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/60 shadow-lg gap-6">
                            <div className="flex items-center gap-6">
                                <div className={`p-5 rounded-2xl ${activeCategory === 'Domestic' ? 'bg-indigo-500 text-white shadow-[0_10px_20px_rgba(99,102,241,0.3)]' : 'bg-sky-500 text-white shadow-[0_10px_20px_rgba(14,165,233,0.3)]'}`}>
                                    {activeCategory === 'Domestic' ? <Globe size={36} className="animate-pulse" /> : <Plane size={36} className="animate-spin-slow" />}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-2xl font-bold text-[#0A1128]">{activeCategory} Collections</h3>
                                    <p className="text-gray-500 font-medium">
                                        {activeCategory === 'Domestic'
                                            ? "Explore the vast beauty of the Indian subcontinent."
                                            : "Global wonders awaiting your discovery."}
                                    </p>
                                </div>
                            </div>
                            <div className="hidden lg:flex items-center gap-12 text-center border-l border-gray-200 pl-12">
                                <div>
                                    <div className="text-2xl font-black text-[#0A1128]">{activeCategory === 'Domestic' ? domesticPackages.length : internationalPackages.length}</div>
                                    <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">Destinations</div>
                                </div>
                                <div>
                                    <div className="text-2xl font-black text-sky-500">4.8/5</div>
                                    <div className="text-xs uppercase font-bold text-gray-400 tracking-widest">Avg Rating</div>
                                </div>
                            </div>
                        </div>

                        {/* The Responsive Grid */}
                        <motion.div
                            variants={container}
                            initial="hidden"
                            animate="show"
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10"
                        >
                            {(activeCategory === 'Domestic' ? domesticPackages : internationalPackages).map((pkg) => (
                                <motion.div
                                    key={pkg.id}
                                    variants={item}
                                    className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl hover:shadow-[0_30px_60px_rgba(0,0,0,0.1)] transition-all duration-700 flex flex-col border border-gray-100/50"
                                >
                                    {/* Image with Parallax-like effect */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={pkg.image}
                                            alt={pkg.place}
                                            className="object-cover transition-transform duration-[1500ms] group-hover:scale-125"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-700"></div>
                                        
                                        {/* Top Badge */}
                                        <div className="absolute top-5 left-5 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black text-white uppercase tracking-[0.2em] border border-white/30">
                                            {activeCategory}
                                        </div>

                                        {/* Rating Badge */}
                                        <div className="absolute top-5 right-5 bg-[#0A1128]/80 backdrop-blur-md px-3 py-1.5 rounded-2xl flex items-center gap-1 text-[11px] font-black text-sky-300 shadow-xl border border-sky-900/50">
                                            <Star size={12} className="fill-sky-400 text-sky-400" />
                                            {pkg.rating}
                                        </div>

                                        <div className="absolute bottom-6 left-6 right-6">
                                            <h4 className="text-2xl font-bold font-serif text-white mb-2 transform group-hover:-translate-y-1 transition-transform duration-500">
                                                {pkg.place}
                                            </h4>
                                            <div className="flex items-center gap-2 text-white/70 text-xs font-medium">
                                              <MapPin size={12} className="text-sky-400" />
                                              <span className="tracking-wide">Multiple Sightseeing points</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Details Bar */}
                                    <div className="p-6 bg-white flex flex-col gap-6 relative z-10 flex-grow">
                                        <div className="flex items-center justify-between">
                                            <div className="flex flex-col">
                                                <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Starting from</span>
                                                <span className="text-xl font-black text-[#0A1128]">{pkg.price}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-xs font-black text-sky-600 bg-sky-50 px-4 py-2 rounded-2xl border border-sky-100 group-hover:bg-sky-500 group-hover:text-white group-hover:border-sky-500 transition-all duration-500">
                                                <Calendar size={14} />
                                                {pkg.duration}
                                            </div>
                                        </div>

                                        <div className="h-[1px] w-full bg-gray-100 group-hover:bg-sky-100 transition-colors" />

                                        <button className="flex items-center justify-center gap-3 w-full py-4 rounded-2xl bg-[#f0f9ff] text-[#0A1128] font-black text-sm uppercase tracking-widest hover:bg-[#0A1128] hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-lg">
                                            View Details
                                            <ArrowRight size={16} className="transform group-hover:translate-x-2 transition-transform" />
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </AnimatePresence>

            </div>

            {/* Custom Animations */}
            <style jsx global>{`
              @keyframes spin-slow {
                from { transform: rotate(0deg); }
                to { transform: rotate(360deg); }
              }
              .animate-spin-slow {
                animation: spin-slow 12s linear infinite;
              }
            `}</style>
        </section>
    );
}
