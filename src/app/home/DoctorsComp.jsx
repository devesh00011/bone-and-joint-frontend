'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Doctors } from '../api_data/Doctors'
import { useSelector } from 'react-redux'

export default function DoctorsComp() {

    const doctorsData = useSelector((store) => store.doctor)
    const topDoctors = doctorsData.filter(item => item.is_featured)

    return (
        <section className="w-full lg:py-16 py-12 bg-gray-200 lg:px-6 px-4">
            <div className="max-w-330 mx-auto">

                {/* SECTION HEADER */}
                <div className="lg:text-start text-center lg:mb-16 mb-8 ">
                    <Link href={'/doctors'}><h2 className="text-4xl cursor-pointer hover:text-[#00616b] duration-300 md:text-5xl font-extrabold text-gray-800">
                        Our Medical Expertise
                    </h2></Link>
                    <div className="w-16 h-1 bg-[#00B4D8] lg:mx-0 mx-auto mt-4 rounded-full" />
                    <p className="mt-5 text-gray-600 max-w-xl lg:mx-0 mx-auto">
                        Comprehensive orthopaedic care delivered by experienced specialists
                    </p>
                </div>

                {/* SPECIALITIES */}
                {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-20">
                    {specialities.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl px-6 py-6 text-center
                         border border-gray-100
                         hover:scale-105 hover:border-blue-200
                         duration-300"
                        >
                            <p className="font-semibold text-gray-800">
                                {item}
                            </p>
                        </div>
                    ))}
                </div> */}

                {/* DOCTORS LIST */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {topDoctors.map((doc, index) => {
                        const { name, slug, profile_image, primary_specialization } = doc
                        return (
                            <div
                                key={index}
                                className="rounded-3xl border border-gray-100 shadow-sm
        hover:shadow-xl hover:-translate-y-3
        duration-300 w-full h-[300] bg-white p-8 relative group"
                            >
                                {/* Avatar */}
                                <Image
                                    src={profile_image}
                                    alt={name}
                                    fill
                                    quality={75}
                                    className="absolute z-20 top-0 left-0 w-full h-full rounded-2xl object-cover transition-all duration-300 ease-out"
                                />

                                <div className="bg-linear-to-t from-black via-black/70 to-transparent w-full h-full absolute top-0 left-0 lg:opacity-0 group-hover:opacity-100 duration-200 rounded-2xl z-20"></div>

                                <div className="absolute lg:bottom-6 lg:left-6 bottom-6 left-1/3 -translate-x-20 z-30 lg:opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out text-white">
                                    <h2 className="text-xl font-extrabold">{name}</h2>
                                    <p className="text-md text-[#00B4D8] font-semibold "> {primary_specialization}</p>

                                    <Link href={`/doctors/${slug}`}>
                                        <button className="bg-white text-black font-semibold rounded-full px-3 text-sm py-1 hover:bg-[#004350] mt-2 duration-300 hover:text-white cursor-pointer">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
