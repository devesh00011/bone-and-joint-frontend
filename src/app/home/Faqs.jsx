'use client'
import React, { useState, useRef } from 'react'

const faqsData = [
  {
    question: 'Do I need an appointment before visiting the hospital?',
    answer:
      'While walk-in patients are welcome, we recommend booking an appointment in advance to reduce waiting time and ensure consultation with the right specialist.',
  },
  {
    question: 'What conditions are treated at Bone & Joint Hospital?',
    answer:
      'We specialize in joint replacement, knee and hip problems, spine disorders, fractures, trauma care, sports injuries, and arthritis management.',
  },
  {
    question: 'Is emergency and trauma care available 24/7?',
    answer:
      'Yes, our hospital provides 24/7 emergency and trauma services to handle fractures, accidents, and urgent orthopaedic conditions.',
  },
  {
    question: 'Do you provide non-surgical treatment options?',
    answer:
      'Absolutely. We offer both surgical and non-surgical treatments, including physiotherapy, medication, injections, and lifestyle-based management plans.',
  },
  {
    question: 'How can I book an appointment?',
    answer:
      'You can book an appointment through our website, call our hospital directly, or visit the reception desk during working hours.',
  },
]

export default function Faqs() {
  const [activeIndex, setActiveIndex] = useState(null)

  return (
    <section className="w-full py-24 bg-[#f8fafc]">
      <div className="max-w-330 mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#00B4D8] mx-auto mt-4 rounded-full" />
          <p className="mt-5 text-gray-600 ">
            Clear answers to common questions about our orthopaedic services and care
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="max-w-3xl mx-auto space-y-5">
          {faqsData.map((faq, index) => (
            <FaqItem
              key={index}
              faq={faq}
              isOpen={activeIndex === index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            />
          ))}
        </div>

      </div>
    </section>
  )
}

function FaqItem({ faq, isOpen, onClick }) {
  const contentRef = useRef(null)

  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between px-6 py-5
                   text-left font-semibold text-gray-900"
      >
        {faq.question}
        <span
          className={`text-2xl font-light duration-300 ${isOpen ? 'rotate-45 text-[#00B4D8]' : 'text-gray-400'
            }`}
        >
          +
        </span>
      </button>

      {/* Animated Answer */}
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight + 'px' : '0px',
        }}
        className="
          overflow-hidden transition-all border-l-2 border-[#00B4D8] duration-500 ease-in-out
        "
      >
        <div
          className={`px-6 pb-5 text-gray-600 text-sm leading-relaxed
            transition-all duration-300 
            ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}
          `}
        >
          {faq.answer}
        </div>
      </div>
    </div>
  )
}
