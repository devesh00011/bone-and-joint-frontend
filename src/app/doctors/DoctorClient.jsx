'use client'
import React from 'react'
import Link from "next/link";
import { useSelector } from "react-redux";

export default function DoctorClient() {

    const allDoctors = useSelector((state) => state.doctor);

    return (
        <div className="min-h-screen bg-white py-8 text-white">
            <div className="max-w-[1320] mx-auto lg:px-6 px-3">

                {/* Heading */}
                <div className="text-center lg:mb-14 mb-8">
                    <h1 className="text-5xl text-gray-800 font-bold mb-4">
                        Our Doctors
                    </h1>
                    <p className="text-gray-800">
                        Meet our highly experienced medical professionals dedicated to excellence.
                    </p>
                </div>

                {/* Table */}
                <div className="overflow-x-auto bg-white rounded shadow-2xl">
                    <table className="w-full text-left text-[#0B1C2D]">

                        {/* Table Head */}
                        <thead className="bg-[#0B2436] text-white">
                            <tr className=''>
                                <th className="px-10 py-4">Doctor</th>
                                <th className="px-10 py-4 ">Specialization</th>
                                <th className=" px-10 py-4">About</th>
                                <th className="px-10 py-4 text-center">Profile</th>
                            </tr>
                        </thead>

                        {/* Table Body */}
                        <tbody>
                            {allDoctors.map((item, index) => (
                                <tr
                                    key={index}
                                    className="border-b border-gray-200 hover:bg-gray-50 transition"
                                >
                                    {/* Doctor Info + Image */}
                                    <td className="px-10  py-5">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.profile_image}
                                                alt={item.name}
                                                className="w-14 h-14 rounded-full object-cover"
                                            />
                                            <span className="lg:font-bold font-normal text-[#00B4D8]">
                                                {item.name}
                                            </span>
                                        </div>
                                    </td>

                                    {/* Specialization */}
                                    <td className=" px-10 py-6 ">
                                        {item.primary_specialization}
                                    </td>

                                    {/* Description */}
                                    <td className=" px-10 py-6 text-sm text-gray-600">
                                        {item.short_description}
                                    </td>

                                    {/* View Button */}
                                    <td className="px-10 py-6 text-center">
                                        {index < 4 && (
                                            <Link
                                                href={`/doctors/${item.slug}`}
                                                className="bg-[#00B4D8] text-white px-5 py-2 rounded-lg font-semibold hover:bg-[#0096c7] transition"
                                            >
                                                View
                                            </Link>
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
