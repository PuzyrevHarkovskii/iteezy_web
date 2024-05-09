import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

const Feature = (props) => {
  return (
    <Box>
      <chakra.h3
        mb={2}
        fontSize="lg"
        fontWeight="semibold"
        lineHeight="shorter"
        _light={{
          color: 'white',
        }}
      >
        {props.title}
      </chakra.h3>
      <chakra.p
        fontSize="lg"
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
        
      >
        <Box
          textAlign={{
            lg: "center",
          }}
        >
          <chakra.p
            mt={2}
            fontSize={{
              base: "4xl",
              sm: "6xl",
            }}
            lineHeight="8"
            fontWeight="extrabold"
            letterSpacing="normal"
            _light={{
              color: 'white',
            }}
          >
            Будущее начинается уже сегодня
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
            title="Научись новому"
           
          >
            С каждым уроком повышается уровень сложности, благодаря структуре программ ребенок легко усвоит даже сложный материал
          </Feature>
          <Feature
            title="Найди свою профессию"
            
          >
            Ребенок получит необходимые знания и практические навыки, которые сможет применить в области информационных технологий, digital и IT-предпринимательства
          </Feature>
          <Feature
            title="Знания на всю жизнь"
            
          >
            Все наши программы на 80% состоят из практических заданий, которые ребята с удовольствием делают каждый урок
          </Feature>
          
         

        </SimpleGrid>
      </Box>
    </Flex>
  );
};

export default Features;
