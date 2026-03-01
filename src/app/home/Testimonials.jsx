import React from 'react'

export default function Testimonials() {
    const TestimonialsData = [
        {
            title: 'Words of Bone and Joint Patients  5 - Bone and Joint Hospital',
            src: 'https://www.youtube.com/embed/rl01cAeEEVw'
        },
        {
            title: 'Words of Bone and Joint Patients   1 - Bone and Joint Hospital',
            src: 'https://www.youtube.com/embed/WQrqLjj5JfQ'
        },
        {
            title: 'Words of Bone and Joint Patients  4 - Bone and Joint Hospital',
            src: 'https://www.youtube.com/embed/4deslrX55ic'
        },
        {
            title: 'Words of Bone and Joint Patients  5 - Bone and Joint Hospital',
            src: 'https://www.youtube.com/embed/p-WWpZcTiOk'
        },
    ]
    return (
        <section className='w-full my-12'>
            <div className="max-w-330 mx-auto lg:px-0 px-4">
                <div className="lg:text-start text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        Testimonials
                    </h2>
                    <div className="w-16 h-1 bg-[#00B4D8] lg:mx-0 mx-auto mt-4 rounded-full" />
                    <p className="mt-5 text-gray-600 max-w-xl lg:mx-0 mx-auto">
                        Comprehensive orthopaedic care delivered by experienced specialists
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {TestimonialsData.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className="group relative rounded-2xl p-px bg-linear-to-br from-[#00B4D8]/40 via-purple-500/40 to-pink-500/40 hover:from-[#00B4D8] hover:to-pink-500 transition-all duration-500"
                            >
                                {/* Glow */}
                                <div className="absolute -inset-1 rounded-2xl bg-linear-to-br from-[#00B4D8] to-pink-500 blur opacity-20 group-hover:opacity-40 transition"></div>

                                {/* Card */}
                                <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-xl">

                                    {/* Video */}
                                    <div className="aspect-video">
                                        <iframe
                                            src={item.src}
                                            title={item.title}
                                            className="w-full h-[350]"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>

                                    {/* Footer */}
                                    <div className="p-4">
                                        <h3 className="text-white font-semibold text-lg tracking-wide">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm mt-1">
                                            Verified Patient Experience
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
