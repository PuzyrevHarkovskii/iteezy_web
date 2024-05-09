import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

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
        _light={{
          color: 'white',
        }}
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

const Features = () => {
  return (
    <Flex
      bg="#FFFFFF"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={20}
      w="full"
      justifyContent="center"
      alignItems="center"
      
    >
      <Box
        rounded="35px"
        px={10}
        py={20}
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
            mt={2}
            fontSize={{
              base: "3xl",
              sm: "4xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="tight"
            _light={{
              color: 'white',
            }}
          >
            Будущее начинается уже сегодня
          </chakra.p>
          <chakra.p
            mt={4}
            maxW="2xl"
            fontSize="xl"
            mx={{
              lg: "auto",
            }}
            color='white'
            _dark={{
              color: 'white',
            }}
          >
            Выбирая увлечение сегодня - закладываем фундамент для будущей профессии
          </chakra.p>
        </Box>
        <SimpleGrid
          columns={{
            base: 1,
            sm: 2,
            md: 3,
            lg: 3,
          }}
          spacingX={{
            base: 16,
            lg: 15,
          }}
          spacingY={20}
          mt={6}
        >
          <Feature
            color="red"
            title="Научись новому"
            icon={
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            }
          >
            С каждым уроком повышается уровень сложности, благодаря структуре программ ребенок легко усвоит даже сложный материал
          </Feature>
          <Feature
            color="red"
            title="Найди свою профессию"
            icon={
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            }
          >
            Ребенок получит необходимые знания и практические навыки, которые сможет применить в области информационных технологий, digital и IT-предпринимательства
          </Feature>
          <Feature
            color="red"
            title="Знания на всю жизнь"
            icon={
              <path
                fillRule="evenodd"
                d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
                clipRule="evenodd"
              />
            }
          >
            Все наши программы на 80% состоят из практических заданий, которые ребята с удовольствием делают каждый урок
          </Feature>
          
          {/* Add other features here */}

        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Features;
