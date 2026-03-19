'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Image from 'next/image';
import BookAppointMentModel from './BookAppointMentModel';
import { useSelector } from 'react-redux';
import { MobileNumber, TelePhoneNumber } from '../WebSensitives/ContactSensitives';

export default function Footer() {
    const servicesData = useSelector((store) => store.service)
    const doctorsData = useSelector((store) => store.doctor)
    return (
        <footer className="bg-[#0b1c2d] text-gray-300 lg:px-6 px-4">

            <BookAppointMentModel />

            {/* TOP FOOTER */}
            <div className="max-w-330 mx-auto  py-16">
                <div className="grid items-start grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between gap-8">

                    {/* BRAND */}
                    <div>
                        <Link href="/" className="flex items-center gap-2 font-bold text-white">
                            <Image
                                src="/logo-white.PNG"
                                alt="Hospital Logo"
                                width={60}
                                height={60}
                                className="object-cover rounded-full"
                                priority
                            />
                            <p className="text-lg font-extrabold text-white">
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
                            Our Doctors
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            {doctorsData.map((item, index) => {
                                return (
                                    <Link key={index} className='' href={`/doctors/${item.slug}`}><li className='cursor-pointer py-1 hover:text-cyan-500 duration-100'>{item.name}</li></Link>
                                )
                            })}
                        </ul>
                    </div>

                    {/* SERVICES */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Our Treatments
                        </h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            {servicesData.map((item, index) => {
                                return (
                                    <Link key={index} className='' href={`/services/${item.service_slug}`}><li className='cursor-pointer py-1 hover:text-cyan-500 duration-100'>{item.service_name}</li></Link>
                                )
                            })}
                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-4">
                            Contact Information
                        </h4>

                        <div className="space-y-4 text-sm">
                            <p className="flex items-start gap-3">
                                <FaMapMarkerAlt className="text-[#00B4D8] text-md mt-1" />
                                <span>
                                    15 Keshav Nagar, Opposite Samrat Ashok Udhyan, Jodhpur, Rajasthan
                                </span>
                            </p>

                            <p className="flex items-center gap-3">
                                <FaPhoneAlt className="text-[#00B4D8]" />
                                <span>{MobileNumber} , {TelePhoneNumber}</span>
                            </p>

                            <p className="flex items-center gap-3">
                                <FaEnvelope className="text-[#00B4D8]" />
                                <span>Boneandjointpalroad@gmail.com</span>
                            </p>

                            <p className="text-sm text-gray-400">
                                🕒 OPD: Mon-Sat (9:00 AM - 7:00 PM)
                            </p>

                            <p className="text-sm text-red-100 font-semibold">
                                🚑 24 / 7 Emergency Services Available
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
