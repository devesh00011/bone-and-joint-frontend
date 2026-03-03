'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from 'next/image';
import BookAppointMentModel from './BookAppointMentModel';

export default function Footer() {
    return (
        <footer className="bg-[#0b1c2d] text-gray-300">

            <BookAppointMentModel />

            {/* TOP FOOTER */}
            <div className="max-w-330 mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* BRAND */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 font-bold text-white">
                            <Image
                                src="/logo.jpeg"
                                alt="Hospital Logo"
                                width={40}
                                height={40}
                                className="object-cover rounded-full"
                                priority
                            />
                            <p className="text-2xl font-extrabold text-white">
                                Bone & Joint Hospital
                            </p>
                        </Link>
                        <p className="mt-3 text-sm leading-relaxed text-gray-400">
                            Providing advanced orthopaedic care with compassion, precision
                            and modern medical technology for a pain-free life.
                        </p>

                        <p className="mt-4 text-sm text-gray-400">
                            Trusted Orthopaedic Hospital in Jodhpur
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/" className="hover:text-[#00B4D8] duration-200">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/doctors" className="hover:text-[#00B4D8] duration-200">
                                    Doctors
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="hover:text-[#00B4D8] duration-200">
                                    Our Services
                                </Link>
                            </li>
                            <li>
                                <Link href="/about" className="hover:text-[#00B4D8] duration-200">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link href="/contact" className="hover:text-[#00B4D8] duration-200">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Our Treatments
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-400">
                            <li>Knee Replacement</li>
                            <li>Joint Replacement</li>
                            <li>Spine Treatment</li>
                            <li>Sports Injury Care</li>
                            <li>Fracture & Trauma Care</li>
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Contact Information
                        </h4>

                        <div className="space-y-4 text-sm">
                            <p className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#00B4D8] mt-1" />
                                <span>
                                    15 Keshav Nagar, Opposite Samrat Ashok Udhyan, Jodhpur, Rajasthan
                                </span>
                            </p>

                            <p className="flex items-center gap-3">
                                <FaPhoneAlt className="text-[#00B4D8]" />
                                <span>+91 96940-22500 , 0291-2110000</span>
                            </p>

                            <p className="flex items-center gap-3">
                                <FaEnvelope className="text-[#00B4D8]" />
                                <span>Boneandjointpalroad@gmail.com</span>
                            </p>

                            <p className="text-sm text-gray-400">
                                🕒 OPD: Mon-Sat (9:00 AM - 7:00 PM)
                            </p>

                            <p className="text-sm text-red-400 font-semibold">
                                🚑 24x7 Emergency Services Available
                            </p>
                        </div>
                    </div>

                </div>
            </div>

            {/* BOTTOM FOOTER */}
            <div className="border-t border-white/10">
                <div className="max-w-330 mx-auto px-4 pb-10 pt-5 flex flex-col md:flex-row items-center justify-between text-sm text-gray-400 gap-3">
                    <p>
                        © {new Date().getFullYear()} Bone & Joint Hospital. All Rights Reserved.
                    </p>

                    <p>
                        Designed with care for better healthcare
                    </p>
                </div>
            </div>
        </footer>
    );
}
