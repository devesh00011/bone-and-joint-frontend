import Image from 'next/image';
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { IoIosArrowDroprightCircle } from "react-icons/io";

export default function BookAppointMentModel({ appointmentModel, setAppointmentModel }) {
    //states
    const [selectedTab, setselectedTab] = useState(null)
    const [selectedDoctor, setSelectedDoctor] = useState(null)
    const [qrCodeOpen, setQrCodeOpen] = useState(false)
    const [previewImage, setPreviewImage] = useState('/preview.jpg')
    const [paymentMethod, setPaymentMethod] = useState(null)

    useEffect(() => {
        selectedTab && alert(`${selectedTab} selected`)
    }, [selectedTab])

    const doctors = [
        {
            name: "Dr. Rakesh Sharma",
            specialization: "Orthopedic Surgeon",
            description: "Expert in bone fractures, joint pain, and sports injury treatment."
        },
        {
            name: "Dr. Anil Mathur",
            specialization: "Joint Replacement Specialist",
            description: "Specializes in knee and hip replacement surgeries with modern techniques."
        },
        {
            name: "Dr. Suresh Gehlot",
            specialization: "Spine & Ortho Specialist",
            description: "Focused on spine disorders, back pain, and posture-related issues."
        },
        {
            name: "Dr. Mahendra Singh",
            specialization: "Arthroscopy Surgeon",
            description: "Treats ligament injuries and joint problems using minimally invasive surgery."
        },
        {
            name: "Dr. Pankaj Jain",
            specialization: "Orthopedic & Trauma Surgeon",
            description: "Experienced in trauma care, accident injuries, and bone reconstruction."
        },
        {
            name: "Dr. Vinod Choudhary",
            specialization: "Bones & Joints Specialist",
            description: "Provides comprehensive care for arthritis, joint stiffness, and bone weakness."
        }
    ];

    const tabs = ['today', 'tomorrow', 'After tomorrow']

    const handleFileChange = (e) => {
        console.log(e.target.files[0])

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
        setPaymentMethod(null)
    }

    return (

        <>
            {appointmentModel &&
                <div onClick={blank_state} className='w-full h-screen bg-black/80 fixed top-0 left-0 z-888'></div>
            }

            <div
                className={`${appointmentModel ? 'right-0' : '-right-full'} lg:w-[30%] md:w-[50%] w-full lg:py-10 py-5 lg:px-6 px-3 bg-white transition-all fixed top-0 z-999 h-[110vh] duration-300 `}
            >
                <div className='flex items-center justify-between py-3'>
                    <Link href="/">
                        <p className="text-2xl font-extrabold text-gray-800">
                            Bone & <span className="text-[#00B4D8]">Joint</span> Hospital
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


                        {/* QR Code Logic */}
                        {qrCodeOpen && (
                            <div className="fixed inset-0 z-50 bg-black/50 h-[150vh] flex items-center justify-center backdrop-blur-2xl">
                                <div className="bg-white w-[360]  rounded-2xl p-6 shadow-2xl animate-scaleIn">

                                    { }
                                    <p className="text-gray-700 text-center text-md font-medium">
                                        <span className='flex items-center justify-between'>
                                            You're almost done!
                                            <span onClick={() => setQrCodeOpen(false)} className='hover:text-red-500 duration-300 cursor-pointer'>close</span>
                                        </span>
                                        <span className="block text-sm text-gray-500 mt-1">
                                            Complete the payment to confirm your appointment
                                        </span>
                                    </p>

                                    {/* CTA */}
                                    <button
                                        onClick={() => setQrCodeOpen(true)}
                                        className="w-full mt-5 py-3 rounded-xl font-semibold text-white
        bg-linear-to-r from-gray-900 to-gray-700
        hover:from-gray-800 hover:to-gray-600
        transition-all duration-300"
                                    >
                                        Pay Here to book appointment
                                    </button>

                                    {/* QR Modal */}
                                    <div className="mt-5 flex items-center justify-center">
                                        <div className="w-[200] h-[200] relative bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                                            <Image
                                                alt='Preview Image of screenshot'
                                                src={'/qr.svg'}
                                                fill
                                                quality={75}
                                                className='object-cover  absolute top-0 left-0'
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}




                        <div className={`${qrCodeOpen ? 'scale-100' : 'scale-0'} fixed top-1/2 left-1/2 w-[200] bg-white `}>
                            sdafj</div>

                        <form className="mt-6 space-y-4">

                            {/* Full Name */}
                            <div>
                                <p className="text-sm font-medium text-gray-700 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </p>
                                <input
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
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                    className="w-full py-2.5 px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition bg-white"
                                >
                                    <option value="">Select payment method</option>
                                    <option value="cash">Cash</option>
                                    <option value="rtgs">RTGS</option>
                                    <option value="neft">NEFT</option>
                                    <option value="bank">Bank Transfer</option>
                                </select>
                            </div>

                            {paymentMethod == 'cash' &&
                                <div>
                                    <p className='text-sm mb-3 font-semibold text-green-600'>Make Payment</p>
                                    <span onClick={() => setQrCodeOpen(true)} className='my-3 border text-md border-gray-300 duration-300 px-3 py-2 cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg' >Open QR Code</span>
                                </div>
                            }




                            {/* Preview / Trust Image */}
                            <div className="relative mt-5 w-[200] h-[140] rounded-xl overflow-hidden border border-gray-200">
                                <Image
                                    // value={previewImage}
                                    src={previewImage}
                                    fill
                                    quality={75}
                                    alt="Secure payment preview"
                                    className="object-cover object-center"
                                />
                            </div>

                            <input onChange={(e) => handleFileChange(e)} type='file' className='bg-gray-300  block py-1 px-3 rounded-md cursor-pointer' />

                            <button className='bg-gray-900 text-white rounded-md px-5 py-2 text-sm cursor-pointer hover:bg-gray-600 duration-200'>Confirm Appointment</button>
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
                        {doctors.map((item, index) => {
                            return (
                                <div key={index} onClick={() => setSelectedDoctor(item)} className={`border-gray-300 py-4 hover:bg-[#0b1c2d] hover:text-white  duration-300 capitalize px-6 cursor-pointer border rounded-xl my-4 group flex items-center justify-between`}>
                                    <div>
                                        <p className={``}>{item.name}</p>
                                        <p className='text-gray-500 text-sm group-hover:text-white'>{item.specialization}</p>
                                        <p className='text-gray-500 text-xs group-hover:text-white'>{item.description}</p>
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

    // return (
    //     <div
    //         className={`fixed inset-0 z-999
    //   flex items-center justify-end
    //   transition-opacity duration-300
    //   ${appointmentModel ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    //     >

    //         {/* Backdrop */}
    //         <div
    //             onClick={() => {
    //                 setAppointmentModel(false)
    //                 setQrCodeOpen(false)
    //                 setSelectedDoctor(null)
    //             }}
    //             className="absolute inset-0 bg-black/70 backdrop-blur-sm"
    //         ></div>

    //         {/* Modal */}
    //         <div
    //             className={`relative z-10
    //     lg:w-[90%] w-full max-w-[480] h-screen scrollbar overflow-y-scroll bg-white
    //     transition-transform duration-300 origin-top py-6 px-6
    //     ${appointmentModel ? 'scale-y-100' : 'scale-y-0'}`}
    //         >
    //             <div className='flex items-center justify-between py-3'>
    //                 <Link href="/">
    //                     <p className="text-2xl font-extrabold text-gray-800">
    //                         Bone & <span className="text-[#00B4D8]">Joint</span> Hospital
    //                     </p>
    //                 </Link>
    //                 <span onClick={() => setAppointmentModel(false)} className="cursor-pointer">Close</span>
    //             </div>

    //             {selectedDoctor
    //                 ?
    //                 <div>
    //                     <div className="font-semibold text-md flex items-center gap-2 text-gray-800">

    //                         <span
    //                             onClick={() => setSelectedDoctor(null)}
    //                             className="relative px-4 py-1.5 rounded-lg cursor-pointer text-gray-900 border border-blue-100 transition-all duration-500 hover:bg-linear-to-l hover:from-gray-900 hover:to-gray-700 hover:text-white hover:shadow-md hover:border-transparent"
    //                         >
    //                             Back to Doctors
    //                         </span>

    //                         <span className="text-gray-400">:</span>

    //                         <span className="text-gray-900 text-lg tracking-wide">
    //                             {selectedDoctor.name}
    //                         </span>

    //                     </div>

    //                     <div className='grid grid-cols-3 gap-1 my-5'>
    //                         {tabs.map((item, index) => {
    //                             return (
    //                                 <p onClick={() => setselectedTab(item)} key={index} className={`${selectedTab === item ? 'bg-gray-900 text-white border-transparent scale-95' : 'bg-white text-gray-900 border-gray-300 scale-100'} text-sm py-3 border  hover:bg-gray-900 hover:scale-95 hover:shadow-2xl hover:text-white duration-300 cursor-pointer text-center capitalize rounded-lg`}>
    //                                     {item}
    //                                 </p>
    //                             )
    //                         })}
    //                     </div>


    //                     {/* QR Code Logic */}
    //                     {qrCodeOpen && (
    //                         <div className="fixed inset-0 z-50 bg-black/50 h-[150vh] flex items-center justify-center backdrop-blur-2xl">
    //                             <div className="bg-white w-[360]  rounded-2xl p-6 shadow-2xl animate-scaleIn">

    //                                 { }
    //                                 <p className="text-gray-700 text-center text-md font-medium">
    //                                     <span className='flex items-center justify-between'>
    //                                         You're almost done!
    //                                         <span onClick={() => setQrCodeOpen(false)} className='hover:text-red-500 duration-300 cursor-pointer'>close</span>
    //                                     </span>
    //                                     <span className="block text-sm text-gray-500 mt-1">
    //                                         Complete the payment to confirm your appointment
    //                                     </span>
    //                                 </p>

    //                                 {/* CTA */}
    //                                 <button
    //                                     onClick={() => setQrCodeOpen(true)}
    //                                     className="w-full mt-5 py-3 rounded-xl font-semibold text-white
    //     bg-linear-to-r from-gray-900 to-gray-700
    //     hover:from-gray-800 hover:to-gray-600
    //     transition-all duration-300"
    //                                 >
    //                                     Pay Here to book appointment
    //                                 </button>

    //                                 {/* QR Modal */}
    //                                 <div className="mt-5 flex items-center justify-center">
    //                                     <div className="w-[200] h-[200] relative bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
    //                                         <Image
    //                                             alt='Preview Image of screenshot'
    //                                             src={'/qr.svg'}
    //                                             fill
    //                                             quality={75}
    //                                             className='object-cover  absolute top-0 left-0'
    //                                         />
    //                                     </div>
    //                                 </div>

    //                             </div>
    //                         </div>
    //                     )}




    //                     <div className={`${qrCodeOpen ? 'scale-100' : 'scale-0'} fixed top-1/2 left-1/2 w-[200] bg-white `}>
    //                         sdafj</div>

    //                     <form className="mt-6 space-y-4">

    //                         {/* Full Name */}
    //                         <div>
    //                             <p className="text-sm font-medium text-gray-700 mb-1">
    //                                 Full Name <span className="text-red-500">*</span>
    //                             </p>
    //                             <input
    //                                 placeholder="Enter your full name"
    //                                 className="py-2.5 w-full px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
    //                             />
    //                         </div>

    //                         {/* Phone */}
    //                         <div>
    //                             <p className="text-sm font-medium text-gray-700 mb-1">
    //                                 Phone Number <span className="text-red-500">*</span>
    //                             </p>
    //                             <input
    //                                 placeholder="10-digit mobile number"
    //                                 className="py-2.5 w-full px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
    //                             />
    //                         </div>

    //                         {/* Email */}
    //                         <div>
    //                             <p className="text-sm font-medium text-gray-700 mb-1">
    //                                 Email Address <span className="text-red-500">*</span>
    //                             </p>
    //                             <input
    //                                 placeholder="you@example.com"
    //                                 className="py-2.5 w-full px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
    //                             />
    //                         </div>

    //                         {/* Payment Method */}
    //                         <div>
    //                             <p className="text-sm font-medium text-gray-700 mb-1">
    //                                 Payment Method <span className="text-red-500">*</span>
    //                             </p>
    //                             <select
    //                                 onChange={(e) => setPaymentMethod(e.target.value)}
    //                                 className="w-full py-2.5 px-3 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-800 transition bg-white"
    //                             >
    //                                 <option value="">Select payment method</option>
    //                                 <option value="cash">Cash</option>
    //                                 <option value="rtgs">RTGS</option>
    //                                 <option value="neft">NEFT</option>
    //                                 <option value="bank">Bank Transfer</option>
    //                             </select>
    //                         </div>

    //                         {paymentMethod == 'cash' &&
    //                             <div>
    //                                 <p className='text-sm mb-3 font-semibold text-green-600'>Make Payment</p>
    //                                 <span onClick={() => setQrCodeOpen(true)} className='my-3 border text-md border-gray-300 duration-300 px-3 py-2 cursor-pointer hover:bg-gray-900 hover:text-white rounded-lg' >Open QR Code</span>
    //                             </div>
    //                         }




    //                         {/* Preview / Trust Image */}
    //                         <div className="relative mt-5 w-[200] h-[140] rounded-xl overflow-hidden border border-gray-200">
    //                             <Image
    //                                 // value={previewImage}
    //                                 src={previewImage}
    //                                 fill
    //                                 quality={75}
    //                                 alt="Secure payment preview"
    //                                 className="object-cover object-center"
    //                             />
    //                         </div>

    //                         <input onChange={(e) => handleFileChange(e)} type='file' className='bg-gray-300  block py-1 px-3 rounded-md cursor-pointer' />

    //                         <button className='bg-gray-900 text-white rounded-md px-5 py-2 text-sm cursor-pointer hover:bg-gray-600 duration-200'>Confirm Appointment</button>
    //                         {/* Trust Line */}
    //                         <p className="text-xs text-gray-500 text-center mt-2">
    //                             🔒 Your information is safe & securely encrypted
    //                         </p>

    //                     </form>

    //                 </div>
    //                 :
    //                 <div>
    //                     <h1 className="text-gray-900 group font-bold text-3xl">
    //                         Select Doctor
    //                         <div className='w-[40] mt-1 h-[5] group-hover:w-[70] duration-200 bg-[#00B4D8] rounded-full'></div>
    //                     </h1>
    //                     {doctors.map((item, index) => {
    //                         return (
    //                             <div key={index} onClick={() => setSelectedDoctor(item)} className={`border-gray-300 py-4 hover:bg-[#0b1c2d] hover:text-white  duration-300 capitalize px-6 cursor-pointer border rounded-xl my-4 group flex items-center justify-between`}>
    //                                 <div>
    //                                     <p className={``}>{item.name}</p>
    //                                     <p className='text-gray-500 text-sm group-hover:text-white'>{item.specialization}</p>
    //                                     <p className='text-gray-500 text-xs group-hover:text-white'>{item.description}</p>
    //                                 </div>
    //                                 <span className='text-xl'><IoIosArrowDroprightCircle /></span>
    //                             </div>
    //                         )
    //                     })}
    //                 </div>


    //             }

    //         </div>
    //     </div>
    // )



}



