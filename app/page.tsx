'use client'


import { FloatingNavDemo } from '@/components/custom/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import  Header  from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import "./globals.css";
 


export default function Home() {
  return (
    <>
    <FloatingNavDemo/> 
    
    <ChakraProvider>
    <Header/>
    <HeroSection/>
    <Features/>
    <Footer/>
    </ChakraProvider>
    </>
  );
}
