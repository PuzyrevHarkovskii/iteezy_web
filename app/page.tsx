'use client'


import { FloatingNavDemo } from '@/components/custom/Navbar';
import { ChakraProvider } from '@chakra-ui/react';
import  Header  from '@/components/Header'
 


export default function Home() {
  return (
    <>
    <FloatingNavDemo/> 
    
    <ChakraProvider>
    <Header/>
    </ChakraProvider>
    </>
  );
}
