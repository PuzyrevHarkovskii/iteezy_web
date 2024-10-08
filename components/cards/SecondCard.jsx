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

export function SecondCard() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[31rem] lg:w-[30em] lg:h-[38rem] h-auto rounded-[35px] p-6 ">
        <CardItem
          translateZ="50"
          className="text-xl p-2 rounded-full border-[3px] border-pink-300 font-bold text-pink-300 dark:text-white"
        >
          BYTE 6-8 лет
        </CardItem>

        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-left text-lg max-w-sm mt-2 dark:text-neutral-300"
        >
          Дети познакомятся с новыми программами: В ScratchJr создадут
          персонажей и мультфильмы. В KODU - собственную игру.
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/images/2_card.png"
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
                BYTE 6-7 лет
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Box p={5} color="gray.600">
                  <Heading as="h2" size="lg" mb={4}>
                    Курс для детей 6-8 лет
                  </Heading>
                  <Text mb={4}>
                    Это увлекательное путешествие в мир программирования и
                    компьютерных технологий. На этом этапе ребята познакомятся с
                    новыми программами и расширят свои навыки.
                  </Text>
                  <Text mb={4}>На курсе дети будут:</Text>
                  <UnorderedList mb={4} spacing={2}>
                    <ListItem>
                      Создавать персонажей и мультфильмы в{" "}
                      <strong>ScratchJr</strong>, развивая навыки анимации и
                      творчества;
                    </ListItem>
                    <ListItem>
                      Работать в <strong>KODU</strong>, где они создадут игру с
                      перемещением камеры и научатся взаимодействию объектов в
                      виртуальном мире;
                    </ListItem>
                    <ListItem>
                      Осваивать плавную анимацию в{" "}
                      <strong>PIVOT ANIMATOR</strong>, добавляя звуковое
                      сопровождение для своих проектов.
                    </ListItem>
                  </UnorderedList>
                  <Text mb={4}>
                    Также дети изучат основы компьютерной грамотности: они
                    познакомятся с правилами безопасности в интернете и базовыми
                    принципами работы за компьютером. После курса ребенок сможет
                    уверенно пользоваться ноутбуком или ПК, а также искать
                    информацию в сети.
                  </Text>
                  <Text>
                    Занятия по визуальному программированию стимулируют
                    воображение и помогают развивать логическое мышление. Ребята
                    решают игровые задачи, рисуют и работают в команде, что
                    помогает им не только освоить программирование, но и стать
                    более креативными и самостоятельными.
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
            className="px-3 cursor-pointer py-3 mt-2 duration-300 ease-in-out active:bg-blue-500 hover:bg-gray-300 rounded-full bg-blue-400 dark:bg-white text-white text-lg font-bold"
          >
            Оставить заявку
          </ScrollLink>
        </div>
      </CardBody>
    </CardContainer>
  );
}
