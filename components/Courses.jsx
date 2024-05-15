import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { ThreeDCardDemo } from "./cards/CardDemo";
import { SecondCard } from "./cards/SecondCard";
import { ThirdCard } from "./cards/ThirdCard";
import { FourthCard } from "./cards/FourthCard";
import { FifthCard } from "./cards/FifthCard";
import { SixthCard } from "./cards/SixthCard";
import {FirstButton} from '@/components/cards/card buttons/FirstButton'
import {SecondButton} from '@/components/cards/card buttons/SecondButton'
import {ThirdButton} from '@/components/cards/card buttons/ThirdButton'
import {FourthButton} from '@/components/cards/card buttons/FourthButton'
import {FifthButton} from '@/components/cards/card buttons/FifthButton'
import {SixthButton} from '@/components/cards/card buttons/SixthButton'

const Feature = (props) => {
  return (
    <Box ref={coursesRef}>
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

const Courses = () => {
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
        
         <ThreeDCardDemo/>
         <FirstButton/>
        <SecondCard/>
          <SecondButton/>
        <ThirdCard/>
          <ThirdButton/>
        <FourthCard/>
          <FourthButton/>
        <FifthCard/>
          <FifthButton/>
        <SixthCard/>
          <SixthButton/>
      </Box>
    </Flex>
  );
};

export default Courses;
