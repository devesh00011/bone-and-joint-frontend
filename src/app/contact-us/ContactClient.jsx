"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'
import Loading from '../loading'
import { post_api } from '../api_helper/api_helper'


export default function ContactClient() {

    const [full_name, setFullName] = useState('')
    const [email_id, setEmailId] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [user_message, setUserMessage] = useState('')

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        try {
            const formObj = {
                full_name,
                email_id,
                phone_number,
                user_message

            }
            const res = await post_api({
                body: formObj,
                params: null,
                path: 'contact/save'
            })
            if (res.data.success) {
                Swal.fire({
                    title: 'Success',
                    text: 'Thank you for Contact Us',
                    icon: 'success',
                    timer: 2000
                })
                blank_state()

            }
        } catch (error) {
            console.log(error)
            if (error?.response?.status == 404) {
                Swal.fire({
                    title: error?.response?.data?.msg,
                    text: 'Try again later !',
                    icon: 'warning',
                })
            }
            else {
                Swal.fire({
                    title: 'Something went wrong',
                    text: 'Server Error',
                    icon: 'error',
                })
            }

        }
        finally {
            setLoading(false)
        }
    }

    const blank_state = () => {
        setFullName('')
        setEmailId('')
        setPhoneNumber('')
        setUserMessage('')
    }

    return (
        <>
            {loading &&
                <Loading />
            }
            {/* HERO */}
            <section className="w-full bg-[#0B1C2D] text-white">
                <div className="max-w-[1320] mx-auto px-6 py-16 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold">
                        Contact <span className="text-[#00B4D8]">Us</span>
                    </h1>
                    <div className="w-24 h-1 bg-[#00B4D8] mx-auto mt-4 rounded-full" />
                    <p className="mt-6 text-gray-300 max-w-2xl mx-auto">
                        We're here to help you. Reach out for appointments, emergency care,
                        or any medical assistance.
                    </p>
                </div>
            </section>

            {/* CONTACT CARDS */}
            <section className="w-full bg-white">
                <div className="max-w-[1320] mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">

                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-bold text-[#0B1C2D] mb-3">📍 Address</h3>
                        <p className="text-gray-600">
                            ~ 15 Keshav Nagar, Opposite Samrat Ashok Udhyan, Jodhpur, Rajasthan
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-bold text-[#0B1C2D] mb-3">📞 Call Us</h3>
                        <span className="text-gray-600 mb-2 mr-3">0291-2110000</span>
                        <span className="text-gray-600 mb-2">+91 96940-22500</span>
                        <p className="text-gray-600">Emergency: 24/7 Available</p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition">
                        <h3 className="text-xl font-bold text-[#0B1C2D] mb-3">✉ Email</h3>
                        <p className="text-gray-600 text-md">Boneandjointpalroad@gmail.com</p>
                    </div>

                </div>
            </section>

            {/* CONTACT FORM + MAP */}
            <section className="w-full bg-gray-100">
                <div className="max-w-[1320] mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">

                    {/* MAP */}
                    <div className="rounded-3xl overflow-hidden shadow-xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400.7586008340772!2d72.98546407520111!3d26.268660177036864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418e9c7da5d993%3A0x35bb87cede06e60a!2sBONE%20%26%20JOINT%20HOSPITAL!5e1!3m2!1sen!2sin!4v1773070136203!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            className="min-h-[500]"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* FORM */}
                    <div className="bg-white p-10 rounded-3xl shadow-xl">
                        <h3 className="text-3xl font-bold text-[#0B1C2D] mb-8">
                            Send Us a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                value={full_name}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                                name='full_name'
                                type="text"
                                placeholder="Full Name"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8]"
                            />

                            <input
                                value={email_id}
                                onChange={(e) => setEmailId(e.target.value)}
                                required
                                name='email_id'
                                type="email"
                                placeholder="Email Address"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8]"
                            />

                            <input
                                value={phone_number}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                required
                                name='phone_number'
                                type="tel"
                                placeholder="Phone Number"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8]"
                            />

                            <textarea
                                value={user_message}
                                onChange={(e) => setUserMessage(e.target.value)}
                                required
                                name='user_message'
                                rows="4"
                                placeholder="Your Message"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-[#00B4D8]"
                            ></textarea>

                            <button
                                type="submit"
                                className="w-full bg-[#112831] text-white py-3 rounded-lg font-semibold hover:bg-[#0b4861] transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="w-full bg-white text-center py-16">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                    Need Immediate Medical Assistance?
                </h3>

                <Link
                    href="tel:+919694022500"
                    className="inline-block bg-[#00B4D8] text-white px-10 py-4 rounded-full font-semibold hover:bg-[#0096c7] transition"
                >
                    Call Now
                </Link>
            </section>
        </>
    )
}
