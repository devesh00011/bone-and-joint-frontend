import React from 'react'
import BlogsClient from './BlogsClient'

export const metadata = {
    title: 'Our Blogs | Bone and Joint Hospital',
    description: 'Bone and Joint Hospital Blogs'
}

export default function Blogs() {
    return (
        <div>
            <BlogsClient />
        </div>
    )
}
