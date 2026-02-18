"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence, useInView } from "framer-motion";
import { 
  Plane, Heart, Ship, Gem, ShieldCheck, Award, 
  MapPin, ArrowRight, Star, Calendar, Users, 
  Globe, PlayCircle, Phone, Tag, Hotel, 
  Compass, Anchor, Camera, Waves, Sparkles,
  ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import HoneymoonDestinations from "@/components/home/HoneymoonDestinations";

const highlights = [
  { 
    icon: Compass, 
    title: "The Art of Discovery", 
    desc: "Venture beyond the familiar. We curate paths less traveled for the curious soul.",
    color: "bg-blue-500",
    image: "https://images.unsplash.com/photo-1476514525535-07fb2244d26f?q=80&w=1000"
  },
  { 
    icon: Heart, 
    title: "Romantic Chapters", 
    desc: "Begin your forever in landscapes that whisper romance and luxury.",
    color: "bg-rose-500",
    image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000"
  },
  { 
    icon: Anchor, 
    title: "Maritime Grandeur", 
    desc: "Sail the world's grandest oceans on vessels that redefine five-star living.",
    color: "bg-sky-500",
    image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=1000"
  },
  { 
    icon: Gem, 
    title: "Crowning Moments", 
    desc: "From weddings to milestones, we celebrate your life's most precious jewels.",
    color: "bg-amber-500",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1000"
  },
];

const destinations = [
  { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000", price: "Starts ₹55,000", span: "md:col-span-2 md:row-span-2" },
  { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000", price: "Starts ₹18,000", span: "md:col-span-1 md:row-span-1" },
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea932a235c9?q=80&w=1000", price: "Starts ₹45,000", span: "md:col-span-1 md:row-span-1" },
  { name: "Santorini", image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?q=80&w=1000", price: "Starts ₹1,45,000", span: "md:col-span-1 md:row-span-2" },
  { name: "Andaman", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1000", price: "Starts ₹25,000", span: "md:col-span-2 md:row-span-1" },
];

const testimonials = [
  { text: "The most seamless travel experience we've ever had. Happy Journey made our honeymoon a living fairy tale. Every detail was curated with such love and precision.", author: "Ariesha & Kunal", role: "Honeymooners", location: "Maldives 2024" },
  { text: "Planning a corporate retreat for 200 people seemed impossible until we met the Happy Journey team. Their logistics are world-class.", author: "TechCorp Global", role: "Corporate Partners", location: "Dubai 2023" },
  { text: "My parents' golden anniversary trip was the highlight of their lives. The care provided for senior travelers is truly heartwarming.", author: "Rohan Singhal", role: "Family Traveler", location: "Europe 2024" },
];

const features = [
  { title: "Concierge 24/7", desc: "A personal specialist always one call away, worldwide.", icon: Phone },
  { title: "Price Integrity", desc: "Premium quality guaranteed at the most competitive rates.", icon: Tag },
  { title: "Curated Stays", desc: "Only the top 1% of luxury properties make our list.", icon: Hotel },
];

export default function Home() {
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 800], [0, 250]);
  const opacityHero = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <div className="flex flex-col min-h-screen bg-[#fcfcfd] text-[#0A1128] font-sans selection:bg-sky-500 selection:text-white">
      
      {/* --- Horizon Hero: Atmospheric & Cinematic --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-[#050B18]">
        <motion.div style={{ y: yHero, opacity: opacityHero }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000"
            alt="Cinematic Landscape"
            fill
            className="object-cover brightness-[0.4] contrast-125 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#050B18]/40 via-transparent to-[#fcfcfd]" />
        </motion.div>

        {/* Floating Atmospheric Particles */}
        <div className="absolute inset-0 z-[1] pointer-events-none opacity-30">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] animate-pulse" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="text-left space-y-10"
            >
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 text-sky-300 text-xs font-black uppercase tracking-[0.4em]">
                <Globe size={16} className="animate-spin-slow" />
                <span>The Boutique Travel House</span>
              </div>

              <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-bold font-serif leading-[0.8] tracking-tighter text-white">
                Happy <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-blue-200 to-indigo-300 italic font-medium">Journey</span>
              </h1>

              <p className="text-xl md:text-2xl text-sky-100/70 max-w-xl font-light leading-relaxed">
                We don&apos;t just book trips. We architect memories, weaving luxury and discovery into every mile of your voyage.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 pt-6">
                <Button
                  href="/packages"
                  size="xl"
                  className="rounded-full px-12 bg-white text-black hover:bg-sky-50 shadow-2xl shadow-sky-500/10 border-none font-bold text-lg group"
                >
                  Explore Collections
                  <ArrowRight className="ml-2 transform group-hover:translate-x-2 transition-transform" />
                </Button>
                <Button
                  href="/contact"
                  variant="outline"
                  size="xl"
                  className="rounded-full px-12 border-white/20 text-white hover:bg-white/10 backdrop-blur-md font-bold text-lg"
                >
                  Start Planning
                </Button>
              </div>
            </motion.div>

            {/* Unique Hero Visual: Floating Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.5, duration: 1.5 }}
              className="hidden lg:block relative"
            >
               <div className="relative w-[500px] h-[600px] rounded-[5rem] overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.5)] border border-white/10">
                  <Image 
                    src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000" 
                    fill 
                    className="object-cover saturate-150 brightness-75" 
                    alt="Featured Destination"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050B18] via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-12 left-12 right-12 space-y-4">
                    <div className="text-sky-300 font-black uppercase tracking-widest text-xs">Destination of the Month</div>
                    <h3 className="text-5xl font-bold font-serif text-white">The Amalfi <br />Coast, Italy</h3>
                    <div className="h-1 w-20 bg-sky-500 rounded-full" />
                  </div>
               </div>
               
               {/* Floating elements */}
               <motion.div 
                 animate={{ y: [0, -20, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-10 -right-10 w-32 h-32 bg-sky-500/20 backdrop-blur-3xl rounded-full border border-white/10 flex items-center justify-center text-white"
               >
                 <Sparkles size={40} className="text-sky-300" />
               </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Horizon Line Effect */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#fcfcfd] to-transparent pointer-events-none" />
      </section>


      {/* --- The Art of Travel: Storytelling Highlights --- */}
      <section className="py-40 relative px-6 overflow-hidden">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-24 space-y-6">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-sky-600 font-black uppercase tracking-[0.3em] text-xs"
            >
              Our Philosophy
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-bold font-serif text-[#0A1128]">
              The Art of <span className="text-sky-500 italic">Curated Journeys</span>
            </h2>
            <p className="text-gray-500 text-xl font-light max-w-2xl mx-auto leading-relaxed">
              We believe travel is not just a change of scenery, but a profound transformation of the soul.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group relative flex flex-col items-center"
              >
                <div className="relative w-full aspect-[4/5] rounded-[3rem] overflow-hidden mb-8 shadow-2xl transition-all duration-700 group-hover:scale-[1.02] group-hover:-translate-y-2">
                  <Image src={item.image} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
                  <div className={`absolute inset-0 ${item.color.replace('bg-', 'bg-')}/20 transition-opacity duration-500 group-hover:opacity-0`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128] via-transparent to-transparent opacity-60" />
                  
                  <div className="absolute bottom-8 left-8 right-8">
                    <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 text-white w-fit mb-4">
                      <item.icon size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-serif text-white mb-2">{item.title}</h3>
                  </div>
                </div>
                <p className="text-gray-500 text-center text-sm leading-relaxed px-4 opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- Trending Destinations: Artistic Masonry --- */}
      <section className="py-40 bg-[#050B18] text-white relative overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-500/5 rounded-full blur-[150px] -mr-96 -mt-96" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[150px] -ml-96 -mb-96" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-10">
            <div className="space-y-6 max-w-2xl">
              <span className="text-sky-400 font-black uppercase tracking-[0.3em] text-xs">Curated Selection</span>
              <h2 className="text-5xl md:text-7xl font-bold font-serif leading-tight">
                Points of <span className="text-sky-300 italic">Inspiration</span>
              </h2>
              <p className="text-gray-400 text-xl font-light">
                Handpicked global chapters that serve as the perfect backdrop for your next masterpiece adventure.
              </p>
            </div>
            <Button 
              href="/packages" 
              variant="outline" 
              className="rounded-full px-12 py-8 border-white/10 text-white hover:bg-white hover:text-black transition-all font-bold text-lg"
            >
              Discover More Destinations
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-8 h-auto md:h-[1000px]">
            {destinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className={cn(
                  "group relative rounded-[3rem] overflow-hidden shadow-2xl cursor-pointer border border-white/5",
                  dest.span
                )}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-[2000ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 transition-opacity duration-700 group-hover:opacity-80" />
                
                <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row justify-between items-end gap-6">
                  <div className="space-y-2">
                    <h3 className="text-3xl md:text-5xl font-bold font-serif text-white">{dest.name}</h3>
                    <div className="flex items-center gap-2 text-sky-300 uppercase tracking-widest text-[10px] font-black">
                      <MapPin size={12} /> Special Package Available
                    </div>
                  </div>
                  <div className="p-4 md:p-6 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 text-white flex flex-col items-center gap-1 group-hover:bg-sky-500 group-hover:border-sky-400 transition-all duration-500">
                    <span className="text-[10px] uppercase font-bold tracking-widest opacity-60">Fare</span>
                    <span className="text-xl font-black">{dest.price.split(' ')[1]}</span>
                  </div>
                </div>
                
                {/* Hover Reveal Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#0A1128] scale-0 group-hover:scale-100 transition-transform duration-500 ease-out shadow-2xl">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Unique "Architect" Card */}
            <div className="md:col-span-1 md:row-span-1 bg-gradient-to-br from-indigo-600 to-sky-600 rounded-[3rem] p-10 text-white flex flex-col justify-end relative overflow-hidden group">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000" />
              <Compass size={64} className="mb-6 text-white/40 animate-spin-slow" />
              <h3 className="text-4xl font-bold font-serif mb-4 leading-tight">Tailor-Made <br />Excellence</h3>
              <p className="mb-8 text-sky-100/70 font-light leading-relaxed">Let our travel architects design a journey as unique as your own thumbprint.</p>
              <Button variant="secondary" className="w-full bg-white text-[#0A1128] border-none py-8 rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-sky-50">Start Architecting</Button>
            </div>
          </div>
        </div>
      </section>


      {/* --- Honeymoon Destinations: Premium Animated Section --- */}
      <HoneymoonDestinations />


      {/* --- Features: Luxury Concierge Service --- */}
      <section className="py-40 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {features.map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col gap-8 p-12 rounded-[3.5rem] bg-gray-50/50 hover:bg-white border border-transparent hover:border-gray-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.03)] transition-all duration-700"
              >
                <div className="w-20 h-20 bg-[#0A1128] rounded-[2rem] flex items-center justify-center text-white shadow-2xl transform group-hover:rotate-6 transition-transform">
                  <feature.icon size={36} className="text-sky-400" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-bold font-serif text-[#0A1128]">{feature.title}</h3>
                  <p className="text-gray-500 text-lg font-light leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-32 pt-20 border-t border-gray-100 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Elite Members", value: "15k+" },
              { label: "Royal Ports", value: "85+" },
              { label: "Voyages Made", value: "2400+" },
              { label: "Excellence Awards", value: "12" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-black text-[#0A1128] mb-2 font-serif">{stat.value}</div>
                <div className="text-sky-600 text-xs font-black uppercase tracking-[0.2em]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- Social Proof: The Guest Book --- */}
      <section className="py-40 bg-[#f8fafc] border-y border-gray-100 overflow-hidden relative">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/grid.png')] opacity-[0.03] pointer-events-none" />
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-24 space-y-4">
            <span className="text-sky-600 font-black uppercase tracking-[0.3em] text-xs">Testimonials</span>
            <h2 className="text-5xl md:text-7xl font-bold font-serif text-[#0A1128]">Pages From Our <br /><span className="text-sky-500 italic">Guest Book</span></h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -15 }}
                className="bg-white p-12 rounded-[4rem] shadow-[0_40px_100px_rgba(0,0,0,0.04)] text-left relative flex flex-col justify-between h-full border border-gray-50"
              >
                <div className="absolute -top-6 left-12 p-4 bg-sky-500 rounded-full shadow-xl">
                  <Quote size={24} className="text-white fill-white" />
                </div>
                
                <div className="space-y-8 pt-4">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-[#0A1128] text-xl font-light italic leading-relaxed">
                    &quot;{t.text}&quot;
                  </p>
                </div>

                <div className="pt-10 flex items-center justify-between border-t border-gray-50 mt-10">
                  <div>
                    <h4 className="font-bold text-[#0A1128] text-lg">{t.author}</h4>
                    <span className="text-xs font-black uppercase tracking-widest text-sky-500 underline underline-offset-4 decoration-2">{t.role}</span>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-black uppercase text-gray-300 tracking-widest">{t.location}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* --- Newsletter: Signature Correspondence --- */}
      <section className="py-40 bg-[#0A1128] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1540339832862-437913ca01b7?q=80&w=2000" 
            fill 
            className="object-cover opacity-20 brightness-50" 
            alt="Newsletter Background" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1128] via-[#0A1128]/80 to-transparent" />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl space-y-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="space-y-6"
            >
              <span className="text-sky-400 font-black uppercase tracking-[0.4em] text-xs">Signature Correspondence</span>
              <h2 className="text-5xl md:text-8xl font-bold font-serif text-white tracking-tighter">Stay <span className="italic text-sky-300">Inspired.</span></h2>
              <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl leading-relaxed">
                Join our exclusive circle of explorers for hand-crafted itineraries and first access to our most unique arrivals.
              </p>
            </motion.div>

            <motion.div 
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.3 }}
               className="flex flex-col md:flex-row gap-6 max-w-3xl"
            >
              <div className="flex-1 relative group">
                <input
                  type="email"
                  placeholder="Your personal email address"
                  className="w-full bg-white/5 border border-white/10 text-white rounded-[2rem] px-10 py-6 outline-none focus:bg-white/10 focus:border-sky-500/50 transition-all font-light text-lg placeholder:text-white/20"
                />
              </div>
              <Button size="xl" className="rounded-[2rem] px-12 bg-sky-500 hover:bg-sky-400 text-white font-black text-sm uppercase tracking-widest border-none shadow-2xl">
                Join the Circle
              </Button>
            </motion.div>
            
            <p className="text-white/20 text-xs font-medium tracking-widest uppercase">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>

      {/* --- Custom Global Animations --- */}
      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

function Quote({ size, className }) {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="currentColor" 
      className={className}
    >
      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21C21.017 22.1046 20.1216 23 19.017 23H16.017C14.9124 23 14.017 22.1046 14.017 21ZM14.017 11V14H21.017V11C21.017 9.89543 20.1216 9 19.017 9H16.017C14.9124 9 14.017 9.89543 14.017 11ZM3 21L3 18C3 16.8954 3.89543 16 5 16H8C9.10457 16 10 16.8954 10 18V21C10 22.1046 9.10457 23 8 23H5C3.89543 23 3 22.1046 3 21ZM3 11V14H10V11C10 9.89543 9.10457 9 8 9H5C3.89543 9 3 9.89543 3 11Z" />
    </svg>
  );
}
