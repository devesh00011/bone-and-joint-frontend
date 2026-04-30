'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { ServicesData } from '../api_data/Services'
import { MobileNumber } from '../WebSensitives/ContactSensitives'

export default function MobileHeader({ appointmentModel, setAppointmentModel }) {
    const [menuOpen, setMenuOpen] = useState(false)
    const [servicesMenu, setServicesMenu] = useState(false)



    const servicesData = useSelector((store) => store.service)
    console.log('servicesData', servicesData)

    return (
        <div className="lg:hidden block relative z-50">

            {/* fixed bottom buttons */}

            <div className='fixed bottom-0 grid grid-cols-2 w-full shadow-2xl border-t-2 border-white'>
                <button onClick={() => setAppointmentModel(true)} className='bg-[#0B1C2D] text-white w-full py-4 border-r-2'>Book </button>
                <Link href={`tel:${MobileNumber}`}><button className='bg-green-700 text-white w-full py-4'>Call Us</button></Link>
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
                        Bone and Joint Hospital and Research Centre (Jodhpur) Private Limited
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
                        Bone and Joint Hospital
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
                            { name: 'Contact Us', path: '/contact-us' },
                        ].map((item, index) => (
                            <li key={index}>
                                <Link key={index} href={item.path} onClick={() => setMenuOpen(false)}>
                                    {item.name}
                                </Link>
                                <div className='w-[40] rounded-full h-[3] mt-1 bg-[#00B4D8] '></div>
                            </li>
                        ))}
                        <li onClick={() => setServicesMenu(!servicesMenu)} className="">
                            Treatments

                            <div className="w-10 rounded-full h-[3] mt-1 bg-[#00B4D8]"></div>
                            <div
                                className={`${servicesMenu
                                    ? "translate-y-0 h-auto opacity-100"
                                    : "-translate-y-5 h-0 opacity-0"
                                    } duration-500 overflow-hidden p-3 origin-top-left w-full bg-gray-50 transition-all ease-in-out`}
                            >
                                <ul className="py-2">
                                    {servicesData.map((item, index) => {
                                        return (
                                            <Link key={index} href={`/treatments/${item.service_slug}`}><li onClick={() => setMenuOpen(false)} key={index} className="text-[15px] font-medium text-gray-700 py-3 px-3 hover:bg-blue-100 hover:text-blue-700 hover:pl-5 transition-all duration-200 cursor-pointer rounded-md">
                                                {item.service_name}
                                                <div className="w-5 rounded-full h-[3] mt-1 bg-[#00B4D8]"></div>
                                            </li></Link>
                                        )
                                    })}
                                    <Link href={'/treatments'}><li onClick={() => setMenuOpen(false)} className="text-[15px]  py-3 px-3 ml-3 transition-all duration-200 cursor-pointer rounded-md font-bold text-[#095b5e]">View all Treatments
                                        <div className="w-5 rounded-full h-[3] mt-1 bg-[#00B4D8]"></div>
                                    </li>
                                    </Link>
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

                        <Link href={`tel:${MobileNumber}`}
                            className="block w-full border border-[#00B4D8] text-[#00B4D8] py-3 rounded-full text-center font-semibold"
                        >
                            Call Hospital
                        </Link>
                    </div>
                </nav>
            </div>
        </div>
    )
}
