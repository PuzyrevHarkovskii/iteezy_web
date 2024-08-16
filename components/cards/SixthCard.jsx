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

export function SixthCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[31rem] lg:w-[30em] lg:h-[45rem] h-auto rounded-[35px] p-6">
        <CardItem
          translateZ="50"
          className="text-xl p-2 rounded-full border-[3px] border-pink-300 font-bold text-pink-300 dark:text-white"
        >
          Gbyte 14-17 WEB
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          Ребята изучат: языки WEB программирования HTML+ CSS для создания и
          разметки сайта, Язык JavaScript для придания интерактивности Web
          странице. А после изучения языка PHP учащиеся смогут наделить
          собственный сайт продвинутыми механизмами обработки данных.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/6_card.png"
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
            className="px-4 mt-4 py-4 cursor-pointer duration-300 ease-in-out hover:text-pink-500 text-lg font-normal "
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
                Политика конфиденциальности
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box p={5} color="gray.600">
                  <Heading as="h2" size="lg" mb={4}>
                    Курс для детей 14-17 лет
                  </Heading>
                  <Text mb={4}>
                    Этот курс предоставит углубленные знания в
                    веб-программировании и дизайне, обеспечивая понимание
                    ключевых технологий для создания современных сайтов и
                    приложений. На занятиях ребята будут изучать:
                  </Text>
                  <UnorderedList mb={4} spacing={2}>
                    <ListItem>
                      <strong>HTML и CSS</strong> — создание разметки и дизайна
                      сайта.
                    </ListItem>
                    <ListItem>
                      <strong>JavaScript</strong> — добавление интерактивности
                      на web-страницу.
                    </ListItem>
                    <ListItem>
                      <strong>PHP</strong> — внедрение механизмов обработки
                      данных, используемых в 80% веб-сайтов мира.
                    </ListItem>
                    <ListItem>
                      <strong>Figma</strong> — базовые навыки веб-дизайна.
                      Ребята создадут лендинг, который можно будет использовать
                      в своем портфолио.
                    </ListItem>
                  </UnorderedList>
                  <Text mb={4}>
                    Изучение языков программирования и инструментов веб-дизайна
                    поможет структурировать мышление, развить логику и
                    критическое мышление. В рамках курса дети будут углублять
                    свои знания в программировании и дизайне, решать логические
                    задачи, работать над собственными проектами и заниматься
                    командной работой. Все занятия будут сочетать теоретическое
                    изучение с практическими заданиями, включая создание и
                    защиту собственных проектов.
                  </Text>
                  <Text>
                    <strong>
                      Чему научится ребенок на курсе программирования GBYTE:
                    </strong>{" "}
                    Ребята научатся создавать сайты, логически мыслить, работать
                    с объектно-ориентированным программированием, оформлять
                    проектную работу и защищать её. Они также будут применять
                    свои навыки для решения задач и писать скрипты серверной
                    части.
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
            className="px-3 py-3 mt-2 cursor-pointer duration-300 hover:bg-gray-300 ease-in-out active:bg-blue-400 rounded-full bg-indigo-400 dark:bg-white text-white text-lg font-bold"
          >
            Оставить заявку
          </ScrollLink>
        </div>
      </CardBody>
    </CardContainer>
  );
}
