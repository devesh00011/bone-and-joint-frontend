
import { get_api } from "@/app/api_helper/api_helper";
import DoctorSlugClient from "./DoctorSlugClient";


export async function generateMetadata({ params }) {
    const { slug } =await params;

    try {
        const res = await get_api({
            params: slug,
            path: 'doctor/view'
        });

        const doctors = res?.data?.response; // array

        // 👇 yahan filter karo
        const doctor = doctors?.find(
            (item) => item?.doctor_slug === slug
        );

        console.log('Matched doctor:', doctor);

        return {
            title: doctor?.meta_title || doctor?.name || "Doctor",
            description:
                doctor?.meta_description ||
                doctor?.meta_title ||
                "Doctors | Bone and Joint Hospital",
        };
    } catch (error) {
        return {
            title: "Doctors | Bone and Joint Hospital",
            description: "Doctors | Bone and Joint Hospital",
        };
    }
}


export default function DoctorPage() {
    return (
        <>
            <DoctorSlugClient />
        </>
    );
}
