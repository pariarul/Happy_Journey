"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Plane, Heart, Ship, Gem, ShieldCheck, Award, MapPin, ArrowRight, Star, Calendar, Users, Globe, PlayCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { cn } from "@/lib/utils";

const highlights = [
  { icon: Plane, title: "Custom Travel", desc: "Tailor-made itineraries for you" },
  { icon: Heart, title: "Honeymoon", desc: "Romantic getaways worldwide" },
  { icon: Ship, title: "Luxury Cruises", desc: "Voyage in style and comfort" },
  { icon: Gem, title: "Weddings", desc: "Dream destination weddings" },
];

const destinations = [
  { name: "Maldives", image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1000", price: "Starts ₹55,000" },
  { name: "Kerala", image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=1000", price: "Starts ₹18,000" },
  { name: "Dubai", image: "https://images.unsplash.com/photo-1512453979798-5ea932a235c9?q=80&w=1000", price: "Starts ₹45,000" },
  { name: "Andaman", image: "https://images.unsplash.com/photo-1589330273594-fade1ee91647?q=80&w=1000", price: "Starts ₹25,000" },
  { name: "Europe", image: "https://images.unsplash.com/photo-1499856871940-a09627c6d7db?q=80&w=1000", price: "Starts ₹1,20,000" },
];

const testimonials = [
  { text: "The most seamless travel experience we've ever had. Everything was perfect!", author: "Ariesha & Kunal", role: "Honeymooners" },
  { text: "HappyJourney planned our corporate retreat flawlessly. Highly recommended!", author: "TechCorp Inc.", role: "Corporate Client" },
  { text: "My parents loved the pilgrimage tour. Excellent service and care.", author: "Rohan S.", role: "Family Traveler" },
];

const features = [
  { title: "24/7 Support", desc: "We are always here for you, anytime, anywhere.", icon: Phone },
  { title: "Best Price Guarantee", desc: "Unbeatable prices for premium experiences.", icon: Tag },
  { title: "Handpicked Hotels", desc: "Stay in the world's most luxurious properties.", icon: Hotel },
];

import { Phone, Tag, Hotel } from "lucide-react";

export default function Home() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1476514525535-07fb2244d26f?q=80&w=2070"
            alt="HappyJourney Hero Background"
            fill
            className="object-cover scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 text-sm font-medium tracking-wider mb-6">
              Welcome to Premium Travel
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white font-heading leading-tight drop-shadow-lg">
              Journey Beyond <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">Destinations</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Curating unforgettable experiences for the modern traveler. Honeymoons, Luxury Cruises, and Destination Weddings.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-6 justify-center pt-8"
          >
            <Button href="/packages" size="lg" className="h-16 px-10 text-lg rounded-full shadow-2xl shadow-blue-500/40 hover:scale-105 transition-transform duration-300">
              Explore Packages
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="h-16 px-10 text-lg rounded-full bg-white/10 backdrop-blur-md border-white/50 text-white hover:bg-white/20 hover:scale-105 transition-transform duration-300 group">
              <PlayCircle className="mr-3 group-hover:text-cyan-300 transition-colors" /> Watch Film
            </Button>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
          <ArrowRight className="rotate-90" />
        </div>
      </section>

      {/* Intro & Highlights - Staggered Reveal */}
      <section className="py-24 bg-white relative z-20 rounded-t-[3rem] -mt-20 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary-blue font-semibold tracking-wider uppercase text-sm">Why Choose Us</span>
            <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">Experience the Extraordinary</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full group hover:-translate-y-2 transition-transform duration-500 border-none shadow-xl hover:shadow-2xl bg-gray-50/50 hover:bg-white overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary-blue/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>
                  <CardContent className="flex flex-col items-start p-8 space-y-6 relative z-10">
                    <div className="p-4 rounded-2xl bg-white shadow-md text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                      <item.icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-heading text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-500 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowRight className="text-primary-blue" />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Parallax Image Strip */}
      <section className="py-20 overflow-hidden">
        <div className="flex gap-6 min-w-full animate-marquee hover:pause">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-6 shrink-0">
              <div className="relative w-[300px] h-[400px] rounded-3xl overflow-hidden"><Image src="https://images.unsplash.com/photo-1506929562872-bb421503ef21?q=80&w=1000" fill className="object-cover" alt="img" /></div>
              <div className="relative w-[400px] h-[400px] rounded-3xl overflow-hidden mt-12"><Image src="https://images.unsplash.com/photo-1476514525535-07fb2244d26f?q=80&w=1000" fill className="object-cover" alt="img" /></div>
              <div className="relative w-[300px] h-[400px] rounded-3xl overflow-hidden"><Image src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000" fill className="object-cover" alt="img" /></div>
              <div className="relative w-[500px] h-[400px] rounded-3xl overflow-hidden mt-8"><Image src="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1000" fill className="object-cover" alt="img" /></div>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Destinations - Masonry Style */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-gray-900">
                Trending Destinations
              </h2>
              <p className="text-gray-500 text-lg">
                Handpicked destinations that serve as the perfect backdrop for your next adventure.
              </p>
            </div>
            <Button href="/packages" variant="outline" className="rounded-full px-8 hover:bg-primary-blue hover:text-white border-primary-blue text-primary-blue transition-colors">
              View All Destinations
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
            {destinations.slice(0, 3).map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer",
                  index === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                )}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 transition-opacity" />
                <div className="absolute bottom-6 left-6 text-white p-4 backdrop-blur-sm bg-white/10 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                  <div className="flex items-center gap-3 text-sm font-medium">
                    <span className="bg-primary-blue px-3 py-1 rounded-full">{dest.price}</span>
                    <span className="flex items-center gap-1 opacity-80 hover:opacity-100 transition-opacity"><MapPin size={14} /> View Details</span>
                  </div>
                </div>
              </motion.div>
            ))}
            {/* Dynamic Extra Content */}
            <div className="md:col-span-1 bg-primary-blue rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
              <h3 className="text-3xl font-bold mb-4 relative z-10">Custom Packages</h3>
              <p className="mb-8 text-blue-100 relative z-10">Can't find what you're looking for? Let's build it together.</p>
              <Button variant="secondary" className="w-full bg-white text-primary-blue border-none relative z-10">Create Yours</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features & Stats - Dark Section */}
      <section className="py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {features.map((feature, i) => (
              <div key={i} className="flex gap-6">
                <div className="bg-white/10 p-4 rounded-2xl h-fit backdrop-blur-sm">
                  <feature.icon size={32} className="text-secondary-sky" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-20 border-t border-gray-800 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Happy Travelers", value: "15k+" },
              { label: "Destinations", value: "85+" },
              { label: "Tours Completed", value: "2400+" },
              { label: "Awards Won", value: "12" }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <span className="text-secondary-sky font-semibold tracking-wider uppercase text-sm mb-4 block">Testimonials</span>
          <h2 className="text-4xl font-bold font-heading mb-16 text-gray-900">What Our Travelers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-lg text-left relative"
              >
                <div className="text-6xl text-primary-blue/20 font-serif absolute top-4 right-8">"</div>
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-6 italic leading-relaxed">
                  "{t.text}"
                </p>
                <div>
                  <h4 className="font-bold text-gray-900">{t.author}</h4>
                  <span className="text-sm text-gray-500">{t.role}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 relative overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1540339832862-437913ca01b7?q=80&w=2000" fill className="object-cover" alt="Newsletter" />
        <div className="absolute inset-0 bg-primary-blue/80 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">Travel Inspiration in Your Inbox</h2>
          <p className="text-xl text-blue-100 mb-10">Join 50,000+ travelers and get exclusive offers, travel guides, and hidden gems delivered to you.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto bg-white/10 p-2 rounded-full border border-white/20">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-transparent border-none text-white px-6 py-4 outline-none placeholder:text-blue-200"
            />
            <Button className="rounded-full px-8 py-6 text-lg bg-white text-primary-blue hover:bg-blue-50 border-none shadow-lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
