import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
  Image,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import "./animation.css";

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer1() {
  return (
    <Box
      bg={useColorModeValue("#1E2532", "gray.900")}
      color={useColorModeValue("gray.300", "white")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
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
          className="animate-float"
        />
        <Stack direction={"row"} spacing={6}>
          <Box
            as="a"
            href={
              "https://yandex.ru/maps/org/iteezy/55155813438/?ll=30.368662%2C59.829070&z=17"
            }
          >
            Яндекс
          </Box>
          <Box as="a" href={"https://go.2gis.com/lbyeb"}>
            2ГИС
          </Box>
          <Box as="a" href={"https://vk.com/iteezy"}>
            Вконтакте
          </Box>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.700", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© {new Date().getFullYear()} Iteezy</Text>
          <Text color={"gray.500"}>made by @app1e.jews ✡</Text>
        </Container>
      </Box>
    </Box>
  );
}
