import React, { useState } from 'react';
import { Code, ArrowRight, Menu, X } from 'lucide-react';
import "../styles/Home.css";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/services';
import Process from '../components/Process';
import Portfolio from '../components/Portfolio';
import CTA from '../components/CTA';
import Bubble from '../components/bubble.jsx';
import Footer from '../components/Footer.jsx';
import CV from '../components/CV.jsx';

export default function CVHome() {
  return (
    <div className="landing-container">
      <Bubble />
      <Navbar />
      <Navbar />
      <Hero />
      <CV/>
      <Services />
      <Process />
      <Portfolio />
      <CTA />
      <Footer />
  
    </div>
  );
}