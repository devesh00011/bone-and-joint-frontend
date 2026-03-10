'use client'
import React, { useEffect, useState } from 'react'
import PcHeader from './PcHeader'
import MobileHeader from './MobileHeader'
import BookAppointMentModel from './BookAppointMentModel'
import { get_api } from '../api_helper/api_helper'
import { setDoctors } from '../redux/slices/doctorSlice'
import { useDispatch, useSelector } from 'react-redux'
import { setservices } from '../redux/slices/serviceSlice'

export default function Header() {
  const [appointmentModel, setAppointmentModel] = useState(false)

  const doctorsDataAll = useSelector((store) => store.doctor)
  const serviceDataAll = useSelector((store) => store.service)


  const dispatch = useDispatch()

  const fetchAllDoctors = async () => {
    try {
      const res = await get_api({
        params: null,
        path: 'doctor/view'
      })
      if (res.data.success) {
        dispatch(setDoctors(res.data.response))
      }
      else {
        console.error('Failed to fetch Doctors')
      }
    } catch (error) {
      console.log(error)
    }
  }

  const fetchAllServices = async () => {
    try {
      const res = await get_api({
        params: null,
        path: 'service/view'
      })
      if (res.data.success) {
        dispatch(setservices(res.data.response))
      }
    } catch (error) {
      console.log(error)
    }
  }


  //all use effects 
  useEffect(() => {
    fetchAllDoctors()
    fetchAllServices()
  }, [])


  const blank_state = () => {
    setAppointmentModel(false)
    // setselectedTab(null)
    // setSelectedDoctor(null)
    // setQrCodeOpen(false)
    // setPaymentMethod(null)
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
         bg-[#0b1C2D]/95 shadow-2xl
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
