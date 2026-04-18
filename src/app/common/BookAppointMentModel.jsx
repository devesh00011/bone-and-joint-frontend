import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Doctors } from '../api_data/Doctors';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';
import { post_api } from '../api_helper/api_helper';

export default function BookAppointMentModel({ appointmentModel, setAppointmentModel }) {
    //states
    const [selectedTab, setselectedTab] = useState(null)
    const [loading, setLoading] = useState(false)
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [qrCodeOpen, setQrCodeOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('/preview.jpg')
    const [paymentMethod, setPaymentMethod] = useState(null)

    const allDoctors = useSelector((state) => state.doctor);

    useEffect(() => {
        selectedTab && alert(`${selectedTab} selected`)
    }, [selectedTab])



    const tabs = ['today', 'tomorrow', 'After tomorrow']

    const handleFileChange = (e) => {

        const file = e.target.files[0];
        if (!file) return;

        const url = URL.createObjectURL(file);
        setPreviewImage(url);
    };


    const blank_state = () => {
        setAppointmentModel(false)
        setselectedTab(null)
        setSelectedDoctor(null)
        setQrCodeOpen(false)
        setPreviewImage('/preview.jpg')
        setPaymentMethod(null)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)

        try {
            const formData = new FormData(event.target)
            formData.append('doctor_id', selectedDoctor.id)
            formData.append('appointment_day', selectedTab)

            const response = await post_api({
                body: formData,
                params: null,
                path: 'appointment/create'
            })
            if (response.data.success) {
                Swal.fire({
                    title: 'Apointment Booked',
                    icon: 'success',
                    timer: 2000
                }).then((res) => {
                    blank_state()
                })
            }
            else {
                Swal.fire({
                    title: 'Something went wrong',
                    text: 'try again later',
                    icon: 'warning',
                    timer: 2000
                })
            }

        } catch (error) {
            console.log(error)
            Swal.fire({
                title: 'Server Error',
                text: 'Try again later !',
                icon: 'error'
            })
        }
        finally {
            setLoading(false)
        }
    }

    return (


        <>


            <div
                className={`${appointmentModel ? 'right-0' : '-right-full'} h-screen overflow-hidden lg:w-[30%] md:w-[50%] w-full lg:pb-20 py-5 lg:px-6 px-3 bg-white transition-all overflow-y-scroll fixed top-0 z-999 duration-300`}
            >


                <div className='flex items-center justify-between py-3'>
                    <Link href="/">
                        <p className="text-2xl font-extrabold text-cyan-500">
                            Bone and Joint Hospital
                        </p>
                    </Link>
                    <span onClick={() => setAppointmentModel(false)} className="cursor-pointer">Close</span>
                </div>

                {selectedDoctor
                    ?
                    <div>
                        <div className="font-semibold text-md flex items-center gap-2 text-gray-800">

                            <span
                                onClick={() => setSelectedDoctor(null)}
                                className="relative px-4 py-1.5 rounded-lg cursor-pointer text-gray-900 border border-blue-100 transition-all duration-500 hover:bg-linear-to-l hover:from-gray-900 hover:to-gray-700 hover:text-white hover:shadow-md hover:border-transparent"
                            >
                                Back to Doctors
                            </span>

                            <span className="text-gray-400">:</span>

                            <span className="text-gray-900 text-lg tracking-wide">
                                {selectedDoctor.name}
                            </span>

                        </div>

                        <div className='grid grid-cols-3 gap-1 my-5'>
                            {tabs.map((item, index) => {
                                return (
                                    <p onClick={() => setselectedTab(item)} key={index} className={`${selectedTab === item ? 'bg-gray-900 text-white border-transparent scale-95' : 'bg-white text-gray-900 border-gray-300 scale-100'} text-sm py-3 border  hover:bg-gray-900 hover:scale-95 hover:shadow-2xl hover:text-white duration-300 cursor-pointer text-center capitalize rounded-lg`}>
                                        {item}
                                    </p>
                                )
                            })}
                        </div>

                        <form onSubmit={(event) => handleSubmit(event)} className="mt-6 space-y-4">

                            {/* Full Name */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </p>
                                <input
                                    required
                                    name='patient_name'
                                    placeholder="Enter your full name"
                                    className="py-2.5 w-full px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                                />
                            </div>

                            {/* Phone */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-1">
                                    Phone Number <span className="text-red-500">*</span>
                                </p>
                                <input
                                    required
                                    name='patient_phone'
                                    placeholder="10-digit mobile number"
                                    className="py-2.5 w-full px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-1">
                                    Email Address <span className="text-red-500">*</span>
                                </p>
                                <input
                                    required
                                    name='patient_email'
                                    placeholder="you@example.com"
                                    className="py-2.5 w-full px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
                                />
                            </div>

                            {/* Payment Method */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-1">
                                    Payment Method <span className="text-red-500">*</span>
                                </p>
                                <select
                                    required
                                    name='payment_method'
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="w-full py-2.5 px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition bg-white"
                                >
                                    <option value="">Select payment method</option>
                                    <option value="cash">Cash</option>
                                </select>
                            </div>

                            {paymentMethod == 'cash' &&
                                <div>
                                    <p className='text-sm mb-3 font-semibold text-green-600'>Make Payment</p>
                                    <span onClick={() => setQrCodeOpen(true)} className='my-3 border text-md border-gray-300 duration-300 px-3 py-2 cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg' >Open QR Code</span>
                                </div>
                            }

                            {/* QR Code Logic */}
                            {qrCodeOpen && (
                                <div className="inset-0 z-50 bg-white flex items-center my-10 backdrop-blur-2xl">
                                    <div className="bg-white w-[320]  rounded-2xl p-6 border border-gray-300 animate-scaleIn">

                                        { }
                                        <p className="text-gray-700  text-md font-medium">
                                            <span className='flex text-sm items-center justify-between'>
                                                Take a Screenshot of this qr to payment.
                                                <span onClick={() => setQrCodeOpen(false)} className='hover:text-red-500 duration-300 cursor-pointer'>close</span>
                                            </span>
                                            <span className="block text-sm mb-3 text-gray-500 mt-1">
                                                Complete the payment to confirm your appointment
                                            </span>
                                        </p>

                                        {/* QR Modal */}
                                        <div className="mt-10 flex items-center justify-center">
                                            <div className="w-[160] h-[160] relative bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                                                <Image
                                                    alt='Preview Image of screenshot'
                                                    src={'/qr.svg'}
                                                    fill
                                                    quality={75}
                                                    className='object-cover absolute top-0 left-0'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Preview / Trust Image */}
                            {paymentMethod == 'cash' &&
                                <>
                                    <p className='text-md my-6 font-semibold text-[#005663]'>Upload the payment proof for confirm your appointment</p>
                                    <div className="relative mt-5 w-[200] h-[140] rounded-xl overflow-hidden border border-gray-200">
                                        <Image
                                            required
                                            // value={previewImage}
                                            src={previewImage}
                                            fill
                                            quality={75}
                                            alt="Secure payment preview"
                                            className="object-cover object-center"
                                        />
                                    </div>

                                    <input required name='payment_proof_image' onChange={(e) => handleFileChange(e)} type='file' className='bg-gray-300  block py-1 px-3 rounded-md cursor-pointer' />
                                </>
                            }




                            <button type='submit' className='bg-gray-900 text-white rounded-md px-5 py-2 text-sm cursor-pointer hover:bg-gray-600 duration-200'>Confirm Appointment</button>
                            {/* Trust Line */}
                            <p className="text-xs text-gray-500 text-center mt-2">
                                🔒 Your information is safe & securely encrypted
                            </p>

                        </form>



                    </div>
                    :
                    <div>
                        <h1 className="text-gray-900 group font-bold text-3xl">
                            Select Doctor
                            <div className='w-[40] mt-1 h-[5] group-hover:w-[70] duration-200 bg-[#00B4D8] rounded-full'></div>
                        </h1>
                        <p className='my-2 font-semibold text-xl text-gray-800 border border-gray-300 p-3 '><span className='text-[#005c6e] font-bold'>Timing</span> - 9.00am to 6.00pm</p>
                        {allDoctors.map((item, index) => {
                            return (
                                <div key={index} onClick={() => setSelectedDoctor(item)} className={`border-gray-300 py-4 hover:bg-[#0b1c2d] hover:text-white  duration-300 capitalize px-6 cursor-pointer border rounded-xl my-4 group flex items-center justify-between`}>
                                    <div>
                                        <p className={``}>{item.name}</p>
                                        <p className='text-gray-500 text-sm group-hover:text-white'>{item.primary_specialization}</p>
                                        {/* <p className='text-gray-500 text-xs group-hover:text-white'>{item.description}</p> */}
                                    </div>
                                    <span className='text-xl'><IoIosArrowDroprightCircle /></span>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
        </>
    )




}



