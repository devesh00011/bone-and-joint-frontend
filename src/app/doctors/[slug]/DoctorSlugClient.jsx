'use client'
import { get_api } from "@/app/api_helper/api_helper";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DoctorNotFound from "./DoctorNotFound";
import BookAppointMentModel from "@/app/common/BookAppointMentModel";
import React from 'react'
import { MobileNumber } from "@/app/WebSensitives/ContactSensitives";

export default function DoctorSlugClient() {
    const { slug } = useParams();

    const allDoctors = useSelector((state) => state.doctor);

    const specificDocData = allDoctors.filter((item) => item.slug == slug)[0]

    // console.log('specificDocData', specificDocData)

    const [appointmentModel, setAppointmentModel] = useState(false)


    if (!specificDocData) {
        return <DoctorNotFound />
    }

    const { name, post_name, primary_specialization, experience_year, phone_number, email, profile_image, short_description, full_bio, other_services, meta_title, meta_description } = specificDocData

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

            <div className=" text-white">

                {/* Hero Section */}
                <section className="w-full pb-5 bg-[#0B1C2D]">
                    <div className="max-w-[1320] mx-auto px-6 py-12">
                        {/* Breadcrumb */}
                        <p className="text-md text-gray-300 mb-10">
                            <Link href={'/'}><span className="hover:text-[#00B4D8] cursor-pointer transition">
                                Home
                            </span></Link>
                            {" > "}
                            <Link href={`/doctors`}><span className="hover:text-[#00B4D8] cursor-pointer transition">
                                Doctors
                            </span></Link>
                            {" > "}
                            <span className="text-white font-semibold">
                                {name}
                            </span>
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 items-center p-3">

                            {/* Doctor Image */}
                            <div className="relative">
                                <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#00B4D8] rounded-2xl"></div>
                                <Image
                                    src={profile_image}
                                    alt={name}
                                    width={400}
                                    height={400}
                                    className="rounded-2xl shadow-2xl relative z-10 w-full lg:h-[600] sm:h-[500] h-[300] object-cover"
                                />
                            </div>

                            {/* Doctor Info */}
                            <div>
                                <h1 className="lg:text-5xl text-4xl font-bold mb-4 leading-tight">
                                    {name}
                                </h1>

                                <p className="text-[#00B4D8] text-xl font-semibold mb-4">
                                    {short_description}
                                </p>

                                <p className="text-[#00B4D8] text-xl font-semibold mb-4">
                                    {primary_specialization}
                                </p>

                                <div className="flex items-center gap-3 mb-6">
                                    <span className="bg-linear-to-l from-[#00B4D8] to-[#006275] text-white px-4 py-2 rounded-full text-sm">
                                        5 ⭐ Rating
                                    </span>
                                    <span className="bg-white text-[#0B1C2D] px-4 py-2 rounded-full text-sm font-semibold">
                                        {experience_year} Year Experience
                                    </span>
                                </div>

                                <p className="text-gray-300 leading-relaxed mb-8">
                                    {full_bio}
                                </p>

                                <div className="flex flex-wrap gap-4">
                                    <button onClick={() => setAppointmentModel(true)} className="bg-linear-to-r from-[#00B4D8] to-[#006275] px-8 py-4 rounded-full font-semibold hover:bg-[#0096c7] transition shadow-lg">
                                        Book Appointment
                                    </button>

                                    <Link href={`tel:${MobileNumber}`}><button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0B1C2D] transition">
                                        Contact Now
                                    </button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>




                {/* Services Section */}
                <section className="bg-white py-20">
                    <div className="max-w-[1320] mx-auto px-6">
                        <h2 className="text-4xl font-bold text-center text-gray-800  mb-12">
                            Treatments Offered by <span className="text-[#00AED0]">{name}</span>
                        </h2>

                        <div className="grid md:grid-cols-4 gap-6">
                            {other_services.map((item, index) => {
                                return (
                                    <div
                                        key={index}
                                        className="bg-white border-2 hover:border-transparent border-gray-300 shadow-lg text-[#0B1C2D] rounded-2xl p-6 text-center hover:bg-[#00B4D8] hover:text-white transition cursor-pointer"
                                    >
                                        {item}
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>


                {/* Testimonials */}
                <section className="bg-white text-[#0B1C2D] py-20">
                    <div className="max-w-[1320] mx-auto px-6 text-center">
                        <h2 className="text-4xl font-bold mb-12">
                            What Patients Say
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8">

                            <div className="bg-gray-100 p-8 rounded-2xl shadow">
                                <p className="text-gray-600 mb-4">
                                    “Highly professional and caring doctor. My recovery was very fast!”
                                </p>
                                <h4 className="font-semibold">— Patient A</h4>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-2xl shadow">
                                <p className="text-gray-600 mb-4">
                                    “Explained everything clearly and provided excellent treatment.”
                                </p>
                                <h4 className="font-semibold">— Patient B</h4>
                            </div>

                            <div className="bg-gray-100 p-8 rounded-2xl shadow">
                                <p className="text-gray-600 mb-4">
                                    “Best surgical experience. Very skilled and supportive.”
                                </p>
                                <h4 className="font-semibold">— Patient C</h4>
                            </div>

                        </div>
                    </div>
                </section>


                {/* CTA Section */}
                <section className="bg-linear-to-r from-[#274a6d] to-gray-950 py-16 mb-16 text-center">
                    <div className="max-w-[900] mx-auto px-6">
                        <h2 className="text-4xl font-bold mb-6 text-white">
                            Ready to Book Your Appointment?
                        </h2>

                        <p className="text-white mb-8">
                            Experience expert medical care with compassion and precision.
                        </p>

                        <button onClick={() => setAppointmentModel(true)} className="bg-white text-[#0B1C2D] px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-xl">
                            Schedule Appointment
                        </button>
                    </div>
                </section>

            </div>
        </>
    )
}
