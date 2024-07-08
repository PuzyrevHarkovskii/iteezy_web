import { Flex, SimpleGrid, Text, Box, chakra, Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Feature = (props) => {
  return (
    <Box>
      <Box
        bg="transparent"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        {props.icon}
      </Box>
      <chakra.h3
        mb={2}
        fontSize="2xl"
        lineHeight="shorter"
        fontWeight="bold"
        _light={{
          color: "#EAB427",
        }}
      >
        {props.title}
      </chakra.h3>
      <chakra.p lineHeight="tall" fontSize={"xl"} color="gray.600">
        {props.children}
      </chakra.p>
    </Box>
  );
};

const SomeInfo = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <Flex
      bg="white"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={5}
      w="auto"
      justifyContent="center"
      alignItems="center"
    >
      <motion.div
        ref={ref}
        style={{
          scale: scaleProgress,
          opacity: opacityProgress,
        }}
      >
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            lg: 3,
          }}
          spacing={10}
          px={{
            base: 4,
            lg: 16,
            xl: "20em",
          }}
          py={14}
          mx="auto"
          bg="white"
          _dark={{
            bg: "gray.800",
          }}
        >
          <Feature
            title="Творческий потенциал"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            }
          >
            Даем максимально полное представление о программировании и целостное
            IT-развитие ребенка.
          </Feature>

          <Feature
            title="Обучение через практику"
            icon={
              <path
                fillRule="evenodd"
                d="M7 2a1 1 0 00-.707 1.707L7 4.414v3.758a1 1 0 01-.293.707l-4 4C.817 14.769 2.156 18 4.828 18h10.343c2.673 0 4.012-3.231 2.122-5.121l-4-4A1 1 0 0113 8.172V4.414l.707-.707A1 1 0 0013 2H7zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.993 1.993 0 00-.114-.035l1.063-1.063A3 3 0 009 8.172z"
                clipRule="evenodd"
              />
            }
          >
            Обучение построено по принципу{" "}
            <Text as="u">«обучение через практику»</Text>, все программы на 80%
            состоят из практических заданий с использованием техники.
          </Feature>

          <Feature
            title="Разные направления"
            icon={
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
              />
            }
          >
            Даем детям возможность погрузиться в изучение различных языков
            программирования на каждом новом этапе программ.
          </Feature>
        </SimpleGrid>
      </motion.div>
    </Flex>
  );
};

export default SomeInfo;
