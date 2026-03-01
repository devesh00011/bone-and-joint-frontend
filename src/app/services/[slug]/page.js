'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'

export default function ServicesSlug() {

  const { slug } = useParams();
  const formattedSlug = slug.replace(/-/g, " ");

  return (
    <>
      <section className='w-full h-fit'>
        <div className='w-full h-full bg-[#0B1C2D] relative'>
          <Image alt={slug} fill quality={75} className='lg:block hidden w-full h-full absolute top-0 left-0 z-10 ' src={'/banner.jpg'} />
          <div className='w-full h-full absolute top-0 left-0 bg-linear-to-r from-black/90 via-black/80 to-transparent z-30' ></div>
          <div className='max-w-[1320] mx-auto lg:py-28 py-24 lg:px-0 px-4 text-white z-40 relative'>

            {/* Breadcrumb */}
            <p className="text-md text-gray-300 mb-10">
              <Link href={'/'}><span className="hover:text-[#00B4D8] cursor-pointer transition">
                Home
              </span></Link>
              {" > "}
              <Link href={`/services`}><span className="hover:text-[#00B4D8] cursor-pointer transition">
                Services
              </span></Link>
              {" > "}
              <span className="text-white font-semibold">
                {formattedSlug}
              </span>
            </p>

            {/* Title */}
            <h1 className='text-3xl md:text-4xl font-bold capitalize mb-6'>
              {formattedSlug}
            </h1>

            {/* Short Description */}
            <p className='max-w-2xl text-gray-300 leading-relaxed mb-8'>
              We provide advanced and reliable treatment for {formattedSlug}.
              Our experienced orthopaedic specialists in Jodhpur ensure
              accurate diagnosis, modern surgical procedures, and complete
              rehabilitation support for faster recovery.
            </p>

            {/* CTA Buttons */}
            <div className='flex flex-wrap gap-4'>
              <button className='px-6 py-3 bg-[#00B4D8] hover:bg-blue-700 transition rounded-full font-semibold'>
                Book Appointment
              </button>

              <button className='px-6 py-3 border border-white hover:bg-white hover:text-[#0B1C2D] transition rounded-full font-semibold'>
                Contact Us
              </button>
            </div>

          </div>

        </div>
      </section>
      <section className="w-full lg:py-16 my-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">

          <div className='lg:block hidden'>

            {/* Heading */}
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-800 text-center lg:text-left">
              All Services
            </h2>

            <div className="w-20 h-1 bg-[#00B4D8] mt-4 rounded-full mx-auto lg:mx-0" />

            <p className="mt-5 text-gray-600 max-w-xl text-center lg:text-left mx-auto lg:mx-0">
              Comprehensive orthopaedic care delivered by experienced specialists
            </p>
          </div>

          {/* Content Grid */}
          <div className=" grid lg:grid-cols-[30%_auto] gap-12 mt-10">

            {/* Left List */}
            <ul className="space-y-4 lg:block hidden bg-gray-100 px-7 h-full rounded-lg overflow-hidden">
              {[
                "3D Laparoscopy",
                "Joint Replacement",
                "Arthroscopy Surgery",
                "Spine Surgery",
                "Trauma Care",
                "Sports Injury Treatment",
              ].map((item, index) => (
                <Link href={`/services/${item.replace(/ /g, "-")}`} key={index}><li
                  key={index}
                  className="border-l-[3px] border-[#00B4D8] my-10 py-3 cursor-pointer px-4 text-gray-700 font-medium hover:text-[#00B4D8] hover:bg-white hover:shadow-sm transition"
                >
                  {item}
                </li></Link>
              ))}
            </ul>

            {/* Right Image */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">

              <Image
                loading='lazy'
                src="/s2.jpg"
                alt="3D Laparoscopy"
                width={800}
                height={450}
                className="w-full h-[350] md:h-[450] object-cover hover:scale-105 transition duration-300"
                quality={75}
              />

              <div className="p-6">
                <h3 className="text-3xl capitalize font-bold text-[#00B4D8] mb-4">
                  {formattedSlug}
                </h3>

                <p className="text-gray-600  text-justify leading-relaxed mb-6">
                  3D Laparoscopy is an advanced minimally invasive surgical technique that
                  uses high-definition 3D visualization to provide enhanced depth perception
                  and surgical precision. This technology allows surgeons to perform complex
                  procedures with greater accuracy, smaller incisions, and improved patient safety.
                  Compared to traditional open surgery, 3D laparoscopy significantly reduces
                  post-operative pain, blood loss, and recovery time.
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Benefits:
                </h4>

                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4D8]">✔</span>
                    Smaller incisions resulting in minimal scarring
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4D8]">✔</span>
                    Reduced blood loss during surgery
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4D8]">✔</span>
                    Faster recovery and shorter hospital stay
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4D8]">✔</span>
                    Lower risk of infection and complications
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#00B4D8]">✔</span>
                    Enhanced surgical precision with 3D visualization
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  Commonly Used For:
                </h4>

                <ul className="space-y-2 text-gray-600">
                  <li>• Gallbladder surgery</li>
                  <li>• Hernia repair</li>
                  <li>• Gynecological procedures</li>
                  <li>• Gastrointestinal surgeries</li>
                  <li>• Urological procedures</li>
                </ul>
              </div>


            </div>


          </div>
        </div>
      </section>

    </>

  )
}
