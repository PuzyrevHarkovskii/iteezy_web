import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";

const Feature = (props) => {
  return (
    <Box>
      <chakra.h3
        mb={2}
        fontSize="3xl"
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
  return (
    <Flex
      bg="#FFFFFF"
      p={10}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box rounded="35px" px={10} py={10} mx="auto" bg="#093AA9">
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
            Будущее начинается уже сегодня
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
          <Feature title="Научись новому">
            С каждым уроком повышается уровень сложности, благодаря структуре
            программ ребенок легко усвоит даже сложный материал
          </Feature>
          <Feature title="Найди свою профессию">
            Ребенок получит необходимые знания и практические навыки, которые
            сможет применить в области информационных технологий, digital и
            IT-предпринимательства
          </Feature>
          <Feature title="Знания на всю жизнь">
            Все наши программы на 80% состоят из практических заданий, которые
            ребята с удовольствием делают каждый урок
          </Feature>
        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Features;
