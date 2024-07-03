"use client";

import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { BsGithub, BsLinkedin, BsPerson, BsTwitter } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import React, { useState } from "react";

export default function ContactFormWithSocialButtons() {
  const { hasCopied, onCopy } = useClipboard("example@example.com");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    const { name, email, message } = formData;
    const telegramBotId = "7258287597:AAFEFe40A4zoCi12cNTdv0qzkIecwhLKEwA";
    const chatId = 702020795;
    const text = `
    Новая заявка!\nРодитель: ${name}\nEmail: ${email}\nMessage: ${message}`;

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
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Flex align="center" justify="center" id="contact">
      <Box width={"35em"} borderRadius="35px" m={0} bg={"blue"}>
        <Box>
          <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
            <Heading
              className="bouncing-button"
              fontSize={{
                base: "4xl",
                md: "5xl",
              }}
            >
              Оставьте заявку!
            </Heading>

            <Stack
              spacing={{ base: 10, md: 8, lg: 30 }}
              direction={{ base: "column", md: "row" }}
            >
              <Box
                bg={useColorModeValue("white", "gray.700")}
                borderRadius="35px"
                p={8}
                color={useColorModeValue("gray.700", "whiteAlpha.900")}
                shadow="base"
              >
                <VStack spacing={5}>
                  <FormControl isRequired>
                    <FormLabel>Name</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <BsPerson />
                      </InputLeftElement>
                      <Input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>

                    <InputGroup>
                      <InputLeftElement>
                        <Text>🤓</Text>
                      </InputLeftElement>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </FormControl>

                  <FormControl isRequired>
                    <FormLabel>Message</FormLabel>

                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={1}
                      resize="none"
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </FormControl>

                  <Button
                    colorScheme="blue"
                    rounded={"full"}
                    bg="blue.400"
                    color="white"
                    _hover={{
                      bg: "blue.500",
                    }}
                    width="full"
                    onClick={handleSubmit}
                    value={"Send"}
                  >
                    Send Message
                  </Button>
                </VStack>
              </Box>
            </Stack>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
}
