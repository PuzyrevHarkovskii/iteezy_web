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
  SimpleGrid,
  Stack,
  VisuallyHidden,
  Heading,
  useClipboard,
} from "@chakra-ui/react";
import { useState } from "react";
const Feature = (props) => (
  <Flex
    alignItems="center"
    color={null}
    _dark={{
      color: "white",
    }}
  >
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
    Новая заявка!\nРодитель: ${name}\nИмя ребенка и возраст: ${child}\nНомер для связи: ${contact}`;

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
  return (
    <Box px={{ base: 0, sm: 50, md: 50, lg: 50 }} py={30}>
      <Box
        id="contactus"
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
        <chakra.p mb={6} fontSize="2xl" color="gray.500" lineHeight="base">
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
            />
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
            mb={2}
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
        <chakra.p
          mb={4}
          pb={6}
          fontSize="sm"
          color="gray.600"
          lineHeight="base"
        >
          Мы заботимся о Ваших персональных данных, подробный текст политики
          конфиденциальности доступен здесь.
        </chakra.p>
      </Box>
    </Box>
  );
};

export default AnotherTry;
