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
      pt={8}
      minH={"10vh"}
      bg={useColorModeValue("WhiteAlpha.200", "gray.800")}
    >
      <Container paddingBottom={"3em"}>
        <Heading
          className="text-blue-500"
          fontSize={"5xl"}
          pt={"1em"}
          pb={"1em"}
          mb={3}
        >
          Часто задаваемые вопросы
        </Heading>
        <Accordion allowMultiple width="100%" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <Text
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
              >
                Как часто проходят занятия?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                {" "}
                Занятие проходит 1 раз в неделю и длится{" "}
                <span style={{ color: "blue" }}>90 минут</span>. Времени хватает
                на изучение теории и воплощение её в своих проектах на
                компьютере. Обучение состоит из{" "}
                <span style={{ color: "blue" }}>80% практики</span> и{" "}
                <span style={{ color: "blue" }}>20% теории</span>.{" "}
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <Text
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
              >
                Сколько учеников в группах?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                Занятие проходят в группах{" "}
                <span style={{ color: "blue" }}>до 8 человек</span>. Мы не
                делаем больших групп, чтобы уделить время каждому.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <Text
                fontSize="2xl"
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
                fontWeight={"bold"}
                color={"gray.500"}
              >
                Есть ли домашнее задание?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                Да, в большинстве модулей предусмотрены{" "}
                <span style={{ color: "blue" }}>домашние задания</span> и{" "}
                <span style={{ color: "green" }}>контрольные работы</span>. Это
                позволяет контролировать учебный процесс и усвоение пройденного
                материала.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              justifyContent="space-between"
              p={4}
            >
              <Text
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
              >
                Если ребенок пропустил занятие?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
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
              justifyContent="space-between"
              p={4}
            >
              <Text
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
              >
                Где мы находимся?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                Витебский просп., 101, корп. 4, Санкт-Петербург, метро Купчино
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
