import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function About() {
    return (
        <>
            <section className="w-full bg-white">

                {/* ================= HERO SECTION ================= */}
                <div className="relative w-full h-[500]">

                    <Image
                        alt="hospital banner image"
                        src="/banner.jpg"
                        fill
                        className="object-cover"
                        priority
                    />

                    <div className="absolute inset-0 bg-[#0B1C2D]/75"></div>

                    <div className="absolute inset-0 flex py-16">
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
                        </div>
                    </div>
                </div>

            </section>

            <section className="w-full bg-white"> <div className="max-w-[1320] mx-auto px-6 py-20">

                <h3 className="lg:text-5xl text-4xl  font-bold text-gray-800 text-center mb-14">
                    Our Services
                </h3>

                <div className="grid md:grid-cols-4 gap-8">

                    {[
                        "Joint Replacement Surgery",
                        "Fracture & Trauma Care",
                        "Spine Treatment",
                        "Sports Injury Care",
                        "Arthroscopy",
                        "Physiotherapy",
                        "Pain Management",
                        "Rehabilitation Programs"
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#0B1C2D] text-white p-6 rounded-xl text-center hover:bg-[#00B4D8] transition"
                        >
                            {service}
                        </div>
                    ))}

                </div>
            </div>
            </section>


            <section className='w-full bg-white'>
                <div className="max-w-[1320] mx-auto px-6 py-20">

                    <h3 className="lg:text-5xl text-4xl font-bold text-gray-800 text-center mb-14">
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
                <div className=" py-20">
                    <div className="max-w-[1320] mx-auto px-6">

                        <h3 className="lg:text-5xl text-4xl font-bold text-gray-800 text-center mb-14">
                            Our Expert Doctors
                        </h3>

                        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-10">

                            {[1, 2, 3, 4].map((item) => (
                                <div key={item} className="bg-white rounded-2xl shadow-xl p-6 text-center">
                                    <div className="relative w-full h-[250] rounded-xl overflow-hidden mb-4">
                                        <Image
                                            src="/d1.jpg"
                                            alt="Doctor"
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    <h4 className="text-xl font-bold text-gray-800">
                                        Dr. Specialist {item}
                                    </h4>
                                    <p className="text-[#00B4D8] mt-2">
                                        Orthopaedic Surgeon
                                    </p>
                                </div>
                            ))}

                        </div>

                        <div className='flex justify-end'>
                            <div className="text-center mt-10">
                                <Link
                                    href="/doctors"
                                    className="bg-[#0B1C2D] text-white px-8 py-3 rounded-full hover:bg-[#00B4D8] transition"
                                >
                                    View All Doctors
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>





            {/* <section className='w-full mb-10'>
                <div className="bg-[#00B4D8] py-16 text-center text-white">
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

            </section> */}
        </>

    )
}
