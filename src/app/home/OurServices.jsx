'use client'

import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { ServicesData } from '../api_data/Services'
import { useSelector } from 'react-redux'

export default function OurServices() {

    const ServicesData = useSelector((store) => store.service)

    console.log(ServicesData)

    // const settings = {
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2500,
    //     arrows: false,
    //     cssEase: "ease-in-out",
    //     pauseOnHover: true,
    //     slidesToShow: 4, // desktop default

    //     responsive: [
    //         {
    //             breakpoint: 1024, // tablet
    //             settings: {
    //                 slidesToShow: 2, // desktop default
    //                 slidesToShow: 2,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //         {
    //             breakpoint: 640, // mobile
    //             settings: {
    //                 slidesToShow: 1, // desktop default

    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //             },
    //         },
    //     ],
    // };



    return (
        <section className="w-full lg:py-16 py-12 bg-gray-200">
            <div className="max-w-7xl mx-auto lg:px-0 px-4">

                {/* Section Header */}
                <div className="lg:text-start text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800">
                        Our Services
                    </h2>
                    <div className="w-16 h-1 bg-[#00B4D8] lg:mx-0 mx-auto mt-4 rounded-full" />
                    <p className="mt-5 text-gray-600 max-w-xl lg:mx-0 mx-auto">
                        Comprehensive orthopaedic care delivered by experienced specialists
                    </p>
                </div>

                {/* ================= DESKTOP / TABLET SLIDER ================= */}
                <div className="hidden sm:block">
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={4} // Desktop default
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={2500}
                        arrows={false}
                        responsive={[
                            {
                                breakpoint: 1280, // Small desktop / large tablet
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                            {
                                breakpoint: 1024, // Tablet
                                settings: {
                                    slidesToShow: 3,
                                },
                            },
                        ]}
                    >
                        {ServicesData.map((item, index) => (
                            <div key={index} className="px-3">
                                <CustomCard item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* ================= MOBILE SLIDER ================= */}
                <div className="block sm:hidden">
                    <Slider
                        dots={false}
                        infinite={true}
                        speed={500}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        autoplaySpeed={2500}
                        arrows={false}
                    >
                        {ServicesData.map((item, index) => (
                            <div key={index} className="px-3">
                                <CustomCard item={item} />
                            </div>
                        ))}
                    </Slider>
                </div>

            </div>
        </section>
    )

}


function CustomCard({ item }) {
    const { service_name, service_image, service_slug } = item

    return (
        <div className="relative group w-full h-72 rounded-xl overflow-hidden shadow-lg cursor-pointer">

            {/* Image */}
            <Image
                src={service_image}
                alt={service_name}
                fill
                quality={75}
                className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Permanent Dark linear */}
            <div className="absolute inset-0 bg-linear-to-t 
                    from-black via-black/40 to-transparent">
            </div>

            {/* Hover Blue Overlay */}
            <div className="absolute inset-0 bg-linear-to-t 
                    from-[#04213c] via-[#0b1c2d]/50 to-transparent
                    lg:opacity-0 lg:group-hover:opacity-100
                    transition-opacity duration-500">
            </div>

            {/* Content */}
            <div className="absolute bottom-0 w-full p-6 z-20 text-white">

                {/* Title */}
                <h2 className="text-xl font-bold transition-all duration-500">
                    {service_name}
                </h2>

                {/* Expandable Button Wrapper */}
                <div className="
  overflow-hidden
  max-h-20 lg:max-h-0
  lg:group-hover:max-h-20
  transition-all duration-500
">
                    <Link
                        href={`/services/${service_slug}`}
                        className="inline-block mt-4 px-5 py-2 rounded-full font-semibold
                     bg-white text-black hover:text-white hover:bg-[#26425e]
                     shadow-md transition-all duration-300"
                    >
                        View Details
                    </Link>

                </div>

            </div>
        </div>
    );

}
