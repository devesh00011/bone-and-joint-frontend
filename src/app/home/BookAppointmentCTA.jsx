'use client'
import Link from 'next/link'
import { useState } from 'react'
import { FaCalendarCheck, FaPhoneAlt } from 'react-icons/fa'
import BookAppointMentModel from '../common/BookAppointMentModel'

export default function BookAppointmentCTA() {
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
      <div></div>
      <section className="w-full bg-linear-to-r from-[#274a6d] to-gray-950 py-16 px-4">
        <div className="max-w-330 mx-auto text-center text-white">

          <h2 className="text-3xl md:text-4xl font-extrabold">
            Book Your Appointment Today
          </h2>

          <p className="mt-4 text-blue-100">
            Get expert orthopaedic care from experienced bone & joint specialists.
            Your journey to a pain-free life starts here.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">

            <button
              onClick={() => setAppointmentModel(true)}
              className="
              flex items-center gap-2
              bg-white text-gray-900
              px-8 py-4 rounded-full
              font-semibold text-md
              hover:scale-105 
              transition-all duration-300
            ">
              <FaCalendarCheck />
              Book Appointment
            </button>

            <a href="tel:+919694022500">
              <button className="
              flex items-center gap-2
              border border-white
              px-8 py-4 rounded-full
              font-semibold text-md
              hover:bg-white hover:text-[#00B4D8]
              transition-all duration-300
            ">
                <FaPhoneAlt />
                Call Now
              </button>
            </a>

          </div>

        </div>
      </section>
    </>
  )
}
