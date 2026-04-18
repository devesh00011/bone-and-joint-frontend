'use client'
import React, { useEffect, useRef, useState } from 'react'

const countersData = [
    { value: 20, suffix: '+', label: 'Years of Excellence' },
    { value: 80, suffix: 'k+', label: 'Happy Patients' },
    { value: 98, suffix: '%', label: 'Success Rate' },
    { value: 24, suffix: '/7', label: 'Emergency Support' },
]

export default function WhyChooseUs() {
    const sectionRef = useRef(null)
    const [startCount, setStartCount] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCount(true)
                    observer.disconnect()
                }
            },
            { threshold: 0.3 }
        )

        if (sectionRef.current) observer.observe(sectionRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <section
            ref={sectionRef}
            className="w-full py-24 bg-blue-50 lg:px-6 px-4"
        >
            <div className="max-w-330 mx-auto">

                {/* HEADING */}
                <div className="lg:text-start text-center lg:mb-16 mb-8">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        Why Patients Trust Us
                    </h2>

                    <div className="w-16 h-1 bg-[#00B4D8] lg:mx-0 mx-auto mt-4 rounded-full" />

                    <p className="mt-5 text-gray-600 text-sm md:text-base">
                        Delivering excellence in orthopaedic care with proven experience, modern technology and compassionate treatment.
                    </p>
                </div>

                {/* COUNTERS */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
                    {countersData.map((item, index) => (
                        <CounterCard
                            key={index}
                            value={item.value}
                            suffix={item.suffix}
                            label={item.label}
                            start={startCount}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}

function CounterCard({ value, suffix, label, start }) {
    const [count, setCount] = useState(0)

    useEffect(() => {
        if (!start) return

        let current = 0
        const duration = 1600
        const step = value / (duration / 16)

        const timer = setInterval(() => {
            current += step
            if (current >= value) {
                setCount(value)
                clearInterval(timer)
            } else {
                setCount(Math.floor(current))
            }
        }, 16)

        return () => clearInterval(timer)
    }, [start, value])

    return (
        <div className="
            relative bg-[#0b1c2d] backdrop-blur
            border border-gray-100
            lg:rounded-3xl rounded-xl px-6 lg:py-12 py-5
            text-center
            shadow-sm hover:shadow-xl
            hover:-translate-y-2
            duration-300
        ">
            <p className="mt-4 text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {count}{suffix}
            </p>

            <p className="mt-3 text-white text-sm md:text-base font-medium">
                {label}
            </p>
        </div>
    )
}
