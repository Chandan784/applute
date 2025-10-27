"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  
   {
    image:
      "https://cdn.prod.website-files.com/5ce10a4d0b5f0b560c22e756/667edcffb8e2be1ef70d2fc8_best-ai-website-generator.webp",
    title: "Applute Technology",
    subtitle: "Learn Fullstack, React, Node, and more!",
    gradient: "from-blue-900/70 via-blue-800/40 to-purple-900/70",
  },
  {
    image:
      "https://www.addevice.io/storage/ckeditor/uploads/images/65f840d316353_mobile.app.development.1920.1080.png",
    title: "App Devlopment",
    subtitle: "Building Innovative Mobile Solutions for a Connected World",
    gradient: "from-blue-900/70 via-blue-800/40 to-purple-900/70",
  },
  {
    image:
      "https://cyberforttech.com/assets/uploads/media-uploader/top111703151348.png",
    title: "Web Development",
    subtitle: "Industry-relevant courses with hands-on projects",
    gradient: "from-emerald-900/70 via-emerald-800/40 to-cyan-900/70",
  },
  {
    image:
      "https://www.monkeydigital.org/wp-content/uploads/2025/05/Best-Digital-Marketing-Agencies-In-Mumbai.jpg",
    title: "Digital Marketing",
    subtitle: "Transform your career with cutting-edge technology",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
   {
    image:
      "https://euro-systems.co.uk/wp-content/uploads/2025/01/Benefits-of-Cloud-Computing.png",
    title: "Master in Cloud Computing",
    subtitle: "Revolutionizing Data Storage, Access, and Scalability in the Digital Era",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
   {
    image:
      "https://www.biometricsinstitute.org/wp-content/uploads/The-relationship-between-biometrics-and-artificial-intelligence-1024x576.jpg",
    title: "Artificial Inteligence",
    subtitle: "Transforming imagination into intelligence through innovation and data",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
   {
    image:
      "https://humanfocus.co.uk/wp-content/uploads/what-is-cyber-security.jpg",
    title: "Cyber Security",
    subtitle: "Protecting Digital Frontiers in an Era of Evolving Threats",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
   {
    image:
      "https://www.sphinx-solution.com/blog/wp-content/uploads/2019/06/successful-software-solutions.jpg",
    title: "Custom Software",
    subtitle: "Tailored digital solutions designed to streamline operations and elevate business performance.",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
   {
    image:
      "https://shooliniuniversity.com/blog/wp-content/uploads/2023/03/BTech-Mechanical-Engineering-Robotics-AI.png",
    title: "Robotics",
    subtitle: "Transforming the Future with Intelligent Machines",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
   {
    image:
      "https://itchronicles.com/wp-content/uploads/2021/04/Optimized-Illustration-from-Adobe-Stock-for-ITC-Post-on-AI-in-Game-Development-1024x576.jpeg",
    title: "Game Devlopment",
    subtitle: "Revolutionizing gameplay experiences through AI-driven design and immersive technology",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
   {
    image:
      "https://curiocial.com/content/images/size/w2000/2023/05/the-Most-Popular-Operating-Systems.jpg",
    title: "OS Devlopment",
    subtitle: "Building the core that powers every computing experience",
    gradient: "from-violet-900/70 via-purple-800/40 to-pink-900/70",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 🔁 Change animation style here: "fade" | "slide" | "zoom"
  const animationType = "zoom";

  useEffect(() => {
    if (isHovered) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isHovered]);

  const nextSlide = () => setIndex((i) => (i + 1) % slides.length);
  const prevSlide = () =>
    setIndex((i) => (i - 1 + slides.length) % slides.length);

  const currentSlide = slides[index];

  // 🎬 Define animations for each style
  const animations = {
    fade: {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 1 },
    },
    slide: {
      initial: { opacity: 0, x: 200 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -200 },
      transition: { duration: 1 },
    },
    zoom: {
      initial: { opacity: 0, scale: 1.2 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      transition: { duration: 1.2 },
    },
  };

  const anim = animations[animationType];

  return (
    <section
      className="relative  w-full h-[70vh] md:h-[80vh] lg:h-[90vh] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🎞 Background Animation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={anim.initial}
          animate={anim.animate}
          exit={anim.exit}
          transition={anim.transition}
        >
          <img
            src={currentSlide.image}
            alt="slide"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute inset-0 bg-gradient-to-br ${currentSlide.gradient}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* 📝 Content */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${index}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight drop-shadow-md">
              {currentSlide.title}
            </h2>
            <p className="text-lg md:text-2xl text-white/90 font-light max-w-2xl mx-auto">
              {currentSlide.subtitle}
            </p>

            <motion.a
              href="#courses"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-white to-gray-100 text-gray-900 font-bold text-lg py-4 px-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <span>Explore Services</span>
              <motion.svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </motion.svg>
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ◀▶ Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white border border-white/30 transition-all duration-300 opacity-0 group-hover:opacity-100"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* 🔵 Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <motion.button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition-all ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </section>
  );
}
