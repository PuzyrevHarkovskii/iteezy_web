"use client";

import { useDisclosure, Button, Box, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/cards/3d-card";
import Link from "next/link";
import { FirstButton } from "@/components/cards/card buttons/FirstButton";
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
          Gbyte 13+ WEB
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
            className="px-4 mt-4 py-4 duration-300 ease-in-out hover:text-pink-500 text-lg font-normal "
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
                  <Heading as="h1" size="lg" mb={4}>
                    Положение об обработке персональных данных
                  </Heading>
                  <Text mb={2}>
                    Настоящее Положение определяет политику Hello STEM PTE. LTD.
                    в отношении обработки персональных данных и
                    конфиденциальности, регулирует вопросы обработки
                    персональных данных и устанавливает процедуры, направленные
                    на предотвращение и выявление нарушений законодательства,
                    устранение последствий таких нарушений.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    1. ОСНОВНЫЕ ПОНЯТИЯ
                  </Heading>
                  <Text>
                    <b>Сайт</b> – сайт, расположенный в сети Интернет по адресу{" "}
                    <Link href="https://hwschool.online" color="blue.500">
                      https://hwschool.online
                    </Link>
                  </Text>
                  <Text>
                    <b>Пользователь</b> – пользователь Сайта, физическое или
                    юридическое лицо, использующий Форму Заявки на сайте.
                  </Text>
                  <Text>
                    <b>Администрация сайта</b> – Hello STEM PTE. LTD.,
                    размещающее на сайте информацию о своей общественной и
                    коммерческой деятельности.
                  </Text>
                  <Text>
                    <b>Форма Заявки</b> – специальные поля, куда Пользователь
                    вносит персональную информацию с целью передачи данных о
                    пользователе Администрации Сайта.
                  </Text>
                  <Text>
                    <b>Cookies</b> – небольшой фрагмент данных, отправленный
                    веб‑сервером и хранимый на компьютере пользователя, который
                    веб-клиент или веб‑браузер каждый раз пересылает веб-серверу
                    в HTTP‑запросе при попытке открыть страницу соответствующего
                    сайта.
                  </Text>
                  <Text>
                    <b>IP-адрес</b> – уникальный сетевой адрес узла в
                    компьютерной сети, построенной по протоколу IP.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    2. ОБЩИЕ ПОЛОЖЕНИЯ
                  </Heading>
                  <Text>
                    2.1. Настоящее Положение является официальным типовым
                    документом и определяет порядок обработки и защиты
                    информации о физических и юридических лицах, использующих
                    Форму Заявки на Сайте.
                  </Text>
                  <Text>
                    2.2. Целью настоящего Положения является обеспечение
                    надлежащей защиты информации о пользователях, в том числе их
                    персональных данных, от несанкционированного доступа и
                    разглашения.
                  </Text>
                  <Text>
                    2.3. Отношения, связанные со сбором, хранением,
                    распространением и защитой информации о пользователях,
                    регулируются настоящим Положением и действующим российским
                    законодательством.
                  </Text>

                  <Link
                    href="https://hwschool.online/ru/privacy"
                    color="blue.500"
                  >
                    https://hwschool.online/ru/privacy
                  </Link>

                  <Text>
                    - подтверждает, что внимательно и в полном объеме прочитал
                    данную политику.
                  </Text>
                  <Text>
                    2.7. В случае несогласия пользователя с условиями настоящего
                    Положения и использование Формы Заявки должно быть
                    немедленно прекращено.
                  </Text>
                  <Text>
                    2.8. Администрация Сайта не проверяет достоверность
                    получаемой (собираемой) информации о пользователях.
                  </Text>
                  <Text>
                    2.9. Администрация сайта осуществляет сбор статистики об IP-
                    адресах и cookies Пользователей. Данная информация
                    используется с целью идентификации Пользователей на сайте, и
                    для выявления и решения технических проблем. Указанные в
                    настоящем пункте данные не передаются третьим лицам и
                    используются только в целях указанных в настоящем пункте.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    3. УСЛОВИЯ И ЦЕЛИ ОБРАБОТКИ ИНФОРМАЦИИ
                  </Heading>
                  <Text>
                    Администрация Сайта осуществляет обработку персональных
                    данных пользователя с его согласия в целях оказания
                    пользователю услуг, предлагаемых на Сайте.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    4. СОСТАВ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЯХ
                  </Heading>
                  <Text>
                    4.1. Персональные данные пользователей, предоставляемые с
                    согласия пользователей и необходимые для использования Формы
                    Заявки: фамилия, имя, отчество, email, телефон.
                  </Text>
                  <Text>
                    4.2. Информация, полученная Администрацией Сайта в
                    результате действий пользователей при использовании Сайта.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    5. ОБРАБОТКА ПЕРСОНАЛЬНЫХ ДАННЫХ ПОЛЬЗОВАТЕЛЕЙ
                  </Heading>
                  <Text>
                    5.1. Обработка персональных данных осуществляется на основе
                    принципов:
                  </Text>
                  <Text>
                    а) законности целей и способов обработки персональных данных
                    и добросовестности;
                  </Text>
                  <Text>
                    б) соответствия целей обработки персональных данных целям,
                    заранее определенным и заявленным при сборе персональных
                    данных;
                  </Text>
                  <Text>
                    в) соответствия объема и характера обрабатываемых
                    персональных данных, способов обработки персональных данных
                    целям обработки персональных данных;
                  </Text>
                  <Text>
                    г) недопустимости объединения созданных для несовместимых
                    между собой целей баз данных, содержащих персональные
                    данные.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    6. СБОР ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </Heading>
                  <Text>
                    Персональные данные пользователя, предусмотренные пунктом 4
                    настоящей Политики, передаются Пользователем Администрации
                    Сайта с согласия пользователя. Передача персональных данных
                    Пользователем Администратору Сайта, через Форму Заявки
                    означает согласие пользователя на передачу его персональных
                    данных.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    7. ХРАНЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </Heading>
                  <Text>
                    Персональные данные пользователей хранятся на электронных
                    носителях.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    8. ПЕРЕДАЧА ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </Heading>
                  <Text>
                    Персональные данные пользователей не передаются каким-либо
                    третьим лицам, за исключением случаев, прямо предусмотренных
                    настоящим Положением. Предоставление персональных данных
                    пользователей по запросу государственных органов (органов
                    местного самоуправления) осуществляется в порядке,
                    предусмотренном законодательством.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    9. УНИЧТОЖЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </Heading>
                  <Text>
                    Персональные данные пользователя уничтожаются при наличии
                    заявления в свободной форме от пользователя, а также по
                    усмотрению Администрации Сайта.
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
            className="px-3 py-3 mt-2 duration-300 hover:bg-gray-300 ease-in-out active:bg-blue-400 rounded-full bg-indigo-400 dark:bg-white text-white text-lg font-bold"
          >
            Оставить заявку
          </ScrollLink>
        </div>
      </CardBody>
    </CardContainer>
  );
}
