import styled from "./SignUp.module.scss";
import {
  Flex,
  Box,
  Text,
  Button,
  Container,
  FormControl,
  FormLabel,
  Checkbox,
  Link,
  Image,
  Center,
} from "@chakra-ui/react";
import donm from "../../assets/donm@2x.svg";
import mosru from "../../assets/mosru@2x 1.svg";
import vector from "../../assets/Vector.svg";
import { Input } from "@chakra-ui/react";
import illustr from "../../assets/main_illustr.svg";

export default function SignUp() {
  return (
    <>
      <div className={styled.header}>
        <Container maxW="100%" mt="10">
          <Container maxW="500px">
            {" "}
            <Flex>
              <img src={vector} alt="" />
              <Text as="b" mx="1" my="-1">
                БАНК РЕЗЮМЕ
              </Text>{" "}
            </Flex>
            <Box my="20" maxW="100%" className="login-form" as="div">
              <Text fontSize="4xl" as="b">
                ВХОД
              </Text>
              <FormControl id="email" mt={4} mb={4}>
                <FormLabel>E-mail</FormLabel>
                <Input type="email" placeholder="Введите e-mail" />
              </FormControl>
              <FormControl id="password" mb={4}>
                <FormLabel>Пароль</FormLabel>
                <Input type="password" placeholder="Введите пароль" />
              </FormControl>
              <Flex justifyContent={"space-between"} mb={4}>
                <Checkbox>Запомнить меня</Checkbox>
                <Link href="#" color="rgba(0, 125, 182, 1)" display="block">
                  Забыли пароль?
                </Link>
              </Flex>
              <Button colorScheme="telegram" width="full" mb={4}>
                Вход
              </Button>
              <Button variant="outline" colorScheme="telegram" width="full">
                Вход через ДПО
              </Button>
              <Text mt={4} textAlign="center">
                Не зарегистрированы?{" "}
                <Link href="#" color="rgba(0, 125, 182, 1)">
                  Регистрация
                </Link>
              </Text>
            </Box>
          </Container>
        </Container>
        <Container className={styled.none}
          maxW="100%"
          style={{
            backgroundColor: "#DAF3FF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            display: "none"
          }}
        >
          <Image src={illustr} ></Image>
        </Container>
      </div>

      <Container maxW="100vw" style={{ backgroundColor: "#f4f9fb" }}>
        <Container maxW="1200px">
          <Flex pt="16" flexWrap="wrap" justifyContent="space-around" h="30vh">
            <Link color="rgba(0, 125, 182, 1)" fontSize="md">
              Служба поддержки
            </Link>
            <Box>
              <Link>Пользовательское соглашение</Link>
              <br />
              <Link>Правовая информация</Link>
            </Box>{" "}
            <Box>
              <Link>Контанкты</Link> <br />
              <Link>Помощь (FAQ)</Link>
            </Box>
            <Box style={{ display: "flex" }}>
              <Image src={donm} className={styled.img}></Image>
              <Image src={mosru} className={styled.img}></Image>
            </Box>
          </Flex>
          <Text
            color="gray"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            © Департамент образования и науки г. Душанбе, 2024
          </Text>{" "}
          <Text
            pb={"6"}
            color="gray"
            style={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            При полном или частичном использовании материалов с официальных
            сайтов Правительства Москвы ссылка на источник обязательна.
          </Text>
        </Container>
      </Container>
    </>
  );
}
