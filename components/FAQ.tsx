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
      px={{
        base: 2,
        lg: 16,
        xl: "20em",
      }}
      minH={"10vh"}
      bg={useColorModeValue("WhiteAlpha.200", "gray.800")}
    >
      <Container
        maxWidth="100%"
        paddingBottom={"3em"}
        bgColor={"#F2F6FD"}
        rounded={"35px"}
      >
        <Heading
          className="text-black"
          fontSize={"5xl"}
          pt={"1em"}
          pb={"1em"}
          mb={3}
          px={"4"}
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
                flex="1"
                textAlign="left"
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
              >
                <Text
                  as="span"
                  className="rounded-full inline-block w-10 h-10 leading-10 mr-4 text-center bg-pink-200"
                >
                  1{" "}
                </Text>
                Как часто проходят занятия?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                Занятие проходит{" "}
                <Text color={"gray.600"} as="mark" bgColor={"pink.100"}>
                  1 раз в неделю
                </Text>{" "}
                и длится{" "}
                <Text color={"gray.600"} as="mark" bgColor={"pink.100"}>
                  90 минут
                </Text>
                . Времени хватает на изучение теории и воплощение её в своих
                проектах на компьютере. Обучение состоит из 80% практики и 20%
                теории.
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
                flex="1"
                textAlign="left"
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
              >
                <Text
                  as="span"
                  className="rounded-full inline-block w-10 h-10 leading-10 mr-4 text-center bg-pink-200"
                >
                  2{" "}
                </Text>
                Какое максимальное количество учеников в группах?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                Занятие проходят в группах{" "}
                <Text color={"gray.600"} as="mark" bgColor={"blue.100"}>
                  до 8 человек
                </Text>
                . Мы не делаем больших групп, чтобы уделить время каждому.
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
                flex="1"
                textAlign="left"
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
              >
                <Text
                  as="span"
                  className="rounded-full inline-block w-10 h-10 leading-10 mr-4 text-center bg-pink-200"
                >
                  3{" "}
                </Text>{" "}
                Есть ли домашние задания?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                Да, в большинстве модулей предусмотрены{" "}
                <Text
                  as="mark"
                  color="gray.600"
                  bgColor={"pink"}
                  className="inline-block w-27 h-6 leading-6"
                >
                  домашние задания
                </Text>{" "}
                и{" "}
                <Text as="mark" color="gray.600" bgColor={"blue.100"}>
                  контрольные работы
                </Text>
                . Это позволяет контролировать учебный процесс и усвоение
                пройденного материала.
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
                flex="1"
                textAlign="left"
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
              >
                <Text
                  as="span"
                  className="rounded-full inline-block w-10 h-10 leading-10 mr-4 text-center bg-pink-200"
                >
                  4{" "}
                </Text>{" "}
                Если ребенок пропустил занятие?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                К пропускам ребят каждый раз подходим индивидуально: в некоторых
                случаях достаточно решить дополнительное домашнее задание или
                самостоятельную работу, а в некоторых назначаем дополнительную
                отработку с преподавателем.
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
                flex="1"
                textAlign="left"
                fontSize="2xl"
                fontWeight={"bold"}
                color={"gray.500"}
                _hover={{
                  color: "blue.500",
                  transition: "color 0.3s ease",
                }}
              >
                <Text
                  as="span"
                  className="rounded-full inline-block w-10 h-10 leading-10 mr-4 text-center bg-pink-200"
                >
                  5{" "}
                </Text>{" "}
                Где мы находимся?
              </Text>
              <ChevronDownIcon fontSize="40px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="xl" color="gray.600">
                Мы находимся на Витебском проспекте 101, корпус. 4,
                Санкт-Петербург, 5 минут от метро Купчино
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  );
}
