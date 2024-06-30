"use client";

import { FloatingNavDemo } from "@/components/custom/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Features from "@/components/Features";
import SomeInfo from "@/components/SomeInfo";
import Courses from "@/components/Courses";
import ContactUs from "@/components/ContactUs";
import "./globals.css";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import Questions from "@/components/FAQ";
import PriceList from "@/components/Prices";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Footer1 from "@/components/Footer1";
import ContactForm from "@/components/ContactForm.jsx";
import ContactFormWithSocialButtons from "@/components/ContactForm.jsx";
import AnotherTry from "@/components/AnotherTry";
import Carousel from "@/components/ImagesCarousel";
import { Rubik_Mono_One } from "next/font/google";

export default function Home() {
  const coursesRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <ProgressBar />

      <FloatingNavDemo />

      <ChakraProvider>
        <Header />
        <HeroSection />
        <Features />
        <SomeInfo />
        <Courses />

        <Questions />

        <PriceList />

        <AnotherTry />

        <ContactUs />

        <div>
          <iframe
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A1310ee24fa0e4717f56a401a049c366818ae5442e279ee96ee2a602ef6a80227&amp;source=constructor"
            width="100%"
            height="320"
          ></iframe>
        </div>
        <Footer1 />
      </ChakraProvider>
    </>
  );
}
