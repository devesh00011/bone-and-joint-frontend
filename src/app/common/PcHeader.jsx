'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PcHeader({ appointmentModel, setAppointmentModel }) {
    return (
        <div className="hidden lg:block">
            <div className="max-w-[1320] mx-auto lg:px-0 px-4 py-4 flex items-center justify-between">
                <div className="relative z-40">
                    <Link href="/" className="flex items-center gap-0 font-bold text-white">

                        {/* Logo Container */}
                        <div className="relative w-16 h-16">
                            <Image
                                src="/logo-white.PNG"
                                alt="Hospital Logo"
                                fill
                                className="object-cover rounded-full"
                                priority
                            />
                        </div>

                        <p className="text-lg font-extrabold text-white">
                            Bone and Joint Hospital
                        </p>

                    </Link>
                </div>


                <nav>
                    <ul className="flex items-center gap-10 text-white text-[16px] font-medium">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'About Us', path: '/about' },
                            { name: 'Treatments', path: '/treatments' },
                            { name: 'Doctors', path: '/doctors' },
                            { name: 'Contact Us', path: '/contact-us' },
                        ].map((item) => (
                            <li key={item.name} className="relative group">
                                <Link href={item.path}>
                                    <span className="py-2 group-hover:text-[#00B4D8] duration-200">
                                        {item.name}
                                    </span>
                                    <span className="absolute left-0 -bottom-2 w-0 h-[2] bg-[#00B4D8] group-hover:w-full transition-all duration-300" />
                                </Link>
                            </li>
                        ))}

                        <li
                            onClick={() => setAppointmentModel(true)}
                            className="px-5 py-2 rounded-full bg-white text-gray-900 text-sm font-semibold hover:bg-[#00B4D8] hover:text-white duration-200 cursor-pointer">
                            Book Appointment
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
