import {
  Box,
  Stack,
  Icon,
  Flex,
  Image,
  HStack,
  VStack,
  Link,
  Text,
  Divider,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box bg="#080624">
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        w="full"
        justify="space-between"
        p={10}
      >
        <Flex justify="center">
          <Image
            src="/images/full_logo.png"
            alt="Iteezy logo"
            width={{
              base: "5em",
              lg: "5em",
            }}
            height={{
              base: "5em",
              lg: "5em",
            }}
            my={{
              base: 2,
              lg: 0,
            }}
          />
        </Flex>
        <HStack
          alignItems="start"
          flex={2}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="gray.400"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">О НАС</Link>
            {/* <Link textTransform="uppercase">Submit a ticket</Link> */}
          </Flex>
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Связаться с нами</Link>
            {/* <Link textTransform="uppercase">Theme Tweak</Link> */}
          </Flex>
        </HStack>
        <HStack
          alignItems="start"
          flex={1}
          justify="space-around"
          fontSize={{
            base: "12px",
            md: "16px",
          }}
          color="gray.400"
          _dark={{
            color: "white",
          }}
          textAlign={{
            base: "center",
            md: "left",
          }}
        >
          <Flex justify="start" direction="column">
            <Link textTransform="uppercase">Курсы</Link>
          </Flex>
        </HStack>
      </Stack>
      <Divider
        w="95%"
        mx="auto"
        color="gray.600"
        _dark={{
          color: "gray.600",
        }}
        h="3.5px"
      />
      <VStack py={3}>
        <HStack justify="center">
          <Link></Link>
        </HStack>

        <Text
          textAlign="center"
          fontSize="smaller"
          color="gray.400"
          _dark={{
            color: "white",
          }}
        >
          &copy;Iteezy. Витебский просп., 101, корп. 4, Санкт-Петербург.
        </Text>
      </VStack>
    </Box>
  );
};

export default Footer;
