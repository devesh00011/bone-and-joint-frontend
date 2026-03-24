'use client'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function AboutUs() {

    const Highlights = [
        'Experienced orthopaedic ',
        'Advanced surgical',
        'Patient-centric treatment ',
        ' 24/7 emergency care'
    ]

    return (
        <section className="w-full  lg:py-24 pb-5 bg-[#0b1c2d] lg:px-6 px-4">
            <div className="max-w-330 mx-auto">

                <div className="grid grid-cols-1 lg:grid-cols-[60%_auto] lg:gap-10 gap-5 items-center">

                    {/* LEFT IMAGE */}
                    <div className="relative w-full lg:my-0 my-10 lg:h-[430] h-[400] overflow-hidden shadow-lg">
                        <Image
                            src="/about.png"   // you can change later
                            alt="Bone and Joint Hospital Jodhpur"
                            fill
                            className="object-cover lg:object-center object-left rounded"
                        />
                    </div>

                    {/* RIGHT CONTENT */}
                    <div className=''>
                        <h2 className="text-3xl md:text-4xl hover:text-[#00B4D8] duration-300 font-extrabold text-white">
                            About Us
                        </h2>

                        <div className="w-16 h-1 bg-[#00B4D8] mt-1 rounded-full" />

                        <p className="mt-3 text-gray-200 lg:text-justify leading-relaxed tracking-widest">
                            Bone & Joint Hospital is a trusted orthopaedic care center in Jodhpur,
                            dedicated to providing advanced treatment for bone, joint, and spine
                            conditions. With decades of experience, we combine medical expertise
                            with compassionate care to help patients regain mobility and live pain-free lives.
                        </p>


                        {/* HIGHLIGHTS */}
                        <div className="mt-5 grid sm:grid-cols-2 grid-cols-1 gap-y-2">

                            {Highlights.map((item, index) => {
                                return (
                                    <div key={index} className="flex cursor-default items-start gap-3 group">
                                        <span className="w-2.5 h-2.5 mt-2 bg-[#00B4D8] rounded-full " />
                                        <span className="text-gray-50 lg:text-[15px] text-sm group-hover:text-[#00B4D8] duration-300">
                                            {item}
                                            <div className='w-[30%] group-hover:w-[50%] group-hover:bg-[#00B4D8] duration-300 h-[2.5] mt-2 rounded-full bg-white'></div>
                                        </span>
                                    </div>
                                )
                            })}
                        </div>



                        <div className="mt-10">
                            <Link href="/about">
                                <button className="bg-[#00B4D8] hover:bg-[#00B4D8] text-white px-8 py-3 rounded-full text-sm font-semibold duration-200">
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
