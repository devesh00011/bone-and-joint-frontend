'use client'
import { ServicesData } from '@/app/api_data/Services';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import ServiceNotFound from './ServiceNotFound';

export default function ServicesSlug() {

  const { slug } = useParams();

  const servicesData = useSelector((store) => store.service)
  const specificData = servicesData.find((item) => item.service_slug === slug)
  if (!specificData) return <ServiceNotFound />

  const { service_name, short_description, service_slug, full_details, service_image, meta_title, meta_description, key_benefits, commonly_used } = specificData

  return (
    <>
      <section className='w-full h-fit'>
        <div className='w-full h-full bg-[#0B1C2D] relative'>
          <Image alt={service_slug} fill quality={75} className='lg:block hidden w-full h-full absolute top-0 left-0 z-10 ' src={'/banner.jpg'} />
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
              <span className="text-white font-semibold capitalize">
                {service_name}
              </span>
            </p>

            {/* service_name */}
            <h1 className='flex items-center gap-1 text-3xl md:text-4xl font-bold capitalize mb-6'>
              {service_name}
            </h1>

            {/* Short Description */}
            <p className='max-w-2xl text-gray-300 leading-relaxed mb-8'>
              {short_description}
            </p>

            <p className='max-w-2xl text-gray-300 leading-relaxed mb-8'>
              {full_details}
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
              {servicesData.map((item, index) => (
                <Link href={`/services/${item.service_slug}`} key={index}><li
                  key={index}
                  className="border-l-[3px] border-[#00B4D8] my-10 py-3 cursor-pointer px-4 text-gray-700 font-medium hover:text-[#00B4D8] hover:bg-white hover:shadow-sm transition"
                >
                  {item.service_name}
                </li></Link>
              ))}
            </ul>

            {/* Right Image */}
            <div className="w-full rounded-xl overflow-hidden shadow-lg bg-white hover:shadow-xl transition duration-300">

              <Image
                loading='lazy'
                src={service_image || '/s2.jpg'}
                alt='services'
                width={800}
                height={450}
                className="w-full h-[350] md:h-[450] object-cover hover:scale-105 transition duration-300"
                quality={75}
              />

              <div className="p-6">
                <h3 className="text-3xl capitalize font-bold text-[#00B4D8] mb-4">
                  {service_name}
                </h3>

                <p className="text-gray-600  text-justify leading-relaxed mb-6">
                  {full_details}
                </p>

                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Key Benefits:
                </h4>

                <ul className="space-y-2 text-gray-600">
                  {key_benefits?.map((item, index) => {
                    return (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-[#00B4D8]">✔</span>
                        {item}
                      </li>
                    )
                  })}

                </ul>

                <h4 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                  Commonly Used For:
                </h4>

                <ul className="space-y-2 text-gray-600">
                  {commonly_used?.map((item, index) => {
                    return (
                      <li key={index}>• {item}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>

  )
}
