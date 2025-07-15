import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaMapMarkedAlt,
  FaComments,
  FaCalendarCheck,
} from "react-icons/fa";

const services = [
    {
      link: "https://maps.app.goo.gl/rQ34VyPkjcU9sWKD6",
      title: "Find Dealer",
      description:
        "Locate the nearest official BMW dealer in seconds and schedule your visit with ease — wherever you are.",
      icon: <FaMapMarkedAlt className="text-3xl text-blue-600 mb-4" />,
    },
    {
      link: "https://wa.me/6289653479540",
      title: "Product Consultation",
      description:
        "Get expert advice from our certified BMW consultants to help you choose the right car that fits your lifestyle.",
      icon: <FaComments className="text-3xl text-blue-600 mb-4" />,
    },
    {
      link: "https://wa.me/6289653479540",
      title: "Booking Service",
      description:
        "Easily book a service appointment online with just a few clicks — fast, reliable, and fully digital.",
      icon: <FaCalendarCheck className="text-3xl text-blue-600 mb-4" />,
    },
  ];

export default function Services() {
  useEffect(() => {
    AOS.init({
        duration: 600,   
        easing: "ease-out-cubic",
        once: true,     
    });
    }, []);

  return (
    <section className="h-[90vh] bg-white py-0 md:py-20 px-4 md:px-20">
      <div className="text-center mb-12" data-aos="fade-up">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          What Our Service Provide
        </h2>
        <p className="text-gray-500 max-w-xl mx-auto">
          Our Car Online Booking System Designed To Meet The Specific Needs Of
          Car For specific Owners.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up">
        {services.map((service, index) => (
          <a
            key={index}
            href={service.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-50 hover:bg-white transition-all duration-300 rounded-xl p-6 shadow-sm hover:shadow-lg border border-transparent hover:border-blue-200 block">
            {service.icon}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {service.title}
            </h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </a>
        ))}
      </div>
    </section>
  )
}
