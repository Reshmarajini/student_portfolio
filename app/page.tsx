// src/app/page.tsx


import React from 'react';
import Navbar from '../components/Navbar';
import Aboutme from '../components/Aboutme';
import Banner from '../components/Banner';
import Education from '../components/Education';
import Contact from "../components/Contact";
import Projects from "../components/Projects";
import Skills from "../components/Skills";



const HomePage = () => {
  return (
    <div className="bg-navy min-h-screen text-white">
      <Navbar />
      
      <main className="w-full bg-gray-950 text-gray-300 px-4">
      <div className="max-w-screen-xl mx-auto lg:pt-10">
        <Banner />
        <Aboutme />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      
      </div>
    </main>
      <footer className="bg-navy text-gray-400 py-6 mt-10">
        <div className="text-center">
          An Internship Project Done for Skillmate
        </div>
      </footer>
    </div>
  );
};

export default HomePage;