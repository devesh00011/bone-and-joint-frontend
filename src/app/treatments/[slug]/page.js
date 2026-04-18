import { get_api } from "@/app/api_helper/api_helper";
import ServiceSlugClient from "./ServiceSlugClient";
export const dynamic = "force-dynamic";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  console.log('slug', slug, slug)

  try {
    const res = await get_api({
      params: slug,
      path: 'service/view'
    });

    console.log('res', res.data.response)

    const services = res?.data?.response; // array

    // 👇 yahan filter karo
    const service = services?.find(
      (item) => item?.service_slug === slug
    );

    console.log('Matched service:', service);

    return {
      title: service?.meta_title || service?.service_name || "Services",
      description:
        service?.meta_description ||
        service?.meta_title ||
        "Treatments | Bone and Joint Hospital",
    };
  } catch (error) {
    return {
      title: "Treatments | Bone and Joint Hospital",
      description: "Treatments | Bone and Joint Hospital",
    };
  }
}

export default function ServicesSlug() {
  return (
    <>
      <ServiceSlugClient />
    </>

  )
}
