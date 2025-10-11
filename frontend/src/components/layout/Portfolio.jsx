import React from "react";
import {
  FaUsersCog,
  FaWarehouse,
  FaHome,
  FaLeaf,
  FaCode,
  FaRobot,
  FaCalendarAlt,
  FaUniversity,
} from "react-icons/fa";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Bioknox HR Management",
      description: "Android app for HR and employee management.",
      icon: <FaUsersCog size={40} className="text-blue-500 mx-auto mb-4" />,
    },
    {
      title: "Disha Inventory Management",
      description: "App for tracking and managing stock efficiently.",
      icon: <FaWarehouse size={40} className="text-purple-400 mx-auto mb-4" />,
    },
    {
      title: "LandTreat.com",
      description: "Real estate company website for property listings.",
      icon: <FaHome size={40} className="text-orange-400 mx-auto mb-4" />,
    },
    {
      title: "Shreeharivatika.in",
      description: "Cottage and lifestyle product brand website.",
      icon: <FaLeaf size={40} className="text-green-400 mx-auto mb-4" />,
    },
    {
      title: "Tec-Centric.com",
      description: "Corporate site for a software development company.",
      icon: <FaCode size={40} className="text-cyan-400 mx-auto mb-4" />,
    },
    {
      title: "Amiloai.com",
      description: "Technology startup website focused on AI innovation.",
      icon: <FaRobot size={40} className="text-pink-400 mx-auto mb-4" />,
    },
    {
      title: "EventLamp.com",
      description: "Event booking platform with modern UX.",
      icon: (
        <FaCalendarAlt size={40} className="text-yellow-400 mx-auto mb-4" />
      ),
    },
    {
      title: "Adhikar App",
      description: "Android app for accessing government schemes.",
      icon: <FaUniversity size={40} className="text-indigo-400 mx-auto mb-4" />,
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-20 bg-gradient-to-b from-white via-blue-50 to-blue-100 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-gradient-blue">
          Our Portfolio
        </h2>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {projects.map((client, index) => (
            <div
              key={index}
              className="p-8 bg-white/90 border border-blue-200 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 hover:border-blue-400 transition-all duration-300 ease-in-out"
            >
              {client.icon}
              <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                {client.title}
              </h3>
              <p className="text-gray-600 text-sm">{client.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
