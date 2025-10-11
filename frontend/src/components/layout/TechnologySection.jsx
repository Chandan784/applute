"use client";
import React, { useRef, useEffect } from "react";
import * as Icons from "react-icons/si";

const TechnologySection = () => {
  const scrollRef = useRef(null);

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
    { name: "AWS", icon: "SiAmazonaws", color: "#FF9900" },
    { name: "Git", icon: "SiGit", color: "#F14E32" },
  ];

  // Smooth infinite scroll
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let pos = 0;
    const speed = 0.4;

    const animate = () => {
      pos += speed;
      scroll.scrollLeft = pos;
      if (pos >= scroll.scrollWidth / 2) pos = 0;
      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="py-20 bg-[#f5f5f5] relative overflow-hidden">
      {/* Soft background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.05),transparent_70%),radial-gradient(circle_at_80%_80%,rgba(147,197,253,0.05),transparent_70%)]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-400 to-blue-800 drop-shadow-sm">
          Our Technology Stack
        </h2>

        <div className="relative">
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide whitespace-nowrap pb-8"
          >
            <div className="flex gap-10 w-max mx-auto px-6">
              {[...technologies, ...technologies].map((tech, index) => {
                const IconComp = Icons[tech.icon];
                return (
                  <div
                    key={index}
                    className="group relative flex flex-col items-center justify-center min-w-[110px] sm:min-w-[150px] p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:scale-105"
                  >
                    {IconComp && (
                      <IconComp
                        size={52}
                        style={{ color: tech.color }}
                        className="mb-3 drop-shadow-sm"
                      />
                    )}
                    <span className="text-base sm:text-lg font-semibold text-gray-700">
                      {tech.name}
                    </span>

                    {/* Subtle hover overlay */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-500 to-blue-300 transition-opacity duration-500"></div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Gradient fade edges */}
          <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#f5f5f5] to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#f5f5f5] to-transparent z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
