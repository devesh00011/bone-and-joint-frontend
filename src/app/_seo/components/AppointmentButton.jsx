'use client'
// Small client wrapper that opens the EXISTING appointment drawer.
// BookAppointMentModel.jsx is imported as-is and is not modified.
import { useState } from 'react'
import BookAppointMentModel from '@/app/common/BookAppointMentModel'

export default function AppointmentButton({ label = 'Book Appointment', variant = 'solid' }) {
  const [appointmentModel, setAppointmentModel] = useState(false)
  // The existing drawer contains its own <h1>; mount it only after the first click
  // so the new pages keep a single H1 in the initial HTML.
  const [mounted, setMounted] = useState(false)

  const styles =
    variant === 'solid'
      ? 'bg-[#00B4D8] hover:bg-[#0096c7] text-white'
      : 'bg-white text-[#0B1C2D] hover:bg-[#00B4D8] hover:text-white'

  return (
    <>
      {mounted && (
        <BookAppointMentModel appointmentModel={appointmentModel} setAppointmentModel={setAppointmentModel} />
      )}
      {appointmentModel && (
        <div
          aria-hidden="true"
          onClick={() => setAppointmentModel(false)}
          className="fixed top-0 left-0 w-full h-screen bg-black/90 z-998"
        />
      )}
      <button
        type="button"
        aria-haspopup="dialog"
        aria-expanded={appointmentModel}
        onClick={() => {
          setMounted(true)
          requestAnimationFrame(() => setAppointmentModel(true))
        }}
        className={`min-h-12 px-6 py-3 cursor-pointer transition rounded-full font-semibold focus:outline-none focus-visible:ring-4 focus-visible:ring-[#00B4D8] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1C2D] ${styles}`}
      >
        {label}
      </button>
    </>
  )
}
