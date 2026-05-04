'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { get_api } from '../api_helper/api_helper'

export default function AboutUs() {

    const [aboutUsData, setAboutUsData] = useState(null)

    const fetchAboutUsContent = async () => {
        try {
            const response = await get_api({
                params: null,
                path: 'about-us/view'
            })

            if (response.status === 200) {
                setAboutUsData(response.data.data)
            } else {
                setAboutUsData(null)
            }

        } catch (error) {
            console.log(error.message || 'Api Error')
        }
    }

    useEffect(() => {
        fetchAboutUsContent()
    }, [])

    // ✅ Safe fallback values
    const description = aboutUsData?.description || "Loading content..."
    const pc_image = aboutUsData?.pc_image || "/aboutus.jpeg"
    const mobile_image = aboutUsData?.mobile_image || "/aboutus.jpeg"

    const points = aboutUsData?.points?.length
        ? aboutUsData.points
        : [
            'Experienced orthopaedic care',
            'Advanced surgical procedures',
            'Patient-centric treatment',
            '24/7 emergency care'
        ]

    return (
        <section className="w-full lg:py-24 pb-5 bg-[#0b1c2d] lg:px-6 px-4">
            <div className="max-w-[1320] mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] lg:gap-10 md:gap-5 items-center">

                    {/* LEFT IMAGE */}
                    <div className="md:block hidden relative my-10 w-full h-[330] overflow-hidden shadow-lg">
                        <Image
                            src={pc_image}
                            alt="About Hospital"
                            fill
                            className="object-cover object-center rounded"
                        />
                    </div>

                    <div className="block md:hidden relative my-10 w-full h-[320] overflow-hidden shadow-lg">
                        <Image
                            src={mobile_image}
                            alt="About Hospital"
                            fill
                            className="object-cover object-center rounded"
                        />
                    </div>
                    


                    {/* RIGHT CONTENT */}
                    <div>
                        <h2 className="text-3xl md:text-4xl hover:text-[#00B4D8] duration-300 font-extrabold text-white">
                            About Us
                        </h2>

                        <div className="w-16 h-1 bg-[#00B4D8] mt-1 rounded-full" />

                        <p className="mt-3 text-sm text-gray-200 lg:text-justify leading-relaxed tracking-widest">
                            {description}
                        </p>

                        {/* HIGHLIGHTS (Dynamic from DB) */}
                        <div className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-y-2">
                            {points.map((item, index) => (
                                <div key={index} className="flex cursor-default items-start gap-3 group">
                                    <span className="w-2.5 h-2.5 mt-2 bg-[#00B4D8] rounded-full" />
                                    <span className="text-gray-50 lg:text-[13px] text-sm group-hover:text-[#00B4D8] duration-300">
                                        {item}
                                        <div className='w-[30%] group-hover:w-[50%] group-hover:bg-[#00B4D8] duration-300 h-[2.5px] mt-2 rounded-full bg-white'></div>
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* BUTTON */}
                        <div className="mt-3">
                            <Link href="/about">
                                <button className="bg-[#00B4D8] hover:bg-[#00B4D8] text-white px-8 py-1.5 cursor-pointer hover:brightness-90 rounded-full text-sm font-semibold duration-200">
                                    Know More About Us
                                </button>
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}