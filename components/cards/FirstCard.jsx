"use client";
import {
  useDisclosure,
  Button,
  Box,
  Heading,
  Text,
  UnorderedList,
  ListItem,
} from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CardBody, CardContainer, CardItem } from "../ui/cards/3d-card";
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

export function FirstCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[31rem] lg:w-[30em] lg:h-[38rem] h-auto rounded-[35px] p-6">
        <CardItem
          translateZ="50"
          className="text-xl p-2 rounded-full border-[3px] border-pink-300 font-bold text-pink-300 dark:text-white"
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
        <div className="flex mt-5 justify-between items-center">
          <Text
            color={"gray.500"}
            onClick={onOpen}
            translateZ={20}
            className="px-4 cursor-pointer hover:text-pink-500 duration-300 ease-in-out mt-4 py-4 text-lg font-normal "
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
                BIT 5-6 лет
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box p={5} color="gray.600">
                  <Heading as="h2" size="lg" mb={4}>
                    Курс для детей 5-6 лет
                  </Heading>
                  <Text mb={4}>
                    Это идеальная стартовая площадка для малышей, которые только
                    начинают знакомиться с программированием. Мы создаем
                    увлекательную и доступную среду, в которой дети учатся через
                    игру и творчество.
                  </Text>
                  <Text mb={4}>На курсе ребята будут:</Text>
                  <UnorderedList mb={4} spacing={2}>
                    <ListItem>
                      Изучать основы анимации и программирования в{" "}
                      <strong>Scratch Junior</strong>, создавая свои первые
                      мультфильмы;
                    </ListItem>
                    <ListItem>
                      Осваивать азы алгоритмов и логики с помощью{" "}
                      <strong>Lightbot</strong>, решая интересные задачи;
                    </ListItem>
                    <ListItem>
                      Работать с визуальной программой <strong>Пиктомир</strong>
                      , знакомясь с базовыми принципами кода.
                    </ListItem>
                  </UnorderedList>
                  <Text mb={4}>
                    Дети учатся в небольших группах по 8 человек, что позволяет
                    преподавателю уделять достаточно внимания каждому ученику.
                    Это помогает лучше понять материал и закрепить полученные
                    знания.
                  </Text>
                  <Text>
                    Этот курс развивает мышление, воображение и закладывает
                    фундамент для дальнейшего изучения программирования.
                  </Text>
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
            className="px-3 cursor-pointer py-3 mt-2 duration-300 ease-in-out rounded-full bg-pink-400 dark:bg-white text-white text-lg active:bg-pink-600 hover:bg-gray-300  font-bold"
          >
            Оставить заявку
          </ScrollLink>
        </div>
      </CardBody>
    </CardContainer>
  );
}
