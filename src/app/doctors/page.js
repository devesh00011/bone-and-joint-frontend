'use client'
import Link from "next/link";
import { Doctors } from "../api_data/Doctors";
import { useEffect, useState } from "react";
import { get_api } from "../api_helper/api_helper";

export default function DoctorsPage() {

    const [doctors, setDoctors] = useState([])

    const fetchAllDoctors = async () => {

        try {
            const res = await get_api({
                params: null,
                path: 'doctor/view'
            })
            if (res) setDoctors(res?.response)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllDoctors()
    }, [])

    return (
        <div className="min-h-screen bg-linear-to-b from-[#0B2436] to-transparent py-8 text-white">

            <div className="max-w-[1320] mx-auto px-6">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h1 className="text-5xl text-white font-bold mb-4">
                        Our Doctors
                    </h1>
                    <p className="text-white">
                        Meet our highly experienced medical professionals dedicated to excellence.
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded-2xl shadow-2xl">

                    <table className="w-full text-left text-[#0B1C2D]">
                        {/* Table Body */}
                        <tbody>
                            {Doctors.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                                >
                                    <td className="px-6 py-6 font-bold text-[#00B4D8]">
                                        {item.name}
                                    </td>

                                    <td className="px-6 py-6 md:block hidden">
                                        {item.specialization}
                                    </td>

                                    <td className="px-6 py-6 text-sm text-gray-600">
                                        {item.short_description}
                                    </td>

                                    <td className="px-6 py-6 text-center">
                                        {index < 4 ? (
                                            <Link
                                                href={`/doctors/${item.doctor_slug}`}
                                                className="bg-[#00B4D8] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#0096c7] transition"
                                            >
                                                View
                                            </Link>
                                        ) : (
                                            <div></div>
                                        )}
                                    </td>

                                </tr>
                            ))}
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    );
}
