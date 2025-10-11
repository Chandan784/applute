"use client";
import React from "react";
import {
  FiCode,
  FiGlobe,
  FiTrendingUp,
  FiCpu,
  FiCloud,
  FiSettings,
} from "react-icons/fi";
import { FaRobot, FaBrain, FaGamepad, FaDesktop } from "react-icons/fa";

const services = [
  {
    icon: FiCode,
    title: "App Development",
    description:
      "Build cutting-edge mobile applications for iOS and Android with smooth performance.",
  },
  {
    icon: FiGlobe,
    title: "Web Development",
    description:
      "Modern, responsive, and scalable web solutions using the latest technologies.",
  },
  {
    icon: FiTrendingUp,
    title: "Digital Marketing",
    description:
      "Boost your online presence with proven digital marketing strategies.",
  },
  {
    icon: FiCloud,
    title: "Cloud Computing",
    description:
      "Leverage cloud platforms to deploy scalable, secure, and flexible solutions.",
  },
  {
    icon: FaBrain,
    title: "Artificial Intelligence",
    description:
      "Implement AI solutions that optimize processes and deliver insights.",
  },
  {
    icon: FiCpu,
    title: "Cyber Security",
    description:
      "Protect your systems with advanced security measures and monitoring.",
  },
  {
    icon: FiSettings,
    title: "Custom Software",
    description:
      "Tailored software solutions that meet your business-specific requirements.",
  },
  {
    icon: FaRobot,
    title: "Robotics",
    description:
      "Develop innovative robotic systems for automation and efficiency.",
  },
  {
    icon: FaGamepad,
    title: "Game Development",
    description:
      "Create immersive and interactive games across multiple platforms.",
  },
  {
    icon: FaDesktop,
    title: "OS Development",
    description:
      "Develop custom operating systems for specialized hardware or applications.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-16 text-gradient-blue">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2 hover:bg-gradient-to-tl hover:from-white hover:via-blue-50 hover:to-white"
              >
                {/* Gradient Icon using mask / bg-clip-text */}
                <div className="mb-6 w-16 h-16 flex items-center justify-center">
                  <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="url(#gradient)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs>
                      <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="50%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#6366f1" />
                      </linearGradient>
                    </defs>
                    <Icon />
                  </svg>
                </div>

                <h3 className="text-2xl font-bold mb-3 text-gray-900 hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
