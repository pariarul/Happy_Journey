"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#050B18] text-white overflow-hidden relative">

      {/* ===== BACKGROUND GLOW EFFECTS ===== */}
      <div className="absolute -top-40 -left-40 w-[520px] h-[520px] bg-sky-500/20 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-[150px]" />

      {/* ===== HERO ===== */}
      <div className="container mx-auto px-4 md:px-6 pt-32 pb-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Let's Plan Your <br />
            <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
              Next Adventure
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-white/60 font-light max-w-2xl mx-auto"
          >
            Have a question or ready to book? Our travel experts are just a
            message away.
          </motion.p>
        </div>
      </div>

      {/* ===== CONTENT ===== */}
      <div className="container mx-auto px-4 md:px-6 pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ===== LEFT : CONTACT INFO ===== */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-12"
          >
            <div className="bg-white/5 backdrop-blur-2xl p-10 rounded-[2.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full -mr-10 -mt-10"></div>

              <h3 className="text-2xl font-bold mb-8 relative z-10">
                Headquarters
              </h3>

              <div className="space-y-8 relative z-10">
                <InfoItem
                  icon={MapPin}
                  title="Tirunelveli Office"
                  text="C 36, Azad Road, Melapalayam, Tirunelveli – 628002"
                />
                <InfoItem
                  icon={MapPin}
                  title="Chennai Office"
                  text="40/75, Mayor Ramanathan Salai, Chetpet – 600031"
                />
                <InfoItem
                  icon={Phone}
                  title="+91 9786190004"
                  text="Mon – Sat, 9am – 7pm"
                />
                <InfoItem
                  icon={Mail}
                  title="info@happyjourney.com"
                  text="Typical response time: 2 hours"
                />
              </div>
            </div>

            {/* ===== SOCIAL ===== */}
            <div className="flex gap-4">
              {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -6, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="bg-white/5 backdrop-blur-xl p-4 rounded-full border border-white/10 text-white/50 hover:text-sky-400 cursor-pointer"
                >
                  <Icon size={20} />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== RIGHT : FORM ===== */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="bg-white/5 backdrop-blur-2xl p-10 md:p-14 rounded-[3rem] border border-white/10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold mb-8">Send a Message</h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <DarkInput label="Your Name" />
                <DarkInput label="Phone Number" />
              </div>

              <DarkInput label="Email Address" />

              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">
                  What are you interested in?
                </label>
                <select className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-500 outline-none transition-all">
                  <option>General Inquiry</option>
                  <option>Tour Package</option>
                  <option>Honeymoon Special</option>
                  <option>Destination Wedding</option>
                  <option>Corporate Tour</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-white/70 ml-1">
                  Your Message
                </label>
                <textarea
                  rows={5}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-500 outline-none resize-none transition-all"
                  placeholder="Tell us about your dream trip..."
                />
              </div>

              <Button className="w-full py-5 text-lg rounded-2xl bg-gradient-to-r from-sky-500 to-indigo-500 hover:opacity-90 border-none shadow-xl">
                Send Message <Send size={18} className="ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ===== SMALL COMPONENTS ===== */

function DarkInput({ label }) {
  return (
    <div className="space-y-2">
      <label className="text-sm text-white/70 ml-1">{label}</label>
      <input
        placeholder={label}
        className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
      />
    </div>
  );
}

function InfoItem({ icon: Icon, title, text }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-white/10 p-3 rounded-xl text-sky-400">
        <Icon size={22} />
      </div>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-white/50 text-sm">{text}</p>
      </div>
    </div>
  );
}