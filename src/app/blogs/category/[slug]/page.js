import Image from 'next/image'
import React from 'react'

export default function Page() {
    return (
        <div>
            <section className='w-full h-full'>
                <div className='max-w-330 mx-auto lg:px-6 px-3'>
                    <div className='w-full h-[330] relative lg:mt-8 mt-4'>
                        <Image alt='blog image' src={'/banner.jpg'} fill className='absolute object-cover rounded-xl top-0 left-0 w-full h-full' />
                    </div>
                    <div className='my-5 shadow-md p-5 rounded-xl'>

                        <h1 className='lg:text-3xl text-2xl group my-2 font-semibold text-[#00B4D8] duration-300'>What is the benefit after get Bone and Joint Hospital Appointment ?
                            <div className='w-[50] h-1.5 my-1 group-hover:w-[100] duration-300 rounded-full bg-[#00B4D8]'></div>
                        </h1>

                        <p className='mt-2 text-justify text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiamLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiamLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                        </p>
                        <button className='text-md my-3 px-4 border-2 border-[#00B4D8] py-1 bg-[#00B4D8] text-white rounded-full'>By Dr Rajnish Sharma</button> <span className='text-md text-gray-600 font-semibold'>| Read Time 9 Min</span>
                    </div>
                    <section className='my-5 md:p-7 md:border-2 border-gray-50 rounded-xl shadow-md'>
                        <h1 className='lg:text-2xl text-xl group text-gray-900 my-2 font-semibold hover:text-[#00B4D8] duration-300'>What is the benefit after get Bone and Joint Hospital Appointment ?
                            {/* <div className='w-[50] h-1.5 my-1 group-hover:w-[100] duration-300 rounded-full bg-[#00B4D8]'></div> */}
                        </h1>
                        <div className='grid lg:grid-cols-[auto_40%] md:grid-cols-[auto_35%] justify-between grid-cols-1 lg:items-center gap-10 '>
                            <div>
                                {/* <button className='text-md my-1 px-4 border-2 border-[#00B4D8] py-1 text-[#00B4D8] bg-white rounded-full'>By Dr Rajnish Sharma</button> */}
                                <p className='mt-2 text-justify text-sm text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiamLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiamLorem ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta soluta placeat minus, delectus sint veritatis, ipsum id incidunt aperiam
                                </p>
                                <h3 className='my-3 text-lg font-semibold  text-[#00B4D8]'>Benefits of an appointment we provide </h3>
                                <ol className=''>
                                    {[1, 2, 3].map((item, index) => {
                                        return (
                                            <li key={index} className='flex text-md items-center text-gray-800 gap-2'>
                                                <div className='w-2 h-2 animate-pulse rounded-full bg-[#00B4D8] '></div>
                                                Hello that is the benefits of appointment at bone and joint hospital
                                            </li>
                                        )
                                    })}
                                </ol>
                            </div>
                            <div className='relative lg:w-full lg:h-[350] w-full h-[250] overflow-hidden cursor-pointer'>
                                <Image fill src={'/banner.jpg'} className='w-full h-full hover:scale-[1.1] duration-300  object-cover rounded-xl' alt='blog section image' />
                            </div>
                        </div>
                    </section>


                </div>
            </section>
        </div>
    )
}
