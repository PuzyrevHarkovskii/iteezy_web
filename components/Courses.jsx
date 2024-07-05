import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { FirstCard, ThreeDCardDemo } from "./cards/FirstCard";
import { SecondCard } from "./cards/SecondCard";
import { ThirdCard } from "./cards/ThirdCard";
import { FourthCard } from "./cards/FourthCard";
import { FifthCard } from "./cards/FifthCard";
import { SixthCard } from "./cards/SixthCard";

import { Rubik_Mono_One } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.6 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [1, 1]);
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
          </Box>
          <Box textAlign="center" mx={2} my={{ base: 4, md: 0 }}>
            <SecondCard />
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
          </Box>
          <Box textAlign="center" mx={2} my={{ base: 3, md: 0 }}>
            <FourthCard />
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
          </Box>
          <Box textAlign="center" mx={2} my={{ base: 3, md: 0 }}>
            <SixthCard />
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Courses;
