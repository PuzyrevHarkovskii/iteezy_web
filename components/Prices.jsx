import { Flex, Box, VStack, HStack, chakra, Icon } from "@chakra-ui/react";
import { FiCheck } from "react-icons/fi";
import { Text } from "@chakra-ui/react";

const Feature = (props) => {
  return (
    <Flex id="pricelist" alignSelf="start" w="full">
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        _light={{
          color: "blue.500",
        }}
        viewBox="0 0 20 20"
        as={FiCheck}
      />
      <chakra.p fontSize="xl" color="gray.600" {...props} />
    </Flex>
  );
};

const PriceList = () => {
  return (
    <Flex
      //bg="#edf1ff"
      p={5}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box w="70em" pt={8}>
        <Flex
          direction={{
            base: "column",
            md: "row",
          }}
          justifyContent="center"
          mb={{
            base: 6,
            sm: 0,
          }}
        >
          {/* Hobby Plan */}
          <Flex
            flex={{
              sm: 1,
              lg: "initial",
            }}
            w={{
              lg: 2.3 / 7,
            }}
            rounded="35px"
            bg="#093aa9"
            my={6}
            direction="column"
            className="shadow-md hover:shadow-lg hover:translate-x-2 hover:scale-105 transition-all duration-300"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="4xl" fontWeight="bold" color={"white"}>
                Хобби
              </chakra.span>
              <HStack spacing={0}>
                <chakra.span fontSize="3xl" color={"white"}>
                  4800 ₽
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{
                    color: "white",
                  }}
                >
                  /месяц
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>Абонемент на 1 месяц</Feature>
                <Feature>Регулярные занятия</Feature>
                <Feature>Предварительная запись обязательна</Feature>
              </VStack>
              <Box
                w="full"
                ml={3}
                display="inline-flex"
                rounded="35px"
                shadow="md"
              ></Box>
            </VStack>
          </Flex>

          <Flex
            flex={{
              base: 1,
              lg: "initial",
            }}
            w={{
              lg: 2.4 / 7,
            }}
            rounded="35px"
            bg="#093aa9"
            mt={{
              base: 4,
              sm: -4,
            }}
            shadow="md"
            zIndex={30}
            direction="column"
            className="shadow-md hover:shadow-lg hover:translate-x-2 hover:scale-105 transition-all duration-300"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="4xl" fontWeight="bold" color={"white"}>
                Развитие
              </chakra.span>
              <HStack spacing={0}>
                <chakra.span fontSize="3xl" color={"white"}>
                  8800 ₽
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{
                    color: "white",
                  }}
                >
                  /2 месяца
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              h="full"
              spacing={8}
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>Абонемент на 2 месяца</Feature>
                <Feature>Регулярные занятия </Feature>
                <Feature>Предварительная запись обязательна</Feature>
              </VStack>
            </VStack>
          </Flex>

          {/* Scale Plan */}
          <Flex
            flex={{
              sm: 1,
              lg: "initial",
            }}
            w={{
              lg: 2.3 / 7,
            }}
            roundedTop="35px"
            borderBottomRightRadius="35px"
            bg="#093aa9"
            _dark={{
              bg: "gray.700",
            }}
            my={6}
            direction="column"
            className="shadow-md hover:shadow-lg hover:translate-x-2 hover:scale-105 transition-all duration-300"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold" color={"white"}>
                Попробовать
              </chakra.span>
              <HStack spacing={1}>
                <chakra.span fontSize="3xl" color={"white"}>
                  500 ₽
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{
                    color: "white",
                  }}
                >
                  /занятие
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              spacing={8}
              h="full"
              bg="gray.50"
              _dark={{
                bg: "gray.800",
              }}
              borderBottomRightRadius="lg"
              p={12}
            >
              <VStack
                spacing={4}
                w="full"
                direction="column"
                alignItems="start"
              >
                <Feature>
                  Если ребенку понравилось на пробном занятии и он будет дальше
                  учиться, то данное занятие для вас БЕСПЛАТНО.
                </Feature>
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PriceList;
