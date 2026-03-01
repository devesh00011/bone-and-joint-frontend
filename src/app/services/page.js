import React from "react";
import {
    Bone, Activity, HeartPulse, ShieldPlus, Scissors, Baby,
    Smile, Hand, Footprints, Brain, Building2,
    Stethoscope, Syringe,

} from "lucide-react";
import Link from "next/link";
import { ServicesData } from "../api_data/Services";


export default function Services() {



    return (
        <div className="min-h-screen bg-linear-to-b from-[#162737] to-blue-50 py-16">

            <div className="max-w-[1320] mx-auto lg:px-0 px-4">
                {/* Heading */}
                <div className="mb-14">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 relative">
                        Our <span className="text-[#00B4D8]">Services</span>

                        <div className="absolute left-0 top-full mt-1 w-[80] h-1 rounded-full bg-[#00B4D8]"></div>
                    </h1>
                    <p className="text-white mt-5">
                        We provide advanced medical and surgical care using modern technology and experienced specialists.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                    {ServicesData.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
                        >
                            <div className="mb-4 text-blue-600">
                                {service.icon}
                            </div>

                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {service.title}
                            </h3>

                            <p className="text-sm text-gray-500">
                                High-quality {service.title.toLowerCase()} performed by expert surgeons with modern facilities.
                            </p>

                            <Link href={`/services/${service.slug}`}><button className="mt-4 text-sm font-medium text-blue-600 hover:text-blue-900 cursor-pointer">
                                View Details →
                            </button></Link>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
}