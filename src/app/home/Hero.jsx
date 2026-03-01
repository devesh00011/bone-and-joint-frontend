import Image from 'next/image'
import React from 'react'
import Overlay5 from '../common/Overlays'
import Link from 'next/link'

export default function Hero() {
    return (
        <section className='relative bg-[#00B4D8] w-full lg:pt-10 pt-10 lg:min-h-[90vh] min-h-screen text-white overflow-hidden'>

            {/* Background Image */}
            {/* <Image
                quality={75}
                fill
                priority
                className='object-cover object-center'
                src="/banner.png"
                alt="Bone and Joint Hospital Jodhpur"
            /> */}

            {/* Overlay */}
            <div className='absolute inset-0 z-10'>
                <Overlay5 />
            </div>

            {/* CONTENT */}
            <div className='relative z-20 flex items-center justify-between min-h-screen lg:min-h-[90vh]'>
                <div className='max-w-330 mx-auto w-full px-4 sm:px-6 lg:px-0 lg:py-0 py-14'>

                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                        {/* LEFT CONTENT */}
                        <div className='text-left'>
                            <h1 className='text-4xl sm:text-3xl md:text-4xl capitalize  lg:text-[52px] font-extrabold leading-tight  lg:mx-0'>
                                Western Rajasthan's first Robotic Knee Replacement Center
                            </h1>

                            <p className='mt-5 text-base sm:text-lg text-gray-200 max-w-xl mx-auto lg:mx-0'>
                                Expert orthopaedic care for joints, spine and trauma with
                                modern technology and compassionate treatment.
                            </p>

                            <div className='mt-8 flex flex-row gap-4 justify-center lg:justify-start'>
                                <Link href="/appointment">
                                    <button className='bg-[#00B4D8] cursor-pointer hover:bg-[#00B4D8] lg:px-8 px-6 py-4 rounded-full lg:text-md text-sm font-semibold duration-200 w-full sm:w-auto'>
                                        Book Appointment
                                    </button>
                                </Link>

                                <Link href="tel:+919999999999">
                                    <button className='border border-white cursor-pointer lg:px-8 px-6 py-4 rounded-full lg:text-md text-sm font-semibold hover:bg-white hover:text-black duration-200 w-full sm:w-auto'>
                                        Contact Us
                                    </button>
                                </Link>
                            </div>

                            {/* Highlights */}
                            <div className='mt-10 flex justify-center lg:justify-start gap-8 text-sm text-gray-200'>
                                <div>
                                    <p className='text-xl font-bold text-white'>20+</p>
                                    <p>Years Experience</p>
                                </div>
                                <div>
                                    <p className='text-xl font-bold text-white'>10k+</p>
                                    <p>Patients Treated</p>
                                </div>
                                <div>
                                    <p className='text-xl font-bold text-white'>24/7</p>
                                    <p>Emergency Care</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FORM
                        <div className='w-full max-w-md justify-self-end bg-white text-black rounded-2xl shadow-2xl p-6 sm:p-8 mx-auto lg:mx-0'>
                            <h2 className='text-xl sm:text-2xl font-bold mb-2 text-center lg:text-left'>
                                Enquiry Now
                            </h2>
                            <p className='text-sm text-gray-600 mb-6 text-center lg:text-left'>
                                Get expert consultation from our orthopaedic specialists
                            </p>

                            <form className='space-y-4'>
                                <input
                                    type='text'
                                    placeholder='Full Name'
                                    className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]'
                                />

                                <input
                                    type='tel'
                                    placeholder='Phone Number'
                                    className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]'
                                />

                                <select
                                    className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]'
                                >
                                    <option>Choose Service</option>
                                    <option>Knee Replacement</option>
                                    <option>Joint Replacement</option>
                                    <option>Spine Treatment</option>
                                    <option>Fracture & Trauma</option>
                                </select>

                                <textarea
                                    rows='3'
                                    placeholder='Your Message'
                                    className='w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#00B4D8]'
                                />

                                <button
                                    type='submit'
                                    className='w-full bg-[#00B4D8] hover:bg-[#00B4D8] text-white py-3 rounded-full font-semibold duration-200'
                                >
                                    Submit Enquiry
                                </button>

                                <p className='text-[12px] text-gray-500 text-center'>
                                    Your information is 100% confidential
                                </p>
                            </form>
                        </div> */}

                        <div className='flex items-center justify-end'>
                            <div className='w-full h-[600] relative '>
                                <Image fill
                                    src={'/banner.png'}
                                    className='w-full h-full  object-contain absolute top-0 left-0'
                                />
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </section>
    )
}
