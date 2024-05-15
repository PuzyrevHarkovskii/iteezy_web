// components/MyComponent.jsx

import { Flex, Box, VStack, HStack, chakra, Icon } from "@chakra-ui/react";
import { IoCheckmark } from "react-icons/io";

const Feature = (props) => {
  return (
    
    <Flex id='pricelist' alignSelf="start" w="full">
    
      <Icon
        boxSize={5}
        mt={1}
        mr={2}
        _light={{
          color: "blue.500",
        }}
        viewBox="0 0 20 20"
        fill="currentColor"
        as={IoCheckmark}
      />
      <chakra.p
        fontSize="lg"
        color="gray.600"
        _dark={{
          color: "gray.400",
        }}
        {...props}
      />
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
      <Box w="77em" pt={8}>
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
            rounded="lg"
            borderTopRightRadius={0}
            borderBottomLeftRadius="lg"
            bg="white"
            
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="4xl" fontWeight="bold" color={"blue.300"}>
                Хобби
              </chakra.span>
              <HStack spacing={0}>
                <chakra.span
                
                  fontSize="3xl"
                  
                >
                  4800 ₽
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{
                    color: "gray.400",
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
              bg="gray.100"
              _dark={{
                bg: "gray.800",
              }}
              borderBottomLeftRadius="lg"
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
                rounded="md"
                shadow="md"
              >
                
              </Box>
            </VStack>
          </Flex>

          {/* Growth Plan */}
          <Flex
            flex={{
              base: 1,
              lg: "initial",
            }}
            w={{
              lg: 2.4 / 7,
            }}
            rounded="lg"
            bg="white"
            _dark={{
              bg: "gray.700",
            }}
            mt={{
              base: 4,
              sm: -4,
            }}
            shadow="xl"
            zIndex={30}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="4xl" fontWeight="bold" color={"blue.500"}>
                Развитие
              </chakra.span>
              <HStack spacing={0}>
                <chakra.span
                 
                  fontSize="3xl"
                  
                >
                  8800 ₽
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{
                    color: "gray.400",
                  }}
                >
                  /2 месяца
                </chakra.span>
              </HStack>
            </VStack>
            <VStack
              fontSize="sm"
              h="full"
              roundedBottom="lg"
              spacing={8}
              bg="gray.100"
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
            roundedTop="lg"
            borderBottomRightRadius="lg"
            borderTopLeftRadius={0}
            bg="white"
            _dark={{
              bg: "gray.700",
            }}
            my={6}
            direction="column"
          >
            <VStack
              spacing={1}
              justifyContent="center"
              p={8}
              textAlign="center"
              w="full"
              shadow="xl"
            >
              <chakra.span fontSize="3xl" fontWeight="bold" color={"blue.300"}>
                Попробовать
              </chakra.span>
              <HStack spacing={1}>
                <chakra.span
                 
                  fontSize="3xl"
                  
                >
                  500 ₽
                </chakra.span>
                <chakra.span
                  alignSelf="center"
                  fontSize="3xl"
                  _light={{
                    color: "gray.400",
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
              bg="gray.100"
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
                <Feature>Если ребенку понравилось на пробном занятии и он будет дальше учиться, то данное занятие для вас БЕСПЛАТНО.</Feature>
               
              </VStack>
            </VStack>
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default PriceList;
