"use client";

import { useDisclosure, Button, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/cards/3d-card";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

export function FourthCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[31rem] lg:w-[30em] lg:h-[41rem] h-auto rounded-[35px] p-6 ">
        <CardItem
          translateZ="50"
          className="text-xl p-2 rounded-full border-[3px] border-pink-300 font-bold text-pink-300 dark:text-white"
        >
          Mbyte 10-11 лет
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg text-left max-w-sm mt-2 dark:text-neutral-300"
        >
          Ребята познакомятся с платформой Roblox Studio и изучат язык Lua.
          Начнут изучать базовые основы языка Python и перейдут к практическому
          изучению Python в Minecraft.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/4_card.png"
            height="1000"
            width="1000"
            className="h-80 w-full object-cover rounded-[35px] group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex mt-5 justify-between items-center">
          <Text
            color={"gray.500"}
            onClick={onOpen}
            translateZ={20}
            className="px-4 mt-4 py-4 hover:text-pink-500 duration-300 ease-in-out text-lg font-normal "
          >
            Подробнее
          </Text>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent rounded={"35px"}>
              <ModalHeader
                bgColor={"pink"}
                rounded={"full"}
                m={"5"}
                textAlign={"center"}
              >
                Mbyte 10-11 лет
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box p={5} color="gray.600">
                  <Heading as="h1" size="lg" mb={4}>
                    Подробная информация про курс
                  </Heading>
                  <Text mb={2}>Текст</Text>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button
                  colorScheme="pink"
                  rounded={"full"}
                  mr={3}
                  onClick={onClose}
                >
                  Закрыть
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
          <ScrollLink
            translateZ={20}
            as="button"
            to="contactus"
            smooth={true}
            duration={300}
            className="px-3 py-3 mt-2 hover:bg-gray-300 active:bg-red-600 duration-300 ease-in-out rounded-full bg-red-500 dark:bg-white text-white text-lg font-bold"
          >
            Оставить заявку
          </ScrollLink>
        </div>
      </CardBody>
    </CardContainer>
  );
}
