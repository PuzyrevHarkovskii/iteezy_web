import { Box, Flex, chakra, SimpleGrid } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { ThreeDCardDemo } from "./CardDemo";

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

const Courses = () => {
  return (
    <Flex
      bg="#FFFFFF"
      _dark={{
        bg: "#3e3e3e",
      }}
      p={15}
      w="full"
      justifyContent="center"
      alignItems="center"
      
    >
      <Box
        rounded="35px"
        px={8}
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
            Наши программы
          </chakra.p>
        </Box>
        
         <ThreeDCardDemo/>
        
      </Box>
    </Flex>
  );
};

export default Courses;
