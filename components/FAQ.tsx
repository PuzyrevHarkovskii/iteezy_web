"use client";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  Heading,
  useColorModeValue,
  Text,
  Container,
} from "@chakra-ui/react";

import { ChevronDownIcon } from "@chakra-ui/icons";

export default function Questions() {
  return (
    <Flex
      py={"0em"}
      minH={"10vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("WhiteAlpha.200", "gray.800")}
    >
      <Container paddingTop="5em" paddingBottom={"3em"}>
        <Heading fontSize={"4xl"} pb={"1em"} mb={6} textAlign="center">
          Часто задаваемые вопросы
        </Heading>
        <Accordion allowMultiple width="100%" maxW="2lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" fontWeight={"bold"}>
                Как часто проходят занятия?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
                Занятие проходит 1 раз в неделю и длится 90 минут. Времени
                хватает на изучение теории и воплощение её в своих проектах на
                компьютере. Обучение состоит из 80 % практики и 20 % теории.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" fontWeight={"bold"}>
                Сколько учеников в группах?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
                Занятие проходят в группах до 8 человек. Мы не делаем больших
                групп, чтобы уделить время каждому.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" fontWeight={"bold"}>
                Есть ли домашнее задание?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
                Да, в большинстве модулей предусмотрены домашние задания и
                контрольные работы. Это позволяет контролировать учебный процесс
                и усвоение пройденного материала.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" fontWeight={"bold"}>
                Если ребенок пропустил занятие?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
                К пропускам ребят каждый раз подходим индивидуально: в некоторых
                случаях достаточно решить дополнительное домашнее задание или
                самостоятельную работу, а в некоторых назначаем дополнительную
                отработку с преподавателем. Также, мы можем предложить
                подключиться по скайпу к занятию в группе.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}
            >
              <Text fontSize="xl" fontWeight={"bold"}>
                Где мы находимся?
              </Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
                Витебский просп., 101, корп. 4, Санкт-Петербург, метро Купчино
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
