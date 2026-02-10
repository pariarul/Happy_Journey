"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
    return (
        <div className="bg-gray-50 min-h-screen pt-24 pb-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 mb-20">
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-bold font-heading text-gray-900 leading-tight"
                    >
                        Let's Plan Your <br /><span className="text-primary-blue">Next Adventure</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-xl text-gray-600 font-light leading-relaxed max-w-2xl mx-auto"
                    >
                        Have a question or ready to book? Our travel experts are just a message away.
                    </motion.p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 relative z-10">
                    {/* Contact Info & Map */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-12"
                    >
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-xl border border-gray-100 relative group overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -mr-10 -mt-10 transition-transform duration-700 group-hover:scale-150"></div>
                            <h3 className="text-2xl font-bold font-heading text-gray-900 mb-8 relative z-10">Headquarters</h3>

                            <div className="space-y-8 relative z-10">
                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl text-primary-blue shadow-sm">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg">New Delhi, India</p>
                                        <p className="text-gray-500">123 Travel Tower, Business District, <br />Connaught Place, 110001</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl text-primary-blue shadow-sm">
                                        <Phone size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg">+91 98765 43210</p>
                                        <p className="text-gray-500 text-sm">Mon-Sat, 9am - 7pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="bg-blue-50 p-3 rounded-xl text-primary-blue shadow-sm">
                                        <Mail size={24} />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-gray-900 text-lg">info@happyjourney.com</p>
                                        <p className="text-gray-500 text-sm">Typical response time: 2 hours</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
                                <div key={i} className="bg-white p-4 rounded-full shadow-sm hover:shadow-md hover:-translate-y-1 transition-all cursor-pointer text-gray-400 hover:text-primary-blue border border-gray-100">
                                    <Icon size={20} />
                                </div>
                            ))}
                        </div>

                        <div className="rounded-[2.5rem] overflow-hidden h-[300px] shadow-xl border-4 border-white">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.112151605!2d77.209021!3d28.613939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b741d057%3A0xcdee88e47393c3f1!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1647854652254!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Map"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-10 md:p-14 rounded-[3rem] shadow-2xl border border-gray-100 relative"
                    >
                        <h3 className="text-3xl font-bold font-heading text-gray-900 mb-8">Send a Message</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Your Name</label>
                                    <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                                    <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="+91 ..." />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                                <input type="email" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all" placeholder="name@company.com" />
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">What are you interested in?</label>
                                <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all appearance-none cursor-pointer text-gray-600">
                                    <option>General Inquiry</option>
                                    <option>Tour Package</option>
                                    <option>Honeymoon Special</option>
                                    <option>Destination Wedding</option>
                                    <option>Corporate Tour</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                                <textarea rows="5" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border-transparent focus:bg-white focus:border-primary-blue focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none" placeholder="Tell us about your dream trip..."></textarea>
                            </div>

                            <Button size="lg" className="w-full py-5 text-lg rounded-2xl shadow-xl shadow-blue-200 mt-4 bg-primary-blue hover:bg-blue-700 border-none text-white">
                                Send Message <Send size={18} className="ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
