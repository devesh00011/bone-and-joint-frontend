'use client'
import React, { useEffect, useState } from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'
import BookAppointMentModel from './BookAppointMentModel'

export default function Header() {
  const [appointmentModel, setAppointmentModel] = useState(false)
  // const [scrolled, setScrolled] = useState(false)

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrolled(window.scrollY > 20)
  //   }

  //   window.addEventListener('scroll', handleScroll, { passive: true })

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])


  const blank_state = () => {
    setAppointmentModel(false)
    setselectedTab(null)
    setSelectedDoctor(null)
    setQrCodeOpen(false)
    setPaymentMethod(null)
  }

  return (
    <>
      {/* Appointment Modal */}
      <BookAppointMentModel
        appointmentModel={appointmentModel}
        setAppointmentModel={setAppointmentModel}
      />

      {/* Header */}
      <header
        className={`
          sticky top-0 w-full z-50 transition-all duration-300
         bg-[#0B1C2D]/95
        `}
      >

        {appointmentModel &&
          <div onClick={blank_state} className='w-full h-screen bg-black/90 fixed top-0 left-0 z-888  '></div>
        }


        {/* Main Header */}
        <div className="max-w-[1320] mx-auto">
          <PcHeader
            appointmentModel={appointmentModel}
            setAppointmentModel={setAppointmentModel}
          />
          <MobileHeader
            appointmentModel={appointmentModel}
            setAppointmentModel={setAppointmentModel}
          />
        </div>
      </header>
    </>
  )
}
