'use client'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Flex,
  useColorModeValue,
  Text,
  Container,
} from '@chakra-ui/react'

import { ChevronDownIcon } from '@chakra-ui/icons'

export default function Questions() {
  return (
    <Flex
      minH={'10vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('WhiteAlpha.200', 'gray.800')}>
      <Container padding="8">
        <Accordion allowMultiple width="100%" maxW="2lg" rounded="lg">
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="xl" alignItems="center">Как часто проходят классные занятия?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
Занятие проходит 1 раз в неделю и длится 90 минут. Времени хватает на изучение теории и воплощение её в своих проектах на компьютере. Обучение состоит из 80 % практики и 20 % теории.

              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="xl">Какое максимальное количество человек в группах?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
              Занятие проходят в группах до 8 человек. Мы не делаем больших групп, чтобы уделить время каждому.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="xl">Есть ли домашнее задание и срезы знаний?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
              Да, в большинстве модулей предусмотрены домашние задания и контрольные работы. Это позволяет контролировать учебный процесс и усвоение пройденного материала.
              </Text>
            </AccordionPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionButton
              display="flex"
              alignItems="center"
              justifyContent="space-between"
              p={4}>
              <Text fontSize="xl">Если ребенок пропустил занятие, как догнать пропущенный материал?</Text>
              <ChevronDownIcon fontSize="24px" />
            </AccordionButton>
            <AccordionPanel pb={4}>
              <Text fontSize="lg" color="gray.600">
              К пропускам ребят каждый раз подходим индивидуально: в некоторых случаях достаточно решить дополнительное домашнее задание или самостоятельную работу, а в некоторых назначаем дополнительную отработку с преподавателем. Также, мы можем предложить подключиться по скайпу к занятию в группе.
              </Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </Container>
    </Flex>
  )
}