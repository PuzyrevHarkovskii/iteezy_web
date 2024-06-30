import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FirstCard, ThreeDCardDemo } from "./cards/FirstCard";
import { SecondCard } from "./cards/SecondCard";
import { ThirdCard } from "./cards/ThirdCard";
import { FourthCard } from "./cards/FourthCard";
import { FifthCard } from "./cards/FifthCard";
import { SixthCard } from "./cards/SixthCard";
import { FirstButton } from "@/components/cards/card buttons/FirstButton";
import { SecondButton } from "@/components/cards/card buttons/SecondButton";
import { ThirdButton } from "@/components/cards/card buttons/ThirdButton";
import { FourthButton } from "@/components/cards/card buttons/FourthButton";
import { FifthButton } from "@/components/cards/card buttons/FifthButton";
import { SixthButton } from "@/components/cards/card buttons/SixthButton";
import { Rubik_Mono_One } from "next/font/google";
const rubik_mono = Rubik_Mono_One({ subsets: ["cyrillic"], weight: ["400"] });
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
      <chakra.h3 mb={2} fontWeight="semibold" lineHeight="shorter">
        {props.title}
      </chakra.h3>
      <chakra.p fontSize="sm" color="white">
        {props.children}
      </chakra.p>
    </Box>
  );
};

const Courses = () => {
  return (
    <Flex
      bg="#FFFFFF"
      px={{
        sm: 20,
        xl: "25em",
      }}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        rounded={{ xl: "35px", sm: "0", md: "35px", lg: "35px" }}
        px={{ base: 0, sm: 50, md: 50, lg: 50 }}
        py={25}
        mx="auto"
        bg="#093AA9"
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
            fontFamily={rubik_mono}
            lineHeight="10"
            textAlign={"center"}
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: "white",
            }}
          >
            Наши программы
          </chakra.p>
        </Box>

        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Box textAlign="center" mx={2} my={{ base: 4, md: 0 }}>
            <FirstCard />
            <FirstButton />
          </Box>
          <Box textAlign="center" mx={2} my={{ base: 4, md: 0 }}>
            <SecondCard />
            <SecondButton />
          </Box>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Box textAlign="center" mx={2} my={{ base: 3, md: 0 }}>
            <ThirdCard />
            <ThirdButton />
          </Box>
          <Box textAlign="center" mx={2} my={{ base: 3, md: 0 }}>
            <FourthCard />
            <FourthButton />
          </Box>
        </Flex>
        <Flex
          direction={{ base: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          mb={4}
        >
          <Box textAlign="center" mx={2} my={{ base: 3, md: 0 }}>
            <FifthCard />
            <FifthButton />
          </Box>
          <Box textAlign="center" mx={2} my={{ base: 3, md: 0 }}>
            <SixthCard />
            <SixthButton />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Courses;
