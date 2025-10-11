"use client";
import React, { useState } from "react";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can integrate email sending API or backend
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2
          className="text-5xl font-bold mb-6 text-gradient-blue"
          data-aos="fade-down"
        >
          Contact Us
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto" data-aos="fade-up">
          We would love to hear from you! Whether you have a question about our
          services, want to collaborate, or just want to say hi, feel free to
          reach out.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="text-left space-y-6" data-aos="fade-right">
            <div className="flex items-center space-x-3">
              <FiMail className="text-gradient-blue text-2xl" />
              <a
                href="mailto:applutetech@gmail.com"
                className="hover:text-gradient-blue transition duration-300"
              >
                applutetech@gmail.com
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FiPhone className="text-gradient-blue text-2xl" />
              <a
                href="tel:+916370302039"
                className="hover:text-gradient-blue transition duration-300"
              >
                +91 6370302039
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <FiMapPin className="text-gradient-blue text-2xl" />
              <span>Uttarahalli, Bangalore, India</span>
            </div>
            <div className="flex space-x-6 mt-6">
              <a
                href="https://facebook.com/applute"
                className="hover:text-gradient-blue transition duration-300"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/applute"
                className="hover:text-gradient-blue transition duration-300"
              >
                Twitter
              </a>
              <a
                href="https://linkedin.com/company/applute"
                className="hover:text-gradient-blue transition duration-300"
              >
                LinkedIn
              </a>
            </div>

            {/* Optional Map */}
            <div className="mt-6 w-full h-64 border rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31102.89967590457!2d77.537!3d12.917!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17067d5d6f8f%3A0x8206d625e9c08d!2sUttarahalli%2C%20Bangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
                className="w-full h-full"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-8 text-left"
            data-aos="fade-left"
          >
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gradient-blue"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gradient-blue"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gradient-blue"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 rounded-lg hover:opacity-90 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
