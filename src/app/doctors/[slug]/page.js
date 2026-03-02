'use client'
import { Doctors } from "@/app/api_data/Doctors";
import { get_api } from "@/app/api_helper/api_helper";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function DoctorPage() {
    const { slug } = useParams();   // ✅ correct way
    console.log('slug', slug)

    // const specificDocData = async () => {
    //     try {
    //         const res = await get_api({
    //             params: slug,
    //             path: 'doctor/specific'
    //         })
    //         console.log(res)
    //     } catch (error) {
    //         return console.error(error)
    //     }
    // }

    const specificDocData = Doctors.filter((item, index) => item.doctor_slug == slug)[0]

    const { name, specialization, qualification, experience, hospital_role, image, achievements, services, description, rating } = specificDocData

    // useEffect(() => {
    //     if (slug) {
    //         specificDocData()
    //     }
    // }, [slug]);

    return (
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
                            name
                        </span>
                    </p>
                    <div className="grid md:grid-cols-2 gap-12 items-center p-3">

                        {/* Doctor Image */}
                        <div className="relative">
                            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-[#00B4D8] rounded-2xl"></div>
                            <Image
                                src="/d1.jpg"
                                // alt={name}
                                width={400}
                                height={400}
                                className="rounded-2xl shadow-2xl relative z-10 w-full h-[400] object-cover"
                            />
                        </div>

                        {/* Doctor Info */}
                        <div>
                            <h1 className="lg:text-5xl text-4xl font-bold mb-4 leading-tight">
                                {name}
                            </h1>

                            <p className="text-[#00B4D8] text-xl font-semibold mb-4">
                                {specialization}
                            </p>

                            <div className="flex items-center gap-3 mb-6">
                                <span className="bg-linear-to-l from-[#00B4D8] to-[#006275] text-white px-4 py-2 rounded-full text-sm">
                                    ⭐ {rating} Rating
                                </span>
                                <span className="bg-white text-[#0B1C2D] px-4 py-2 rounded-full text-sm font-semibold">
                                    experience
                                </span>
                            </div>

                            <p className="text-gray-300 leading-relaxed mb-8">
                                {description}
                            </p>

                            <div className="flex flex-wrap gap-4">
                                <button className="bg-linear-to-r from-[#00B4D8] to-[#006275] px-8 py-4 rounded-full font-semibold hover:bg-[#0096c7] transition shadow-lg">
                                    Book Appointment
                                </button>

                                <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-[#0B1C2D] transition">
                                    Contact Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Qualifications & Expertise */}
            <section className="bg-white text-[#0B1C2D] py-20">
                <div className="max-w-[1320] mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Professional Expertise
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-3">Qualifications</h3>
                            <p className="text-gray-600">
                                qualification
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-3">Specializations</h3>
                            <p className="text-gray-600">
                                <span>specialization</span>
                            </p>
                        </div>

                        {/* <div className="bg-gray-50 p-8 rounded-2xl shadow hover:shadow-xl transition">
                            <h3 className="text-xl font-semibold mb-3">Achievements</h3>
                            {achievements.map((item, index) => <p key={index} className="text-gray-600">
                                {item}</p>)}
                        </div> */}
                    </div>
                </div>
            </section>


            {/* Services Section */}
            <section className="bg-[#0B1C2D] py-20">
                <div className="max-w-[1320] mx-auto px-6">
                    <h2 className="text-4xl font-bold text-center  mb-12">
                        Services Offered by <span className="text-[#00AED0]">{name}</span>
                    </h2>

                    {/* <div className="grid md:grid-cols-4 gap-6">
                        {services.map((item, index) => {
                            return (
                                <div
                                    key={index}
                                    className="bg-white text-[#0B1C2D] rounded-2xl p-6 text-center hover:bg-[#00B4D8] hover:text-white transition cursor-pointer"
                                >
                                    {item}
                                </div>
                            )
                        })}

                    </div> */}
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

                    <button className="bg-white text-[#0B1C2D] px-10 py-4 rounded-full font-semibold hover:bg-gray-200 transition shadow-xl">
                        Schedule Appointment
                    </button>
                </div>
            </section>

        </div>
    );
}
