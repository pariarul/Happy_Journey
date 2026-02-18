"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Heart, MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const domesticDestinations = [
  { name: "Goa", image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1000", desc: "Sun-kissed beaches & vibrant nightlife." },
  { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000", desc: "Serene backwaters & lush greenery." },
  { name: "Shimla", image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1000", desc: "Quaint colonial charm & mountain peaks." },
  { name: "Kulu Manali", image: "https://images.unsplash.com/photo-1605649440417-0639e448375f?q=80&w=1000", desc: "Adventure and romance in the Himalayas." },
  { name: "Andaman", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1000", desc: "Crystal clear waters & exotic islands." },
  { name: "Himachal", image: "https://images.unsplash.com/photo-1563820641013-05b10077df3c?q=80&w=1000", desc: "Majestic mountains & peaceful valleys." },
  { name: "Munnar", image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=1000", desc: "Rolling tea plantations & misty hills." },
  { name: "Kodaikanal", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000", desc: "Princess of Hill Stations." },
  { name: "Coorg", image: "https://images.unsplash.com/photo-1580137189272-c9379f8864fd?q=80&w=1000", desc: "Scotland of India & coffee estates." },
  { name: "Ooty", image: "https://images.unsplash.com/photo-1590050752117-23a9d7fc0b5b?q=80&w=1000", desc: "Queen of Hill Stations." },
  { name: "Kashmir", image: "https://images.unsplash.com/photo-1566833925222-d045c71e5820?q=80&w=1000", desc: "Paradise on Earth." },
  { name: "Darjeeling", image: "https://images.unsplash.com/photo-1592323860589-913364ea4c6d?q=80&w=1000", desc: "Tea gardens & views of Kanchenjunga." },
];

const internationalDestinations = [
  { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000", desc: "Overwater bungalows & turquoise lagoons." },
  { name: "Bali", image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1000", desc: "Spiritual retreats & tropical paradise." },
  { name: "Mauritius", image: "https://images.unsplash.com/photo-1589979485637-259746f3910f?q=80&w=1000", desc: "Sapphire-blue waters & white sandy beaches." },
  { name: "Phuket", image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?q=80&w=1000", desc: "Vibrant nightlife & stunning bays." },
  { name: "Switzerland", image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1000", desc: "Alpine magic & scenic train rides." },
  { name: "Seychelles", image: "https://images.unsplash.com/photo-1531737212413-667205e1cda7?q=80&w=1000", desc: "Untouched islands & unique biodiversity." },
  { name: "Paris", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1000", desc: "The City of Love & lights." },
  { name: "Italy", image: "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?q=80&w=1000", desc: "Romantic canals & historic landscapes." },
  { name: "Thailand", image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1000", desc: "Golden temples & tropical hospitality." },
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea932a235c9?q=80&w=1000", desc: "Modern luxury & desert adventures." },
  { name: "Sri Lanka", image: "https://images.unsplash.com/photo-1546708973-b339540b5162?q=80&w=1000", desc: "Teardrop of India & diverse landscapes." },
  { name: "Singapore", image: "https://images.unsplash.com/photo-1525625239912-4ebca2d2cc78?q=80&w=1000", desc: "Futuristic gardens & urban marvels." },
];

const HoneymoonDestinations = () => {
  const [activeTab, setActiveTab] = useState('domestic');

  const currentDestinations = activeTab === 'domestic' ? domesticDestinations : internationalDestinations;

  return (
    <section className="py-24 bg-[#f8faff] relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full -mr-64 -mt-64 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-100/50 rounded-full -ml-64 -mb-64 blur-3xl opacity-50" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-2"
          >
            <Sparkles className="text-blue-500 w-5 h-5" />
            <span className="text-blue-600 font-semibold tracking-widest uppercase text-sm">Romantic Escapes</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-gray-900 leading-tight"
          >
            Unforgettable <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Honeymoon</span> Memories
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg md:text-xl"
          >
            Handpicked romantic destinations chosen with love, to start your forever journey.
          </motion.p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-16">
          <div className="bg-white p-1.5 rounded-full shadow-xl border border-blue-50 relative flex">
            <motion.div
              className="absolute bg-blue-600 rounded-full h-[calc(100%-12px)] top-1.5"
              initial={false}
              animate={{
                left: activeTab === 'domestic' ? 6 : '50%',
                width: 'calc(50% - 9px)'
              }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
            <button
              onClick={() => setActiveTab('domestic')}
              className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${activeTab === 'domestic' ? 'text-white' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Domestic
            </button>
            <button
              onClick={() => setActiveTab('international')}
              className={`relative z-10 px-10 py-3 rounded-full text-sm font-bold transition-colors duration-300 ${activeTab === 'international' ? 'text-white' : 'text-gray-500 hover:text-gray-800'}`}
            >
              International
            </button>
          </div>
        </div>

        {/* destinations Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {currentDestinations.map((dest, index) => (
              <motion.div
                key={`${activeTab}-${dest.name}`}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative h-[380px] rounded-[2.5rem] overflow-hidden shadow-2xl cursor-pointer"
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="p-2 rounded-xl bg-white/20 backdrop-blur-md border border-white/30 text-white">
                        <MapPin size={16} />
                      </div>
                      <h3 className="text-2xl font-bold text-white tracking-wide">{dest.name}</h3>
                    </div>
                    
                    <p className="text-white/80 text-sm line-clamp-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {dest.desc}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Button 
                        variant="ghost" 
                        className="p-0 h-auto text-white hover:text-cyan-300 hover:bg-transparent group/btn flex items-center gap-2 font-semibold"
                      >
                        Explore Now
                        <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                      
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-red-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                        <Heart size={20} className="fill-red-500/80 text-red-500" />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View More CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <Link href="/honeymoon">
            <Button size="xl" className="rounded-full px-12 py-8 text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105">
              Discover All Romantic Deals
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HoneymoonDestinations;
