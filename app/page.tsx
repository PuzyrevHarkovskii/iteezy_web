'use client'

import {Title} from '@/components/custom/HeadingName'
import { FloatingNavDemo } from '@/components/custom/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import  HeaderSection  from '@/components/MyComponent/HeroSection'
import  TestimonialCard  from '@/components/ui/Testimonials'


export default function Home() {
  return (
    <>
    <FloatingNavDemo/>
    <ChakraProvider>
    <HeaderSection/>
    <TestimonialCard/>
    </ChakraProvider>
    
    </>
  );
}
