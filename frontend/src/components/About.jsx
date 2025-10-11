"use client";
import React from "react";
import {
  FaUsers,
  FaLightbulb,
  FaBullseye,
  FaHandsHelping,
} from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="text-5xl font-bold mb-6 text-gradient-blue"
          data-aos="fade-down"
        >
          About Applute Technologies
        </h2>
        <p
          className="text-gray-700 max-w-3xl mx-auto mb-16 text-lg"
          data-aos="fade-up"
        >
          Applute Technologies is a leading technology company dedicated to
          innovation, research, and developing solutions that make the world
          better. We specialize in app development, web solutions, digital
          transformation, and cutting-edge technology services.
        </p>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            data-aos="fade-right"
          >
            <div className="flex items-center justify-center mb-4 text-gradient-blue text-3xl">
              <FaLightbulb />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gradient-blue">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To harness technology, innovation, and research to create
              solutions that improve lives and contribute to a better world.
            </p>
          </div>
          <div
            className="bg-white p-8 rounded-xl shadow-lg border border-gray-200"
            data-aos="fade-left"
          >
            <div className="flex items-center justify-center mb-4 text-gradient-blue text-3xl">
              <FaBullseye />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-gradient-blue">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To drive technological innovation, conduct impactful research, and
              deliver transformative solutions for businesses and society.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <h3
          className="text-4xl font-bold mb-10 text-gradient-blue"
          data-aos="fade-up"
        >
          Our Core Values
        </h3>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
            data-aos="zoom-in"
          >
            <FaUsers className="mx-auto mb-3 text-gradient-blue text-3xl" />
            <h4 className="font-semibold mb-1 text-gradient-blue">
              Collaboration
            </h4>
            <p className="text-gray-600 text-sm">
              We work together to solve challenges and innovate.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <FaLightbulb className="mx-auto mb-3 text-gradient-blue text-3xl" />
            <h4 className="font-semibold mb-1 text-gradient-blue">
              Innovation
            </h4>
            <p className="text-gray-600 text-sm">
              We embrace creativity and breakthrough solutions.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <FaHandsHelping className="mx-auto mb-3 text-gradient-blue text-3xl" />
            <h4 className="font-semibold mb-1 text-gradient-blue">Integrity</h4>
            <p className="text-gray-600 text-sm">
              We uphold honesty and professionalism in all we do.
            </p>
          </div>
          <div
            className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FaBullseye className="mx-auto mb-3 text-gradient-blue text-3xl" />
            <h4 className="font-semibold mb-1 text-gradient-blue">
              Excellence
            </h4>
            <p className="text-gray-600 text-sm">
              We strive for the highest standards in every project.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
