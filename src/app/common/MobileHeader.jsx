'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'

export default function MobileHeader({ appointmentModel, setAppointmentModel }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [servicesMenu, setServicesMenu] = useState(false)



    const data = [
        "Knee Replacement Surgery",
        "Hip Replacement Surgery",
        "Spine Surgery & Back Pain Treatment",
        "Arthroscopic Surgery",
        "Joint Replacement (Hip, Knee, Shoulder, Elbow)",
        "Polytrauma & Trauma Care",
        "Physiotherapy & Rehabilitation",
        "Orthopaedic Consultation",
        "Shoulder & Elbow Treatment",
        "Bone Tumor (Neoplasm) Care",
        "Joint Dislocation Treatment",
        "Limb Lengthening Procedures",
        "X-Ray & Diagnostic Services",
    ]

    return (
        <div className="lg:hidden block relative z-50">

            {/* fixed bottom buttons */}

            <div className='fixed bottom-0 grid grid-cols-2 w-full shadow-2xl border-t-2 border-white'>
                <button onClick={() => setAppointmentModel(true)} className='bg-[#0B1C2D] text-white w-full py-4 border-r-2'>Book </button>
                <Link href={'tel:+918079092775'}><button className='bg-green-700 text-white w-full py-4'>Call Us</button></Link>
            </div>

            {/* OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-40 transition-opacity duration-300
        ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setMenuOpen(false)}
            />

            {/* TOP BAR */}
            <div className="flex items-center justify-between px-2 py-1 text-white">
                <Link href="/" className="flex items-center font-bold text-white">
                    <Image
                        src="/logo-white.PNG"
                        alt="Hospital Logo"
                        width={50}
                        height={50}
                        className="object-cover rounded-full"
                        priority
                    />
                    <p className="text-lg font-extrabold">
                        Bone & Joint Hospital
                    </p>
                </Link>

                <button onClick={() => setMenuOpen(true)}>
                    <HiMenuAlt3 size={28} />
                </button>
            </div>

            {/* DRAWER */}
            <div
                className={`fixed top-0 overflow-y-scroll overflow-x-hidden h-screen w-full bg-white z-50 duration-300 ease-in-out
  ${menuOpen ? "right-0" : "-right-full"}`}
            >
                <div className="flex items-center justify-between py-8 px-4 border-b border-gray-300">
                    <p className="text-xl font-extrabold">
                        Bone & Joint Hospital
                    </p>
                    <button onClick={() => setMenuOpen(false)}>
                        <IoClose size={26} />
                    </button>
                </div>

                <nav className="px-5 py-6">
                    <ul className="space-y-6 text-[19px] font-medium ">
                        {[
                            { name: 'Home', path: '/' },
                            { name: 'Doctors', path: '/doctors' },

                            { name: 'About Us', path: '/about' },
                            { name: 'Contact Us', path: '/contact' },
                        ].map((item) => (
                            <li key={item.name}>
                                <Link href={item.path} onClick={() => setMenuOpen(false)}>
                                    {item.name}
                                </Link>
                                <div className='w-[40] rounded-full h-[3] mt-1 bg-[#00B4D8] '></div>
                            </li>
                        ))}
                        <li onClick={() => setServicesMenu(!servicesMenu)} className="">
                            Services

                            <div className="w-10 rounded-full h-[3] mt-1 bg-[#00B4D8]"></div>
                            <div
                                className={`${servicesMenu
                                    ? "translate-y-0 h-auto opacity-100"
                                    : "-translate-y-5 h-0 opacity-0"
                                    } duration-500 overflow-hidden p-3 origin-top-left w-full bg-gray-50 transition-all ease-in-out`}
                            >
                                <ul className="py-2">
                                    {data.map((item, index) => {
                                        return (
                                            <Link key={index} href={`/services/${item.replace(/ /g, "-")}`}><li onClick={() => setMenuOpen(false)} key={index} className="text-[15px] font-medium text-gray-700 py-3 px-3 hover:bg-blue-100 hover:text-blue-700 hover:pl-5 transition-all duration-200 cursor-pointer rounded-md">
                                                {item}
                                                <div className="w-5 rounded-full h-[3] mt-1 bg-[#00B4D8]"></div>
                                            </li></Link>
                                        )
                                    })}
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <div className="mt-8 space-y-4">
                        <button
                            onClick={() => {
                                setMenuOpen(false)
                                setAppointmentModel(true)
                            }}
                            className="block w-full bg-[#00B4D8] text-white py-3 rounded-full text-center font-semibold hover:bg-[#00B4D8]"
                        >
                            Book Appointment
                        </button>

                        <a
                            href="tel:+919999999999"
                            className="block w-full border border-[#00B4D8] text-[#00B4D8] py-3 rounded-full text-center font-semibold"
                        >
                            Call Hospital
                        </a>
                    </div>
                </nav>
            </div>
        </div>
    )
}
