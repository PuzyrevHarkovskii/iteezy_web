import React from 'react';
import { Box, Flex, Button, Heading, IconButton, Stack, useColorModeValue, chakra } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';
import Name from '@/components/Новый трай/Name'

const HeaderSection = () => {
  const bg = useColorModeValue("white", "gray.800");
  
  return (
    <chakra.header>
      

      <Box
        w="full"
        h="container.sm"
        backgroundImage="url('https://c7.alamy.com/comp/EEP9GT/two-multirace-kids-using-tablet-and-drawing-with-pencils-at-school-EEP9GT.jpg')"
        bgPos="center"
        bgSize="cover"
        // Тень от картинки
        // boxShadow="0 0 10px rgba(0, 0, 0, 0.9)"
        // borderRadius="md"
      >
        <Flex
          align="center"
          pos="relative"
          justify="center"
          boxSize="full"
          
        >
          <Stack textAlign="center" alignItems="center" spacing={6}>
            <Heading
              fontSize={["sm", "sm", "3xl"]}
                mt ={500}
            >
              <Name/>
            </Heading>
          </Stack>
        </Flex>
      </Box>
    </chakra.header>
  );
};

export default HeaderSection;
