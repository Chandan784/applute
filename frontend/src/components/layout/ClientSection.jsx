"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  FiMapPin,
  FiBriefcase,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiStar,
} from "react-icons/fi";

const ClientsSection = () => {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const clientsData = [
    {
      name: "Compugraphs Softech",
      description:
        "Enterprise IT solutions and custom software development partner.",
      location: "Bhubaneswar",
      since: "2020",
      category: "Technology",
      rating: 5,
      image: "/images/client1.jpg",
    },
    {
      name: "Divisha LandTreat",
      description:
        "Innovative real estate and sustainable land development solutions.",
      location: "Bhubaneswar",
      since: "2021",
      category: "Real Estate",
      rating: 4,
      image: "/images/client2.jpg",
    },
    {
      name: "Amilo AI",
      description:
        "Cutting-edge artificial intelligence and machine learning solutions.",
      location: "Bangalore",
      since: "2022",
      category: "AI/ML",
      rating: 5,
      image: "/images/client3.jpg",
    },
    {
      name: "Skillanto",
      description:
        "Next-generation e-learning platform for professional skill development.",
      location: "Bhubaneswar",
      since: "2021",
      category: "EdTech",
      rating: 5,
      image: "/images/client4.jpg",
    },
    {
      name: "Genica",
      description:
        "Digital transformation and innovative technology consulting services.",
      location: "Bhubaneswar",
      since: "2020",
      category: "Consulting",
      rating: 4,
      image: "/images/client5.jpg",
    },
    {
      name: "Vernacular Medium",
      description: "Regional language education technology platform.",
      location: "Bhubaneswar",
      since: "2023",
      category: "EdTech",
      rating: 5,
      image: "/images/client6.jpg",
    },
  ];

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const goToSlide = (index) => {
    if (index < 0) index = clientsData.length - 1;
    if (index >= clientsData.length) index = 0;
    setCurrentIndex(index);
  };

  const scrollToItem = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const itemWidth = 300 + 16;
    const scrollAmount = direction === "left" ? -itemWidth : itemWidth;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX - containerRef.current.offsetLeft;
    scrollLeft.current = containerRef.current.scrollLeft;
    document.body.style.cursor = "grabbing";
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX.current) * 2;
    containerRef.current.scrollLeft = scrollLeft.current - walk;
  };
  const endDrag = () => {
    setIsDragging(false);
    document.body.style.cursor = "";
  };

  return (
    <section id="clients" className="py-16 bg-white text-gray-900 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient-blue">
          Our Esteemed Clients
        </h2>

        {/* --- Mobile View --- */}
        {isMobile && (
          <div className="relative w-full h-[320px]">
            <button
              onClick={() => goToSlide(currentIndex - 1)}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full p-2 shadow-md"
            >
              <FiChevronLeft size={20} />
            </button>

            <div className="overflow-hidden h-full rounded-xl">
              <div
                className="flex h-full transition-transform duration-300"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {clientsData.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-full px-6 py-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg"
                  >
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-blue-500 mx-auto"
                    />
                    <h3 className="text-xl font-semibold text-center">
                      {client.name}
                    </h3>
                    <p className="text-sm text-center text-gray-600 mb-2">
                      {client.description}
                    </p>
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(client.rating)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-center text-sm text-gray-600">
                      <FiMapPin className="inline mr-1" />
                      {client.location} • Since {client.since}
                    </div>
                    <div className="mt-2 text-center">
                      <span className="px-3 py-1 text-xs bg-blue-600 text-white rounded-full">
                        {client.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => goToSlide(currentIndex + 1)}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full p-2 shadow-md"
            >
              <FiChevronRight size={20} />
            </button>

            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-2">
              {clientsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        )}

        {/* --- Desktop View --- */}
        {!isMobile && (
          <div className="relative">
            <button
              onClick={() => scrollToItem("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-3 shadow-md z-10"
            >
              <FiChevronLeft size={24} />
            </button>

            <div
              ref={containerRef}
              className="w-full overflow-x-auto scrollbar-hide py-4"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={endDrag}
              onMouseLeave={endDrag}
            >
              <div className="flex w-max">
                {clientsData.map((client, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 w-[300px] mx-2 bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl shadow-lg border border-blue-200 hover:shadow-xl transition-all"
                  >
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-blue-500"
                    />
                    <h3 className="text-lg font-semibold mb-2 text-gray-900">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      {client.description}
                    </p>
                    <div className="flex gap-1 mb-2">
                      {[...Array(client.rating)].map((_, i) => (
                        <FiStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    <div className="text-sm text-gray-700 flex items-center justify-between">
                      <span className="flex items-center">
                        <FiMapPin className="mr-1" />
                        {client.location}
                      </span>
                      <span className="text-xs">
                        <FiCalendar className="inline mr-1" />
                        {client.since}
                      </span>
                    </div>
                    <div className="mt-3">
                      <span className="px-3 py-1 text-xs bg-blue-600 text-white rounded-full">
                        {client.category}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scrollToItem("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-100 hover:bg-blue-200 text-blue-700 rounded-full p-3 shadow-md z-10"
            >
              <FiChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ClientsSection;
