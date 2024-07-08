"use client";
import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Feature = (props) => {
  return (
    <Box>
      <chakra.h3
        mb={2}
        fontSize="2xl"
        fontWeight="semibold"
        lineHeight="shorter"
        _light={{
          color: "white",
        }}
      >
        {props.title}
      </chakra.h3>
      <chakra.p fontSize="xl" color="white">
        {props.children}
      </chakra.p>
    </Box>
  );
};

const Features = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  return (
    <Flex
      bg="#FFFFFF"
      mx-auto
      px={{
        base: "0em", // Базовый отступ для всех экранов
        sm: "0em", // Отступ для маленьких экранов
        md: "2em", // Отступ для средних экранов
        lg: "2.5em", // Отступ для больших экранов
        xl: "20em", // Отступ для очень больших экранов
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Box
        rounded={{ base: "0", md: "35px", lg: "35px" }}
        px={10}
        py={10}
        bg="#093AA9"
        border=" 1px solid rgba(255, 255, 255, 0.18);"
        boxShadow="5px 5px 10px 0px rgba(128, 128, 128, )"
      >
        <motion.div
          ref={ref}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          <Box
            textAlign={{
              lg: "center",
            }}
          >
            <chakra.p
              my={0}
              fontSize={{
                base: "3xl",
                sm: "4xl",
              }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="normal"
              _light={{
                color: "white",
              }}
            >
              Будущее начинается уже сегодня!
            </chakra.p>
          </Box>
          <SimpleGrid
            columns={{
              base: 1,
              sm: 2,
              md: 2,
              lg: 2,
            }}
            spacingX={{
              base: 16,
              lg: 15,
            }}
            spacingY={10}
            mt={10}
          >
            <Feature title="🧠 Научись новому">
              С каждым уроком повышается уровень сложности, благодаря структуре
              программ ребенок легко усвоит даже сложный материал
            </Feature>
            <Feature title="🧑🏻‍💻 Найди свою профессию">
              Ребенок получит необходимые знания и практические навыки, которые
              сможет применить в области информационных технологий, digital и
              IT-предпринимательства
            </Feature>
            <Feature title="🤓 Знания на всю жизнь">
              Все наши программы на 80% состоят из практических заданий, которые
              ребята с удовольствием делают каждый урок
            </Feature>
          </SimpleGrid>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default Features;
