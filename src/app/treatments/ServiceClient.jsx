'use client'
import React from 'react'
import Link from "next/link";
import { useSelector } from "react-redux";

export default function ServiceClient() {
    const servicesData = useSelector((store) => store.service)

    return (
        <div className="min-h-screen shadow-2xl bg-[#001d38] py-16">

            <div className="max-w-[1320] mx-auto lg:px-0 px-4">
                {/* Heading */}
                <div className="mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
                        Our <span className="text-white">Treatments</span>

                        <div className="absolute left-0 top-full mt-1 w-[80] h-1 rounded-full bg-white"></div>
                    </h1>
                    <p className="text-white mt-5">
                        We provide advanced medical and surgical care using modern technology and experienced specialists.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">
                    {servicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white/85 hover:bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-200 cursor-pointer border border-gray-100 hover:-translate-y-4"
                        >
                            <img src={service.service_image} className="rounded-xl hover:brightness-105 object-cover h-[180] w-full mb-3" />
                            <div className="mb-4 text-xl text-[#00B4D8] font-bold">
                                {service.service_name}
                            </div>

                            <h3 className="text-md text-gray-800 line-clamp-2 mb-2">
                                {service.short_description}
                            </h3>

                            {/* <p className="text-sm text-gray-500">
                                {service.full_details}
                            </p> */}

                            <Link href={`/treatments/${service.service_slug}`}><button className="mt-4 text-md font-medium bg-[#00B4D8]  hover:bg-blue-600 text-white  px-3 py-1.5 cursor-pointer hover:rounded-3xl duration-300">
                                View Details →
                            </button></Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}
