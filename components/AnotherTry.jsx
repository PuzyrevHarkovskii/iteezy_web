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
} from "@chakra-ui/react";

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
        <chakra.p
          mb={6}
          mt={-4}
          fontSize="sm"
          color="gray.600"
          lineHeight="base"
        >
          Мы заботимся о Ваших персональных данных, подробный текст политики
          конфиденциальности доступен здесь.
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
            <VisuallyHidden>Your Email</VisuallyHidden>
            <Heading className="text-left">Имя родителя</Heading>
            <Input
              rounded={"35px"}
              mt={8}
              mb={4}
              borderColor={"black"}
              size="lg"
              type="email"
              placeholder="Как к вам обращаться..."
              required
            />
            <Heading className="text-left">Имя и возраст ребенка</Heading>
            <Input
              rounded={"35px"}
              borderColor={"black"}
              mt={8}
              mb={4}
              size="lg"
              type="email"
              placeholder="Имя и возраст ребенка..."
              required
            />
            <Heading className="text-left">Номер телефона</Heading>
            <Input
              rounded={"35px"}
              borderColor={"black"}
              mt={8}
              mb={4}
              size="lg"
              type="email"
              placeholder="Номер телефона для связи..."
              required
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
            mb={10}
            px={10}
            size="lg"
            rounded={"full"}
            type="submit"
            color={"black"}
            bg={"pink"}
            cursor="pointer"
          >
            Отправить заявку
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AnotherTry;
