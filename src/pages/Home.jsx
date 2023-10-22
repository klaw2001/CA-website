import React from "react";
import MyCarousel from "../sections/CarouselSections/MyCarousel";
import AboutUs from "../sections/AboutSection/Aboutus";
import Services from "../sections/ServiceSection/Ourservices";
import Testimonial from "../sections/TestimonialSection/Testimonial";
import Newsletter from "../sections/NewsletterSection/Newsletter";
import Footercomp from "../sections/Footersection/Footercomp";
import Footerbottom from "../sections/Footersection/Footerbottom";
import GlobalComp1 from "../components/GlobalComps/GlobalComp1";
const Home = () => {
  return (
    <>
      <MyCarousel />
      <AboutUs/>
      <Services/>
      <Testimonial/>
      <Newsletter/>
     
    </>
  );
};

export default Home;
