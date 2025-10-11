"use client";
import React, { useRef, useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import chandan from "../../../public/images/chandan.jpg";
import rohit from "../../../public/images/rohit.jpg";

const TeamSection = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const teamData = [
    {
      name: "Chandan Samantaray",
      role: "Founder & CEO",
      expertise: "Vision & Product Leadership",
      icon: chandan,
    },
    {
      name: "Rohit Singh",
      role: "CTO",
      expertise: "System Architecture & Innovation",
      icon: rohit,
    },
  ];

  useEffect(() => {
    const checkIfMobile = () => setIsMobile(window.innerWidth < 768);
    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      const newIndex = (index + teamData.length) % teamData.length;
      setCurrentIndex(newIndex);
    },
    [teamData.length]
  );

  const scrollToItem = (direction) => {
    if (!containerRef.current) return;
    const itemWidth = 340;
    containerRef.current.scrollBy({
      left: direction === "left" ? -itemWidth : itemWidth,
      behavior: "smooth",
    });
  };

  const handleTouchStart = (e) => {
    containerRef.current.touchStartX = e.touches[0].clientX;
  };
  const handleTouchEnd = (e) => {
    const diff = containerRef.current.touchStartX - e.changedTouches[0].clientX;
    if (diff > 50) goToSlide(currentIndex + 1);
    if (diff < -50) goToSlide(currentIndex - 1);
  };

  const MemberCard = ({ member }) => (
    <div className="backdrop-blur-lg bg-white/80 rounded-2xl border border-white/30 shadow-md p-6 mx-auto flex flex-col items-center text-center hover:shadow-xl transition-all duration-300">
      <div className="relative w-36 h-36 rounded-full overflow-hidden mx-auto shadow-lg border-4 border-blue-500/20">
        <Image
          src={member.icon || chandan}
          alt={member.name}
          width={144}
          height={144}
          className="object-cover w-full h-full"
        />
      </div>

      <h3 className="mt-5 font-extrabold text-xl bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent">
        {member.name}
      </h3>
      <p className="text-blue-600 font-medium text-sm mt-1">{member.role}</p>
      <p className="text-gray-600 text-sm mt-3 leading-relaxed">
        {member.expertise}
      </p>
    </div>
  );

  return (
    <section
      id="team"
      className="py-20 bg-gradient-to-b from-[#f8f9fb] via-[#f5f7fa] to-[#f1f5f9] text-gray-900 relative"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center bg-gradient-to-r from-blue-700 via-blue-500 to-sky-400 bg-clip-text text-transparent mb-4">
          Meet Our Expert Team
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          A team of passionate innovators, strategists, and engineers building
          the future of technology education.
        </p>

        {isMobile ? (
          <div className="relative h-[500px]">
            <div
              className="w-full h-full overflow-hidden flex items-center justify-center"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex w-full h-full transition-transform duration-500 ease-out justify-center"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {teamData.map((m, i) => (
                  <div
                    key={i}
                    className="flex-shrink-0 w-full px-4 flex justify-center"
                  >
                    <MemberCard member={m} />
                  </div>
                ))}
              </div>
            </div>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
              {teamData.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToSlide(i)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentIndex === i ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="relative flex justify-center items-center">
            <button
              onClick={() => scrollToItem("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-blue-600 hover:text-white text-blue-700 rounded-full p-3 shadow-lg backdrop-blur-md transition"
            >
              <FiChevronLeft size={22} />
            </button>

            <div
              ref={containerRef}
              className="flex overflow-x-auto scrollbar-hide gap-8 py-6 px-2 justify-center"
            >
              {teamData.map((m, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 w-[300px] sm:w-[320px] flex justify-center"
                >
                  <MemberCard member={m} />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollToItem("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-blue-600 hover:text-white text-blue-700 rounded-full p-3 shadow-lg backdrop-blur-md transition"
            >
              <FiChevronRight size={22} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TeamSection;
