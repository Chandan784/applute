"use client";
import React, { useEffect } from "react";
import * as Icons from "react-icons/si";

const TechnologySection = () => {
  const technologies = [
    { name: "React", icon: "SiReact", color: "#61DAFB" },
    { name: "Next.js", icon: "SiNextdotjs", color: "#000000" },
    { name: "Node.js", icon: "SiNodedotjs", color: "#3C873A" },
    { name: "Python", icon: "SiPython", color: "#3776AB" },
    { name: "TypeScript", icon: "SiTypescript", color: "#3178C6" },
    { name: "MongoDB", icon: "SiMongodb", color: "#4DB33D" },
    { name: "MySQL", icon: "SiMysql", color: "#00758F" },
    { name: "Firebase", icon: "SiFirebase", color: "#FFCA28" },
    { name: "Flutter", icon: "SiFlutter", color: "#02569B" },
    { name: "Docker", icon: "SiDocker", color: "#2496ED" },
    { name: "Kotlin", icon: "SiKotlin", color: "#A97BFF" },
    { name: "Swift", icon: "SiSwift", color: "#FA7343" },
    { name: "GraphQL", icon: "SiGraphql", color: "#E10098" },
    { name: "Git", icon: "SiGit", color: "#f04527ff" },
  ];

  // Mobile-only circular orbit
  useEffect(() => {
    const icons = document.querySelectorAll(".orbit-icon");
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const radius = 120;
    const total = icons.length;
    icons.forEach((icon, i) => {
      const angle = (i / total) * (2 * Math.PI);
      const x = radius * Math.cos(angle);
      const y = radius * Math.sin(angle);
      icon.style.transform = `translate(${x}px, ${y}px)`;
    });
  }, []);

  return (
    <section className="py-20 bg-[#f5f5f5] relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.05),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(147,197,253,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* LEFT TEXT SECTION */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800">
            Our Technology Stack
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            We build modern, scalable, and secure digital products using
            cutting-edge technologies. From frontend to backend, mobile to cloud
            — we innovate at every layer.
          </p>
          <button className="mt-4 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300">
            Learn More
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="lg:w-1/2 flex items-center justify-center relative mx-auto">
          {/* Desktop: Grid layout */}
          <div className="hidden md:flex flex-wrap justify-center gap-8">
            {technologies.map((tech, index) => {
              const IconComp = Icons[tech.icon];
              return (
                <div
                  key={index}
                  className="flex flex-col items-center transition-transform duration-300 hover:scale-110"
                >
                  {IconComp && (
                    <IconComp
                      size={45}
                      style={{ color: tech.color }}
                      className="drop-shadow-md"
                    />
                  )}
                  <span className="text-sm font-medium text-gray-700 mt-2">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Mobile: Circular rotating animation */}
          <div className="md:hidden relative w-[300px] h-[300px] sm:w-[340px] sm:h-[340px] mx-auto">
            <div className="absolute w-full h-full animate-spin-slow rounded-full border-[1px] border-blue-200 flex items-center justify-center">
              {technologies.map((tech, index) => {
                const IconComp = Icons[tech.icon];
                return (
                  <div
                    key={index}
                    className="orbit-icon absolute transition-transform duration-500"
                  >
                    {IconComp && (
                      <IconComp
                        size={36}
                        style={{ color: tech.color }}
                        className="drop-shadow-md"
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="absolute w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full blur-lg opacity-70"></div>
          </div>
        </div>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default TechnologySection;
