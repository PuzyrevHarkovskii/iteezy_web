"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/cards/3d-card";

export function FirstCard() {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[31rem] lg:w-[30em] lg:h-[35rem] h-auto rounded-[35px] p-6">
        <CardItem
          translateZ="50"
          className="text-xl p-2 rounded-full bg-[#F9DAFE] font-bold text-neutral-600 dark:text-white"
        >
          BIT 5-6 лет
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          Стартовая площадка для учащихся в возрасте от 5 до 6 лет. Курс для
          начинающих учеников, не знакомых с программированием.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/1_card.png"
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-[35px] group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center">
          <CardItem
            translateZ={20}
            as={Link}
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-lg font-normal dark:text-white"
          >
            Подробнее ↗
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2  rounded-xl bg-black dark:bg-white dark:text-black text-white text-lg font-bold"
          >
            Оставить заявку
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
