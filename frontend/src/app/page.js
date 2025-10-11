"use client";
import React, { useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import PortfolioSection from "@/components/layout/Portfolio";
import ClientsSection from "@/components/layout/ClientSection";
import TechnologySection from "@/components/layout/TechnologySection";
import TeamSection from "@/components/layout/TeamSection";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="font-sans bg-white text-gray-900 overflow-x-hidden">
      <Head>
        <title>Applute Technologies - Software Company</title>
        <meta
          name="description"
          content="Innovative solutions for app development, web development, digital marketing, and more."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <Hero />
      <Services />
      <PortfolioSection />
      <ClientsSection />
      <TechnologySection />
      <TeamSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Page;
