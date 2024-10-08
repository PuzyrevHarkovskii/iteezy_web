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

export function FifthCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[31rem] lg:w-[30em] lg:h-[45rem] h-auto rounded-[35px] p-6">
        <CardItem
          translateZ="50"
          className="text-xl p-2 rounded-full border-[3px] border-pink-300 font-bold text-pink-300 dark:text-white"
        >
          Gbyte 12-14 WEB
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300"
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
        <div className="flex mt-5 justify-between items-center">
          <Text
            color={"gray.500"}
            onClick={onOpen}
            translateZ={20}
            className="px-4 cursor-pointer mt-4 py-4 duration-300 ease-in-out hover:text-pink-500 text-lg font-normal "
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
                    Курс для детей 12-14 лет
                  </Heading>
                  <Text mb={4}>
                    Этот курс расширит знания ребят в сфере IT-технологий. На
                    занятиях дети будут изучать:
                  </Text>
                  <UnorderedList mb={4} spacing={2}>
                    <ListItem>
                      <strong>Высокоуровневый язык Python</strong> — освоение
                      современного языка программирования.
                    </ListItem>
                    <ListItem>
                      <strong>Создание чат-бота в Telegram</strong> — разработка
                      собственного чат-бота, который будет выполнять различные
                      функции.
                    </ListItem>
                    <ListItem>
                      <strong>Нейронные сети и машинное обучение</strong> —
                      введение в основы машинного обучения и работа с нейронными
                      сетями.
                    </ListItem>
                    <ListItem>
                      <strong>
                        Синтаксис и прикладные задачи на языках C++ и C#
                      </strong>{" "}
                      — изучение популярных языков программирования и решение
                      реальных задач.
                    </ListItem>
                  </UnorderedList>
                  <Text mb={4}>
                    Изучение языков программирования поможет структурировать
                    мышление, развить логику и критическое мышление, что
                    является важным в современном мире. В игровой форме дети
                    будут углублять свои знания в программировании, решать
                    логические задачи, работать над проектами и заниматься
                    командной работой. В ходе курса ребята создадут собственные
                    проекты и защитят их. Занятия будут сочетать теоретические
                    знания с практическими навыками.
                  </Text>
                  <Text>
                    <strong>
                      Чему научится ребенок на курсе программирования GBYTE:
                    </strong>{" "}
                    Ребята научатся логически мыслить, погружаться в машинное
                    обучение и объектно-ориентированное программирование. Они
                    также освоят оформление проектной работы и её защиту, а
                    также смогут программировать собственного чат-бота.
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
            className="px-3 cursor-pointer py-3 mt-2 hover:bg-gray-300 ease-in-out duration-300 active:bg-green-700 rounded-full bg-green-600 dark:bg-white text-white text-lg font-bold"
          >
            Оставить заявку
          </ScrollLink>
        </div>
      </CardBody>
    </CardContainer>
  );
}
