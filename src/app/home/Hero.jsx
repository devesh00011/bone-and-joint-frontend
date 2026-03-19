'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import Overlay5 from '../common/Overlays'
import Link from 'next/link'
import BookAppointMentModel from '../common/BookAppointMentModel'
import { MobileNumber } from '../WebSensitives/ContactSensitives'

export default function Hero() {

    const [appointmentModel, setAppointmentModel] = useState(false)

    return (
        <>
            <BookAppointMentModel
                appointmentModel={appointmentModel}
                setAppointmentModel={setAppointmentModel}
            />
            {appointmentModel
                &&
                <div onClick={() => setAppointmentModel(false)} className='fixed top-0 left-0 bg-black/90 z-50 w-full h-screen'></div>
            }
            <section className='relative bg-linear-to-br from-[#0096c7] via-[#00b4d8] to-[#48cae4] w-full lg:min-h-[90vh] min-h-screen text-white overflow-hidden'>

                {/* fixed [#00B4D8] buttons */}


                {/* Overlay */}
                <div className='absolute inset-0 z-10'>
                    <Overlay5 />
                </div>

                <div className='relative z-20 flex items-center lg:min-h-[90vh] min-h-screen'>
                    <div className='max-w-7xl mx-auto w-full px-6 lg:px-0 lg:py-16 py-8'>

                        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>

                            {/* LEFT CONTENT */}
                            <div className='text-left space-y-6'>

                                <span className='inline-block bg-white/20 backdrop-blur-md px-4 py-1 rounded-full text-sm tracking-wide'>
                                    Advanced Orthopaedic Excellence
                                </span>

                                <h1 className='text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight'>
                                    Western Rajasthan's <br />
                                    <span className='text-white drop-shadow-lg'>
                                        First Robotic Knee Replacement Center
                                    </span>
                                </h1>

                                <p className='text-lg text-white/90 max-w-xl'>
                                    Delivering world-class orthopaedic care for joints, spine and trauma using
                                    modern robotic technology and compassionate treatment.
                                </p>

                                {/* Buttons */}
                                <div className='md:block hidden'>

                                    <div className='flex flex-col sm:flex-row gap-4 pt-4'>
                                        <button onClick={() => setAppointmentModel(true)} className='bg-white text-[#0096c7] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300'>
                                            Book Appointment
                                        </button>

                                        <Link href={`tel:${MobileNumber}`}>
                                            <button className='border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0096c7] transition-all duration-300'>
                                                Contact Us
                                            </button>
                                        </Link>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <div className='flex gap-10 pt-8 text-white'>
                                    <div>
                                        <p className='text-2xl font-bold'>20+</p>
                                        <p className='text-sm text-white/80'>Years Experience</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl font-bold'>10k+</p>
                                        <p className='text-sm text-white/80'>Patients Treated</p>
                                    </div>
                                    <div>
                                        <p className='text-2xl font-bold'>24/7</p>
                                        <p className='text-sm text-white/80'>Emergency Care</p>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className='flex justify-center lg:justify-end'>
                                <div className='relative lg:w-[500] lg:h-[550] w-[300] h-[300] bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl p-6'>

                                    <div className='relative w-full h-full'>
                                        <Image
                                            fill
                                            src='/banner.png'
                                            alt='Robotic Knee Replacement'
                                            className='object-contain'
                                            priority
                                        />
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
