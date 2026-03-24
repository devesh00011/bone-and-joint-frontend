"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import BookAppointMentModel from '../common/BookAppointMentModel'
import { MobileNumber, TelePhoneNumber } from '../WebSensitives/ContactSensitives'


export default function AboutClient() {
    const [appointmentModel, setAppointmentModel] = useState(false)

    const Doctors = useSelector((store) => store.doctor)

    const services = useSelector((store) => store.service)

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
            <section className="w-full bg-white">

                {/* ================= HERO SECTION ================= */}
                <div className="relative w-full h-screen">

                    <Image
                        alt="hospital banner image"
                        src="/about.png"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-[#0B1C2D]/95"></div>

                    <div className="absolute inset-0 flex lg:py-20 py-10">
                        <div className="max-w-[1320] mx-auto lg:px-0 px-4 w-full">

                            <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                                About <span className="text-[#00B4D8]">Us</span>
                            </h2>

                            <div className="w-20 h-[4] bg-[#00B4D8] mt-4 rounded-full" />

                            <p className="mt-6 text-gray-200 max-w-2xl text-justify tracking-wide">
                                Bone & Joint Hospital is a trusted orthopaedic care center in Jodhpur,
                                dedicated to providing advanced treatment for bone, joint, and spine
                                conditions. With decades of experience, we combine medical expertise
                                with compassionate care to help patients regain mobility and live pain-free lives.
                                Bone & Joint Hospital is a trusted orthopaedic care center in Jodhpur,
                                dedicated to providing advance
                                Bone & Joint Hospital is a trusted orthopaedic care center in Jodhpur,
                                dedicated to providing advance
                            </p>

                            <div className='flex flex-col sm:flex-row gap-4 my-5 pt-4'>
                                <button onClick={() => setAppointmentModel(true)} className='bg-white text-[#0096c7] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold shadow-xl hover:scale-105 transition-all duration-300'>
                                    Book Appointment
                                </button>

                                <Link href={`tel:${MobileNumber}`}>
                                    <button className='border-2 text-white border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-[#0096c7] transition-all duration-300'>
                                        Contact Us
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </section>

            <section className="w-full bg-white"> <div className="max-w-[1320] mx-auto px-6 lg:py-20 py-10">

                <h3 className="lg:text-5xl text-4xl  font-bold text-gray-800 text-center lg:mb-14 mb-5">
                    Our Services
                </h3>

                <div className="grid md:grid-cols-3 grid-cols-1 gap-10">

                    {services.map((service, index) => (

                        <Link key={index} href={`/services/${service.service_slug}`}>
                            <div className=' shadow-xl group overflow-hidden rounded-xl'>

                                <img src={service.service_image} className='rounded-t-xl group-hover:scale-105 duration-500 cursor-pointer' />

                                <div
                                    key={index}
                                    className="bg-[#0B1C2D] cursor-pointer shadow-lg text-white p-6 rounded-b-xl group-hover:bg-[#007288] transition"
                                >
                                    {service.service_name}

                                    <p className='text-gray-400 group-hover:text-white'>{service.short_description}</p>

                                </div>

                            </div>
                        </Link>
                    ))}

                </div>
            </div>
            </section>


            <section className='w-full bg-white'>
                <div className="max-w-[1320] mx-auto px-6 lg:py-20 py-10">

                    <h3 className="lg:text-5xl text-4xl font-bold text-gray-800 text-center lg:mb-14 mb-5">
                        Our Experience
                    </h3>

                    <div className="grid md:grid-cols-4 gap-10 text-center">

                        {[
                            { number: "20+", label: "Years of Experience" },
                            { number: "5000+", label: "Successful Surgeries" },
                            { number: "50K+", label: "Happy Patients" },
                            { number: "24/7", label: "Emergency Services" }
                        ].map((item, index) => (
                            <div key={index} className='border-r-4 border-b-2 hover:shadow-md duration-300 py-4 shadow-xs rounded-xl shadow-[#00B4D8] border-[#00B4D8]'>
                                <h4 className="text-4xl font-bold text-[#00B4D8]">
                                    {item.number}
                                </h4>
                                <p className="mt-3 text-gray-800 font-medium">
                                    {item.label}
                                </p>
                            </div>
                        ))}

                    </div>
                </div>
            </section>





            <section className='w-full bg-gray-100'>
                <div className=" lg:py-20 py-10">
                    <div className="max-w-[1320] mx-auto px-6">

                        <h3 className="lg:text-5xl text-4xl font-bold text-gray-800 text-center mb-14">
                            Our Expert Doctors
                        </h3>

                        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-8">

                            {Doctors?.map((item, index) => (
                                <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
                                    <div className="relative w-full h-[250] rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src={item.profile_image}
                                            alt="Doctor"
                                            fill
                                            className="object-cotain"
                                        />
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-800">
                                        {item.name}
                                    </h4>
                                    <p className="text-[#00B4D8] mt-2 font-bold text-lg">
                                        {item.primary_specialization}
                                    </p>

                                    <Link href={`/doctors/${item.slug}`}>
                                        {index < 4 &&
                                            <p className='w-full py-1 text-center bg-[#00B4D8] text-white rounded-lg my-2'>View Details</p>
                                        }
                                    </Link>
                                </div>
                            ))}

                        </div>

                        <div className='flex justify-center'>
                            <div className="text-center mt-10">
                                <Link
                                    href="/doctors"
                                    className="bg-[#0B1C2D] px-20 text-white w-[500] py-3 rounded-full hover:bg-[#00B4D8] transition"
                                >
                                    View All Doctors
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            <section className='w-full mb-10'>
                <div className="bg-[#00B4D8] px-3 py-16 text-center text-white">
                    <h3 className="text-4xl font-bold mb-6">
                        Ready to Book Your Appointment?
                    </h3>

                    <Link
                        href="/contact"
                        className="bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
                    >
                        Contact Us
                    </Link>
                </div>

            </section>
        </>

    )
}
