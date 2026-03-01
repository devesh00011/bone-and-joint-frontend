import About from "./home/WhyChooseUs";
import Doctors from "./home/DoctorsComp";
import Hero from "./home/Hero";
import AboutUs from "./home/AboutUs";
import WhyChooseUs from "./home/WhyChooseUs";
import Faqs from "./home/Faqs";
import BookAppointmentCTA from "./home/BookAppointmentCTA";
import Testimonials from "./home/Testimonials";
import OurServices from "./home/OurServices";
import Insurance from "./home/Insurance";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <AboutUs />
      <Doctors />
      <OurServices />
      <BookAppointmentCTA />
      <WhyChooseUs />
      <Insurance/>
      <Testimonials />
      <Faqs />
    </div>
  );
}
