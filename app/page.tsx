'use client'


import { FloatingNavDemo } from '@/components/custom/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import  Header  from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import SomeInfo from '@/components/SomeInfo'
import Courses from '@/components/Courses'
import ContactUs from '@/components/ContactUs'
import "./globals.css";

import Questions from '@/components/FAQ';

import PriceList from '@/components/Prices'
import { TypewriterEffectWords } from '@/components/TypeWriterWords';



export default function Home() {
  return (
    <>
    <FloatingNavDemo/> 
    <TypewriterEffectWords/>
    <ChakraProvider>
    <Header/>
    <HeroSection/>
    <Features/>
    <SomeInfo/>
    <Courses/>
    <Questions/>
    
    <PriceList/>
    <ContactUs/>
    <div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A1310ee24fa0e4717f56a401a049c366818ae5442e279ee96ee2a602ef6a80227&amp;source=constructor"  width="100%" height="320"></iframe>
</div>
    <Footer/>
    
    </ChakraProvider>
    </>
  );
}
