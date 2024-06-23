"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/cards/3d-card";
import Link from "next/link";
import {FirstButton} from '@/components/cards/card buttons/FirstButton'

  

export function SecondCard() {
  return (
    
    <CardContainer className="inter-var">
    
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
        
          BYTE 6-7 лет
        </CardItem>
        
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-md max-w-sm mt-2 dark:text-neutral-300"
        >
          Дети познакомятся с новыми программами:
В ScratchJr создадут своих персонажей и сделают свои первые простые мультфильмы.
В KODU сделают игру с перемещением камеры, поймут как взаимодействуют объекты.
В PIVOT ANIMATOR сделают плавную покадровую анимацию.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/header_logo3.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-3">
          
          
        </div>
        
      </CardBody>
      
    </CardContainer>
    
  );
}
