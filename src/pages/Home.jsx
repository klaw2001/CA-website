import React from "react";
import MyCarousel from "../sections/CarouselSections/MyCarousel";
import AboutUs from "../sections/AboutSection/Aboutus";
import Services from "../sections/ServiceSection/Ourservices";
import Testimonial from "../sections/TestimonialSection/Testimonial";

import './mystyles.css'
const Home = () => {
  return (
    <>
      <MyCarousel />
      <AboutUs/>
      <Services/>
      <Testimonial/>
    </>
  );
};

export default Home;
