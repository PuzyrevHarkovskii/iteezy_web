import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import React from "react";
import { FiCreditCard, FiMail, FiPhone, FiUser, FiUsers } from "react-icons/fi";


const Feature = (props) => {
  return (
    <Box>
      <Flex
        alignItems="center"
        justifyContent="center"
        w={8}
        h={8}
        mb={4}
        rounded="full"
        color="white"
        bg="white"
      >
        <Icon
          boxSize={5}
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          {props.icon}
        </Icon>
      </Flex>
      <chakra.h3
        mb={2}
        fontWeight="semibold"
        lineHeight="shorter"
      >
        {props.title}
      </chakra.h3>
      <chakra.p
        fontSize="sm"
        color='white'
      >
        {props.children}
      </chakra.p>
    </Box>
  );
};

const PriceList = () => {
  return (
    <Flex
      bg="#FFFFFF"
      p={15}
      w="full"
      justifyContent="center"
      alignItems="center"
      
    >
      <Box
        rounded="35px"
        // Ширина бокса
        px={50}
        py={25}
        mx="auto"
        bg="#093AA9"
        _dark={{
          bg: 'white',
        }}
        
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.p
            mt={6}
            mb={6}
            fontSize={{
              base: "4xl",
              sm: "5xl",
            }}
            lineHeight="10"
            textAlign={"center"}
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: 'white',
            }}
          >
            Наши программы
          </chakra.p>
        </Box>
        
         
      </Box>
    </Flex>
  );
};

export default PriceList;
