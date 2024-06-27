"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/cards/3d-card";
import Link from "next/link";
import { FirstButton } from "@/components/cards/card buttons/FirstButton";

export function FifthCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] lg:w-[30em] lg:h-[34rem] h-auto rounded-[35px] p-6">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Gbyte 13+ WEB программирование
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-md max-w-sm mt-2 dark:text-neutral-300"
        >
          Ребята изучат WEB-языки программирования: HTML, CSS для создания и
          разметки сайта. JavaScript для придания интерактивности сайтам. А
          после изучения языка PHP учащиеся смогут наделить собственный сайт
          продвинутыми механизмами обработки данных.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/5_card.png"
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-[35px] group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
