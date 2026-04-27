'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { MobileNumber } from '../WebSensitives/ContactSensitives'

export default function BlogsClient() {


    const data = [
        'Education',
        'Technology',
        'Programming',
        'Web Development',
        'Career',
        'Business',
        'Finance',
        'Health',
        'Lifestyle',
        'Travel',
        'Food'
    ]
    const [selectedCategory, setSelectedCategory] = useState('all')
    return (
        <div className='w-full h-full'>

            {/* category wise blog section */}
            <section className='w-full h-full bg-white'>
                <div className='max-w-330 mx-auto lg:px-6 px-3 lg:py-10 py-6'>
                    <div className='grid lg:grid-cols-[30%_auto] grid-cols-1 gap-10'>
                        <div>
                            <div className='p-5 rounded-2xl mb-6 bg-white h-fit shadow-xl border-2 border-gray-300'>
                                <h2 className='relative text-2xl font-semibold text-gray-800 mb-5'>Categories
                                    <div className='absolute top-full left-0 w-12 h-1 rounded-full bg-[#00B4D8]'></div>
                                </h2>
                                <button onClick={() => setSelectedCategory('all')} className={`${selectedCategory == 'all' ? 'bg-[#00B4D8] text-white border-transparent' : 'bg-white text-bg-[#00B4D8] '} hover:bg-[#00B4D8] hover:text-white  rounded-full cursor-pointer border-2 border-gray-400 hover:scale-[1.1] duration-100 px-4 py-1 hover:border-transparent border-bg-[#00B4D8] m-2`}>All</button>
                                {data.map((item, index) => {
                                    return (
                                        <button onClick={() => setSelectedCategory(item)} key={index} className={`${selectedCategory == item ? 'bg-[#00B4D8] text-white border-transparent' : 'bg-white text-bg-[#00B4D8] '} rounded-full cursor-pointer hover:bg-[#00B4D8] hover:text-white duration-100 border-2 border-gray-400 px-4 py-1 shadow-md hover:scale-[1.1] hover:border-transparent border-bg-[#00B4D8] m-2.5`}>{item}</button>
                                    )
                                })}

                            </div>

                            <div className='w-full h-fit px-5 py-7 bg-white shadow-2xl border-2 border-gray-300 rounded-2xl '>

                                <h1 className='text-xl font-bold text-[#172838]'>
                                    Ready to Book an Appointment?
                                </h1>

                                <p className='text-gray-600 mt-1'>
                                    Get expert medical consultation from experienced doctors.
                                    Choose your preferred time and connect instantly for better healthcare.
                                </p>

                                {/* Features */}
                                <ul className='text-sm text-gray-700 mt-3 space-y-1'>
                                    <li>✔ Instant appointment booking</li>
                                    <li>✔ Certified & experienced doctors</li>
                                    <li>✔ Quick response & support</li>
                                </ul>

                                {/* Buttons */}
                                <div className='grid grid-cols-2 items-center w-full my-4 gap-x-3'>

                                    <button className='bg-red-600 py-2 hover:bg-red-700 duration-100 rounded-3xl text-white cursor-pointer'>
                                        <Link href={`tel:${MobileNumber}`}> Call Now </Link>
                                    </button>

                                    <button className='bg-green-600 py-2 hover:bg-green-700 duration-100 text-white cursor-pointer rounded-3xl'>
                                        Book Now
                                    </button>

                                </div>

                                {/* Extra info */}
                                <p className='text-xs text-gray-500 text-center'>
                                    Available 24/7 • Fast & Secure Booking
                                </p>

                            </div>


                        </div>

                        <div className='grid sm:grid-cols-2 gap-10'>
                            {[1, 2, 3, 4, 5, 6].map((item, index) => {
                                return (
                                    <Link key={index} href={`/blogs/category/${item}`}><div key={index} className='group border-2 cursor-pointer bg-white border-gray-200 hover:shadow-lg shadow-md rounded-2xl'>
                                        <div className='w-full h-[190] relative overflow-hidden'>
                                            <Image alt='blog image' fill src={'/banner.jpg'} className='w-full h-full group-hover:scale-[1.1] duration-300  rounded-t-xl object-cover absolute left-0 top-0' />
                                        </div>
                                        <div className='p-5'>
                                            <h2 className='text-xl font-semibold group-hover:text-[#00B4D8] duration-300'>{index + 1}. What is difference between div and section ?</h2>
                                            <p className='border-b-2 border-gray-200 pb-1.5 line-clamp-2 group-hover:text-[#00B4D8] duration-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam.</p>
                                            <p></p>
                                            <p className='mt-1.5 text-gray-800 font-semibold'>By Dr. Rajiv Chouhan</p>
                                            <p className='text-gray-800 font- '>21, March 2026 | <span> 9 min read time</span></p>
                                        </div>
                                    </div></Link>
                                )
                            })}
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}
