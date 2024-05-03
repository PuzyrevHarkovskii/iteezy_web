'use client'


import { FloatingNavDemo } from '@/components/custom/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import  Header  from '@/components/Header'
import HeroSection from '@/components/HeroSection'
 


export default function Home() {
  return (
    <>
    <FloatingNavDemo/> 
    
    <ChakraProvider>
    <Header/>
    <HeroSection/>
    </ChakraProvider>
    </>
  );
}
