'use client'
import React from "react";
import {Container} from '@chakra-ui/react'
import Name from '@/components/Новый трай/Name'

export const Title = () => {
    return (
        <Container align={'center'}
        justify={'center'} bgImage="url('https://c7.alamy.com/comp/2HC2PXR/research-and-development-back-to-school-online-formal-education-in-modern-life-home-schooling-concept-childhood-development-get-knowledge-through-2HC2PXR.jpg')" w={'full'} h={'100vh'} backgroundSize={'cover'}
      backgroundPosition={'center center'}>
        <Name />
        </Container>
    )
}