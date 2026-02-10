"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold font-heading text-white">HappyJourney</h2>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner for creating unforgettable travel memories. From luxury honeymoons to adventurous expeditions, we make every journey special.
                        </p>
                        <div className="flex items-center gap-4">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter size={20} />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin size={20} />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold font-heading mb-6 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { name: "About Us", href: "/about" },
                                { name: "Tour Packages", href: "/packages" },
                                { name: "Honeymoon Specials", href: "/honeymoon" },
                                { name: "Luxury Cruises", href: "/cruises" },
                                { name: "Destination Weddings", href: "/wedding" },
                                { name: "Careers", href: "/careers" },
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-400 hover:text-secondary-sky transition-colors text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-lg font-semibold font-heading mb-6 text-white">Support</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="text-gray-400 hover:text-secondary-sky transition-colors text-sm">
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-gray-400 hover:text-secondary-sky transition-colors text-sm">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="text-gray-400 hover:text-secondary-sky transition-colors text-sm">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="text-gray-400 hover:text-secondary-sky transition-colors text-sm">
                                    FAQs
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-semibold font-heading mb-6 text-white">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <MapPin className="text-secondary-sky shrink-0 mt-1" size={18} />
                                <span className="text-gray-400 text-sm">
                                    123 Travel Tower, Business District, <br /> New Delhi, India 110001
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="text-secondary-sky shrink-0" size={18} />
                                <span className="text-gray-400 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="text-secondary-sky shrink-0" size={18} />
                                <span className="text-gray-400 text-sm">info@happyjourney.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} HappyJourney. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 text-xs px-2 py-1 border border-gray-700 rounded">ISO 9001:2008 Certified</span>
                        <span className="text-gray-600 text-xs px-2 py-1 border border-gray-700 rounded">Dept. of Tourism Approved</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
