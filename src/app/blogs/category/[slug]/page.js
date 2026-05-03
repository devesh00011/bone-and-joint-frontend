'use client'
import { post_api } from '@/app/api_helper/api_helper'
import Loading from '@/app/loading'
import { FileText, SearchX } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

export default function Page() {

    const [blogData, setBlogData] = useState(null)

    const [loading, setLoading] = useState(false)

    const slug = useParams().slug

    const fetchSectionsBySlug = async () => {
        try {
            setLoading(true)
            const response = await post_api({
                body: { slug },
                params: null,
                path: 'blog/fetch-sections-by-slug'
            })
            if (response.status == 200) {
                setBlogData(response.data.result[0])
            }
            else {
                setBlogData(null)
            }
        } catch (error) {

        }
        finally {
            setLoading(false)
        }
    }

    console.log('blogData', blogData)

    useEffect(() => {
        if (slug) fetchSectionsBySlug()
    }, [slug])

    //DESTRUCTURE DATA FROM BLOGS
    const { blog_author_name, blog_category_id, blog_full_description, blog_image, blog_read_time, blog_sections, blog_slug, blog_title, created_at, meta_description, meta_title, } = blogData || {}


    return (
        <>

            {loading && <div className='h-screen text-lg animate-pulse bg-white flex items-center justify-center w-full text-gray-800'>
                Loading Blog...
            </div>}

            {blogData ?
                <div>
                    <section className='w-full h-full'>
                        <div className='max-w-330 mx-auto lg:px-6 px-3'>
                            <div className='w-full h-[400] relative lg:mt-8 mt-4'>
                                <Image alt='blog image' src={blog_image} fill className='absolute object-cover rounded-xl top-0 left-0 w-full h-full' />
                            </div>
                            <div className='my-5 shadow-md p-5 rounded-xl'>

                                <h1 className='lg:text-3xl text-2xl group my-2 font-semibold text-[#00B4D8] duration-300'>{blog_title}
                                    <div className='w-[50] h-1.5 my-1 group-hover:w-[100] duration-300 rounded-full bg-[#00B4D8]'></div>
                                </h1>

                                <p className='mt-2 text-justify text-sm text-gray-700 whitespace-pre-line'>{blog_full_description}
                                </p>
                                <button className='text-md my-3 px-4 border-2 border-[#00B4D8] py-1 bg-[#00B4D8] text-white rounded-full'>By Dr Rajnish Sharma</button> <span className='text-md text-gray-600 font-semibold'>| Read Time 9 Min</span>
                            </div>

                            {
                                blog_sections?.length >= 1 ?

                                    blog_sections?.map((item, index) => {
                                        const { sub_content } = item
                                        console.log('sub_content', sub_content)
                                        return (
                                            <section className='my-5 md:p-7 md:border-2 border-gray-50 rounded-xl shadow-md'>
                                                <h1 className='lg:text-3xl text-xl group text-gray-900 my-2 font-semibold hover:text-[#00B4D8] duration-300'>
                                                    {item.section_title}
                                                </h1>
                                                <h1 className='lg:text-2xl text-xl group text-gray-900 my-2 font-semibold hover:text-[#00B4D8] duration-300'>
                                                    {item.section_short_description}
                                                </h1>
                                                <div className='grid lg:grid-cols-[auto_40%] md:grid-cols-[auto_35%] justify-between grid-cols-1 lg:items-center gap-10 '>
                                                    <div>
                                                        {/* <button className='text-md my-1 px-4 border-2 border-[#00B4D8] py-1 text-[#00B4D8] bg-white rounded-full'>By Dr Rajnish Sharma</button> */}
                                                        <p className='mt-2 text-justify whitespace-pre-line text-sm text-gray-700'>{item.section_full_description}
                                                        </p>
                                                        {sub_content &&

                                                            sub_content.map((item, index) => {
                                                                const { section_sub_points } = item
                                                                return (
                                                                    <div key={index}>
                                                                        <h3 className='my-3 text-lg font-semibold  text-[#00B4D8]'>{item.section_sub_heading} </h3>
                                                                        <ol className=''>
                                                                            {section_sub_points.map((sItem, SIndex) => {
                                                                                return (
                                                                                    <li key={SIndex} className='flex text-md items-center text-gray-800 gap-2'>
                                                                                        <div className='w-2 h-2 animate-pulse rounded-full bg-[#00B4D8] '></div>
                                                                                        {sItem}
                                                                                    </li>
                                                                                )
                                                                            })}
                                                                        </ol></div>
                                                                )
                                                            })

                                                        }

                                                    </div>
                                                    <div className='relative lg:w-full lg:h-[350] w-full h-[250] overflow-hidden cursor-pointer'>
                                                        <Image fill src={item.section_image} className='w-full h-full hover:scale-[1.1] duration-300  object-cover rounded-xl' alt='blog section image' />
                                                    </div>
                                                </div>
                                            </section>
                                        )
                                    })
                                    :
                                    <NoSectionCard />
                            }



                        </div>
                    </section>
                </div>
                :
                <NoBlogFound />

            }

        </>
    )
}


export function NoSectionCard() {
    return (
        <div className="w-full my-6">
            <div className="w-full border border-gray-200 rounded-2xl shadow-sm p-6 bg-linear-to-r from-gray-50 to-white flex flex-col lg:flex-row items-center justify-between gap-6">

                {/* Left Content */}
                <div className="flex-1">
                    <h2 className="text-xl lg:text-2xl font-semibold text-gray-800 mb-2">
                        No Sections Available
                    </h2>

                    <p className="text-gray-600 text-sm leading-relaxed">
                        This blog currently does not have any sections. Please check back later
                        or explore other blogs for more detailed content.
                    </p>

                    <Link
                        href="/blogs"
                        className="inline-block mt-4 px-5 py-2 rounded-full border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition duration-300"
                    >
                        Explore Blogs
                    </Link>
                </div>

                {/* Right Icon */}
                <div className="flex items-center justify-center w-[120] h-[120] rounded-full bg-[#00B4D8]/10">
                    <FileText size={50} className="text-[#00B4D8]" />
                </div>

            </div>
        </div>
    );
}

export function NoBlogFound() {
    return (
        <div className="w-full h-[60vh] flex items-center justify-center bg-linear-to-br from-white to-gray-50 px-4">

            <div className="text-center max-w-md w-full">

                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#00B4D8]/10">
                        <SearchX size={40} className="text-[#00B4D8]" />
                    </div>
                </div>

                {/* Heading */}
                <h1 className="text-2xl lg:text-3xl font-semibold text-gray-800">
                    No Blogs Found
                </h1>

                {/* Description */}
                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                    We couldn't find any blogs matching your request. Try exploring other
                    topics or come back later for fresh content.
                </p>

                {/* Button */}
                <Link
                    href="/blogs"
                    className="inline-block mt-6 px-6 py-2.5 rounded-full font-medium border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-all duration-300 shadow-sm hover:shadow-md"
                >
                    Explore Blogs
                </Link>

            </div>
        </div>
    );
}