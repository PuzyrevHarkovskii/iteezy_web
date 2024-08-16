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

export function ThirdCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[31rem] lg:w-[30em] lg:h-[41rem] h-auto rounded-[35px] p-6 ">
        <CardItem
          translateZ="50"
          className="text-xl p-2 rounded-full border-[3px] border-pink-300 font-bold text-pink-300 dark:text-white"
        >
          KByte 8-10 лет
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          Дети познакомятся с солнечной системой, физикой и перемещением
          объектов. Запрограммируют свои миры в Minecraft и создадут свои
          проекты в Scratch и CoSpaces.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/3_card.png"
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
            className="px-4 cursor-pointer mt-4 py-4 hover:text-pink-500 duration-300 ease-in-out text-lg font-normal "
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
                KByte 8-9 лет
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box p={5} color="gray.600">
                  <Heading as="h2" size="lg" mb={4}>
                    Курс для детей 8-10 лет
                  </Heading>
                  <Text mb={4}>
                    Это важный шаг к освоению цифровых навыков, которые
                    становятся неотъемлемой частью нашей жизни. Понимание того,
                    как работает кодинг, формирует основы цифровой грамотности,
                    что особенно важно в современном технологическом мире. В
                    рамках курса ребята не только овладеют программированием, но
                    и познакомятся с основами физики и солнечной системой.
                  </Text>
                  <Text mb={4}>На курсе дети будут работать с:</Text>
                  <UnorderedList mb={4} spacing={2}>
                    <ListItem>
                      <strong>Minecraft Edu</strong> — программирование
                      интуитивно через перетаскивание блоков с командами.
                      Развитие навыков логики и построение сложных проектов.
                    </ListItem>
                    <ListItem>
                      <strong>CoSpaces</strong> — создание и управление
                      трехмерными объектами, разработка VR-игр и анимационных
                      фильмов, что развивает пространственное мышление.
                    </ListItem>
                    <ListItem>
                      <strong>Scratch 3.0</strong> — изучение понятий
                      алгоритмов, СКИ (система команд исполнителя), условий,
                      переменных, циклов, системы координат и направления
                      движения. Презентация и защита собственных проектов.
                    </ListItem>
                    <ListItem>
                      <strong>Цифровая грамотность</strong> — работа с файлами,
                      установка программ, редактирование текстов и их печать,
                      создание цифровых рисунков, инфографики и таблиц, а также
                      создание презентаций. Ребята научатся безопасно искать
                      информацию в интернете, защищать свои личные данные,
                      регистрироваться на сайтах и пользоваться электронной
                      почтой.
                    </ListItem>
                  </UnorderedList>
                  <Text mb={4}>
                    Дети научатся логически мыслить, создавать программы и игры,
                    работать с графикой и анимацией. Также они будут развивать
                    навыки командной работы, применять полученные знания для
                    решения разнообразных задач и лучше понимать, как законы
                    физики влияют на процессы в играх.
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
            className="px-3 cursor-pointer py-3 mt-2 duration-300 active:bg-yellow-600 hover:bg-gray-300 ease-in-out rounded-full bg-yellow-500 dark:bg-white text-white text-lg font-bold"
          >
            Оставить заявку
          </ScrollLink>
        </div>
      </CardBody>
    </CardContainer>
  );
}
