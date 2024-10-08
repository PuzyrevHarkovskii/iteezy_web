import React from "react";
import {
  Box,
  Button,
  chakra,
  Flex,
  GridItem,
  Icon,
  Text,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Heading,
  InputLeftAddon,
  useClipboard,
  InputGroup,
  useToast,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";

const Feature = (props) => (
  <Flex alignItems="center" color={null}>
    <Icon
      boxSize={4}
      mr={1}
      color="green.600"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      ></path>
    </Icon>
    {props.children}
  </Flex>
);

const AnotherTry = () => {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [formData, setFormData] = useState({
    name: "",
    child: "",
    contact: "",
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, child, contact } = formData;
    const telegramBotId = "7258287597:AAFEFe40A4zoCi12cNTdv0qzkIecwhLKEwA";
    const chatId = 702020795;
    const text = `
    Новая заявка!\nРодитель: ${name}\nИмя ребенка и возраст: ${child}\nНомер для связи: +7${contact}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${telegramBotId}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: chatId,
            text: text,
          }),
        }
      );
      const result = await response.json();
      console.log(result);
      setFormData({
        name: "",
        child: "",
        contact: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  //toast
  const toast = useToast();

  const handleButtonClick = () => {
    handleSubmit();
    showToast(toast);
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
      }}
    >
      <Box id="contactus" px={{ base: 0, sm: 50, md: 50, lg: 50 }}>
        <Box
          shadow={"md"}
          rounded={{ base: "0", md: "35px", lg: "35px" }}
          bgColor={"#F7FAFC"}
          w={{
            base: "full",
            md: 11 / 12,
            xl: 8 / 12,
            sm: "full",
          }}
          textAlign={{
            base: "left",
            md: "center",
          }}
          px={10}
          mx="auto"
        >
          <chakra.h1
            className="bouncing-button"
            mb={8}
            pt={8}
            fontSize={{
              base: "4xl",
              md: "5xl",
            }}
            fontWeight={{
              base: "bold",
              md: "extrabold",
            }}
            color="gray.900"
            lineHeight="shorter"
          >
            Оставьте заявку!
          </chakra.h1>
          <chakra.p mb={6} fontSize="xl" color="gray.500" lineHeight="base">
            Наши администраторы свяжутся с Вами и помогут подобрать подходящую
            программу.
          </chakra.p>

          <SimpleGrid
            as="form"
            w={{
              base: "full",
              md: 7 / 12,
            }}
            columns={{
              base: 1,
              lg: 4,
            }}
            spacing={3}
            pt={1}
            mx="auto"
            mb={8}
          >
            <GridItem
              as="label"
              colSpan={{
                base: "auto",
                lg: 4,
              }}
            >
              <Heading className="text-left">Имя родителя</Heading>
              <Input
                rounded={"35px"}
                mt={3}
                mb={8}
                borderColor={"black"}
                size="lg"
                type="text"
                placeholder="Как к вам обращаться..."
                required
                name="name"
                id="name"
                value={formData.name}
                onChange={handleChange}
              />
              <Heading className="text-left">Имя и возраст ребенка</Heading>
              <Input
                rounded={"35px"}
                borderColor={"black"}
                mt={3}
                name="child"
                mb={8}
                size="lg"
                type="text"
                placeholder="Имя и возраст ребенка..."
                required
                id="child"
                value={formData.child}
                onChange={handleChange}
              />
              <Heading className="text-left">Номер телефона</Heading>
              <InputGroup>
                <InputLeftAddon
                  rounded={"35px"}
                  mt={3}
                  borderColor={"black"}
                  size="lg"
                  h="12" // Установите одинаковую высоту
                >
                  +7
                </InputLeftAddon>
                <Input
                  rounded={"35px"}
                  borderColor={"black"}
                  name="contact"
                  mt={3}
                  mb={8}
                  size="lg"
                  type="tel"
                  placeholder="Номер телефона для связи..."
                  required
                  id="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  h="12" // Установите одинаковую высоту
                />
              </InputGroup>
            </GridItem>
          </SimpleGrid>

          <Stack
            display="flex"
            direction={{
              base: "column",
              md: "row",
            }}
            justifyContent={{
              base: "start",
              md: "center",
            }}
            mb={3}
            spacing={{
              base: 2,
              md: 8,
            }}
            fontSize="xs"
            color="gray.600"
          >
            <Button
              as={GridItem}
              w="3/4"
              variant="solid"
              colSpan={{
                base: "auto",
                lg: 2,
              }}
              mb={4}
              px={10}
              size="lg"
              rounded={"full"}
              type="submit"
              color={"black"}
              bg={"pink"}
              cursor="pointer"
              id="btn"
              onClick={handleSubmit}
              value={"Send"}
            >
              Отправить заявку
            </Button>
          </Stack>
          <Text fontSize="sm" pb={5} color="gray.600">
            Нажимая кнопку &quot;Отправить заявку&quot;, вы соглашаетесь с нашей{" "}
            <Link onClick={onOpen} color="pink.500">
              политикой конфиденциальности
            </Link>
            .
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
                    Настоящее Положение определяет политику ITEEZY. в отношении
                    обработки персональных данных и конфиденциальности,
                    регулирует вопросы обработки персональных данных и
                    устанавливает процедуры, направленные на предотвращение и
                    выявление нарушений законодательства, устранение последствий
                    таких нарушений.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    1. ОСНОВНЫЕ ПОНЯТИЯ
                  </Heading>
                  <Text>
                    <b>Сайт</b> – сайт, расположенный в сети Интернет по адресу{" "}
                    <Link href="#" color="blue.500">
                      iteezy.ru
                    </Link>
                  </Text>
                  <Text>
                    <b>Пользователь</b> – пользователь Сайта, физическое или
                    юридическое лицо, использующий Форму Заявки на сайте.
                  </Text>
                  <Text>
                    <b>Администрация сайта</b> – ITEEZY, размещающее на сайте
                    информацию о своей общественной и коммерческой деятельности.
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
                  <Text>
                    2.4. Действующая редакция Положения, являющаяся публичным
                    документом, разработана Администрацией Сайта и доступна
                    любому пользователю сети Интернет. Администрация Сайта
                    вправе вносить изменения в настоящее Положение. При внесении
                    изменений в Положение Администрация Сайта уведомляет об этом
                    пользователей путем размещения новой редакции Положения на
                    Сайте по постоянному адресу:{" "}
                    <Link href="#" color="blue.500">
                      iteezy.ru
                    </Link>
                    . Предыдущие редакции Положения хранятся в архиве
                    документации Администрации Сайта.
                  </Text>
                  <Text>
                    2.5. Используя Форму Заявки, пользователь выражает свое
                    согласие с условиями настоящего положения.
                  </Text>
                  <Text>
                    Используя Форму Заявки (заполняя свои данные на Сайте),
                    Пользователь выражает свое согласие на обработку его
                    персональных данных в течение одного года, любым законным
                    способом, в том числе в информационных системах персональных
                    данных с использованием средств автоматизации или без
                    использования таких средств, без оговорок​и ограничений.
                  </Text>
                  <Text>
                    Указанные положения распространяются также при регистрации
                    Пользователя сайте.
                  </Text>
                  <Text>2.6. Заполняя Форму Заявки, Пользователь:</Text>
                  <Text>
                    - подтверждает, что все указанные им данные принадлежат
                    лично ему;
                  </Text>
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

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    10. МЕРЫ ПО ЗАЩИТЕ ИНФОРМАЦИИ О ПОЛЬЗОВАТЕЛЯХ
                  </Heading>
                  <Text>
                    Администрация Сайта принимает технические и
                    организационно-правовые меры в целях обеспечения защиты
                    персональных данных пользователя от неправомерного или
                    случайного доступа к ним, уничтожения, изменения,
                    блокирования, копирования, распространения, а также от иных
                    неправомерных действий.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    11. УТРАТА И РАЗГЛАШЕНИЕ ПЕРСОНАЛЬНЫХ ДАННЫХ
                  </Heading>
                  <Text>
                    11.1 При утрате или разглашении персональных данных
                    Администрация сайта информирует Пользователя об утрате или
                    разглашении персональных данных. Администрация сайта
                    совместно с Пользователем принимает все необходимые меры по
                    предотвращению убытков или иных отрицательных последствий,
                    вызванных утратой или разглашением персональных данных
                    Пользователя.
                  </Text>
                  <Text>
                    11.2 В случае утраты или разглашения персональных данных
                    Администрация сайта не несёт ответственность, если данная
                    информация стала публичным достоянием до её утраты или
                    разглашения, или была получена от третьей стороны до момента
                    её получения Администрацией сайта, или была разглашена с
                    согласия Пользователя.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    12. ОБРАЩЕНИЯ ПОЛЬЗОВАТЕЛЕЙ
                  </Heading>
                  <Text>
                    Пользователи вправе направлять Администрации Сайта свои
                    запросы, в том числе запросы относительно использования их
                    персональных данных, предусмотренные п. 4 настоящего
                    Положения, в свободной форме по адресу{" "}
                    <Link href="#" color="blue.500">
                      [адрес почты]
                    </Link>
                    . Администрация Сайта обязуется рассмотреть и направить
                    ответ на поступивший запрос пользователя в течение 10 дней с
                    момента поступления обращения.
                  </Text>

                  <Heading as="h2" size="md" mt={6} mb={4}>
                    13. КОРРЕСПОНДЕНЦИЯ
                  </Heading>
                  <Text>
                    Вся корреспонденция, полученная Администрацией Сайта от
                    Пользователя (обращения в письменной/электронной форме)
                    относится к информации ограниченного доступа и без
                    письменного согласия Пользователя разглашению не подлежит.
                    Персональные данные и иная информация о Пользователе,
                    направившем запрос, не могут быть без специального согласия
                    Пользователя использованы иначе, как для ответа по теме
                    полученного запроса или в случаях, прямо предусмотренных
                    законодательством.
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
        </Box>
      </Box>
    </motion.div>
  );
};

export default AnotherTry;
