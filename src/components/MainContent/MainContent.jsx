import { Center, Image } from "@chakra-ui/react";
import styled from "./MainContent.module.scss";
import img1 from "../../../public/Frame 58.svg";
import img2 from "../../../public/Frame 59.svg";
import img3 from "../../../public/Frame 60.svg";
import peopl from "../../../public/people.svg";
import people from "../../../public/people2.svg";
import box from "../../../public/people.svg";
import box1 from "../../../public/people2.svg";
import box2 from "../../../public/Frame 200.svg";
import box3 from "../../../public/Frame 201.svg";
import imag1 from "../../../public/icon1.svg";
import imag2 from "../../../public/icon2.svg";
import imag3 from "../../../public/icon3.svg";
import imag4 from "../../../public/icon4.svg";
import image1 from "../../assets/Rectangle 18.png";
import image2 from "../../assets/Rectangle 19.png";
import image3 from "../../assets/Rectangle 20.png";
import image4 from "../../assets/Rectangle 21.png";
import image5 from "../../assets/Rectangle 22.png";
import gromko from "../../assets/gromkogovoritel.svg";
import AdBlock from "./AdBlock/AdBlock";
import AdBlockS from "./AdBlocks/AdBlock";
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Stack, HStack, VStack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "@chakra-ui/react";
import {
  Container,
  Flex,
  Spacer,
  Box,
  Text,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

const blockArr = [
  {
    img: img1,
    num: 67,
    text: "предложений о работе",
  },
  {
    img: img2,
    num: 180,
    text: "размещенных резюме",
  },
  {
    img: img3,
    num: 113,
    text: "приглашений на собеседование ",
  },
];
const blocksArr = [
  {
    imag: imag1,
    text: "В ЛЮБОЕ ВРЕМЯ",
  },
  {
    imag: imag2,
    text: "ПРЯМО НА САЙТЕ",
  },
  {
    imag: imag3,
    text: "БЕСПЛАТНО",
  },
  {
    imag: imag4,
    text: "РЕЗУЛЬТАТЫ-СРАЗУ ЖЕ",
  },
];

export default function MainContent() {
  return (
    <Container maxW="1200px" mt="16">
      <div className={styled.overflow}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {blockArr.map((i, idx) => (
            <AdBlock num={i.num} text={i.text} img={i.img} key={idx} />
          ))}
        </div>
      </div>
      <Flex mt="16">
        <Wrap>
          <WrapItem>
            {" "}
            <Box borderRadius="lg" as="div" className={styled.section_second}>
              <Box p="10" as="div">
                {" "}
                <Text fontSize="lg" as="b">
                  Для работадателей
                </Text>{" "}
                <br />
                <Text mt="5">
                  Доступ к банку резюме предоставляется администрациям школ
                  города Москвы. Если вы являетесь директором московской школы,
                  вы можете войти в банк резюме, используя единую учетную запись
                  ЕКИС.
                </Text>
                <Button my="5" className={styled.sotka} colorScheme="telegram">
                  Вход
                </Button>
              </Box>{" "}
              <Image className={styled.hide} maxH="340px" src={peopl} />
            </Box>
          </WrapItem>
          <Button my="5" className={styled.btnAdaptive} colorScheme="telegram">
            Вход
          </Button>
          <Spacer />
          <WrapItem>
            <Box borderRadius="lg" as="div" className={styled.section_second}>
              <Box p="10" as="div">
                {" "}
                <Text fontSize="lg" as="b">
                  Для соискателей
                </Text>
                <Text mt="5">
                  Ваш помощник в поиске работы в московских школах. Бесплатная
                  публикация резюме{" "}
                </Text>
                <Button
                  mr="5"
                  mt="5"
                  className={styled.sotka}
                  variant="outline"
                  colorScheme="telegram"
                >
                  Зарегистрироваться
                </Button>
                <Button className={styled.sotka} mt="5" colorScheme="telegram">
                  Вход
                </Button>
              </Box>{" "}
              <Image className={styled.hide} maxH="340px" src={people} />
            </Box>
          </WrapItem>
          <Button my="5" className={styled.btnAdaptive} colorScheme="telegram">
            Вход
          </Button>
          <Button
            className={styled.btnAdaptive}
            variant="outline"
            colorScheme="telegram"
          >
            Зарегистрироваться
          </Button>
        </Wrap>
      </Flex>
      <Flex mt="16">
        <Box as="div" alignItems="center" className={styled.section_third}>
          <Box flexWrap="wrap">
            <Box as="div" mb={10} className={styled.component1}>
              <Button
                className={styled.btn1}
                size="sm"
                mt="5"
                ml="4"
                fontSize="lg"
              >
                1
              </Button>{" "}
              <br />
              <Text color={"white"} as="b" ml="4" fontSize="2xl">
                ЗАПИШИТЕСЬ
              </Text>
              <Text color={"white"} ml="4">
                на консультатцию
              </Text>
              {/* <Image src={box2} m={5} className={styled.boxes}></Image> */}
            </Box>

            <Box as="div" className={styled.component2}>
              <Button
                className={styled.btn}
                size="sm"
                ml="4"
                mt="5"
                fontSize="lg"
              >
                2
              </Button>{" "}
              <br />
              <Text color={"white"} as="b" ml="4" fontSize="2xl">
                ПРОЙДИТЕ КУРС
              </Text>
              <Text color={"white"} ml="4">
                в комфортном режиме
              </Text>
              {/* <Image src={box3} m={5} className={styled.boxes}></Image> */}
            </Box>
          </Box>
          <Box className={styled.text}>
            <Text as="b" fontSize="4xl" className={styled.txt}>
              WELCOME-КУРС
            </Text>
            <p>Запишитесь, чтоб пройти бесплатный welcome-курс</p>
            <Button mt={5} className={styled.sotka} colorScheme="telegram">
              Записаться
            </Button>
          </Box>
          <Button mt={5} className={styled.otsuka} colorScheme="telegram">
            Записаться
          </Button>
        </Box>
      </Flex>
      <Flex
        mt="16"
        w="100%"
        className={styled.section_fifth}
        justifyContent={"space-between"}
        flexWrap="wrap"
      >
        <Box as="div" alignItems="center" className={styled.section_fourth}>
          <Text as="b" fontSize="4xl" className={styled.txt}>
            ПРОЙДИТЕ <br /> ДИАГНОСТИКУ
          </Text>
          <Box>
            <p>
              Вы можете пройти профессиональную <br /> диагностику на нашем
              сайте и получить <br /> результаты сразу после ее прохождения.{" "}
            </p>
            <Button mt={5} className={styled.sotka} colorScheme="telegram">
              Пройти Диагностику
            </Button>
          </Box>

          <p>
            В любое время <br /> и бесплатно
          </p>
        </Box>
      </Flex>
      <div
        style={{
          paddingBottom: "5vh",
        }}
        className={styled.overflowM}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {blocksArr.map((i, idx) => (
            <AdBlockS text={i.text} imag={i.imag} key={idx} />
          ))}
        </div>
      </div>
      <Button w="100%" className={styled.otsuka} mb={6} colorScheme="telegram">
        Пройти Диагностику
      </Button>
      <Text
        as="b"
        fontSize="4xl"
        mt={16}
        mb={5}
        style={{ display: "flex", justifyContent: "Center" }}
        className={styled.txt}
      >
        АНОНС МЕРОПРИЯТИЙ
      </Text>{" "}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        <Card
          className={styled.cards}
          maxW="4xl"
          style={{ backgroundColor: "#f4f9fb" }}
        >
          <Image
            src={image1}
            className={styled.izbraniy}
            alt="Rectangle 18"
            borderRadius="lg"
          />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text color="gray">05.13.2024</Text>
              <Heading size="md">
                Современная методология разработки оказались ошибочной
              </Heading>
              <Text>Частотность поисковых запросов оказалась ошибочной</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          className={styled.cards}
          maxW="25vw"
          style={{ backgroundColor: "#f4f9fb" }}
        >
          <Image src={image2} alt="Rectangle 19" borderRadius="lg" />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text color="gray">05.13.2024</Text>
              <Heading size="md">
                Современная методология разработки оказались ошибочной
              </Heading>
              <Text>Частотность поисковых запросов оказалась ошибочной</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          mt="10"
          className={styled.cards}
          maxW="25vw"
          style={{ backgroundColor: "#f4f9fb" }}
        >
          <Image src={image3} alt="Rectangle 20" borderRadius="lg" />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text color="gray">05.13.2024</Text>
              <Heading size="md">
                Современная методология разработки оказались ошибочной
              </Heading>
              <Text>Частотность поисковых запросов оказалась ошибочной</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          mt="10"
          className={styled.cards}
          maxW="25vw"
          style={{ backgroundColor: "#f4f9fb" }}
        >
          <Image src={image4} alt="Rectangle 21" borderRadius="lg" />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text color="gray">05.13.2024</Text>
              <Heading size="md">
                Современная методология разработки оказались ошибочной
              </Heading>
              <Text>Частотность поисковых запросов оказалась ошибочной</Text>
            </Stack>
          </CardBody>
        </Card>
        <Card
          mt="10"
          className={styled.cards}
          maxW="25vw"
          style={{
            backgroundColor: "#f4f9fb",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Image src={image5} alt="Rectangle 22" borderRadius="lg" />
          <CardBody>
            <Stack mt="6" spacing="3">
              <Text color="gray">05.13.2024</Text>
              <Heading size="md">
                Современная методология разработки оказались ошибочной
              </Heading>
              <Text>Частотность поисковых запросов оказалась ошибочной</Text>
            </Stack>
          </CardBody>
        </Card>
      </div>
      <Link
        color="rgba(0, 125, 182, 1)"
        fontSize="xl"
        mt={16}
        mb={5}
        style={{ display: "flex", justifyContent: "Center" }}
      >
        Смотреть ещё
      </Link>
      <Box as="div" alignItems="center" className={styled.section_six}>
        <Box>
          <Text as="b" className={styled.txt} fontSize="4xl">
            КАРЬЕРНАЯ КОНЦУЛЬТАЦИЯ
          </Text>
          <p className={styled.txt1}>
            Запишитесь, чтоб пройти бесплатный карьерную концультацию
          </p>
          <Button mt={5} className={styled.otsukas} colorScheme="telegram">
            Записаться
          </Button>
        </Box>
        <Image className={styled.hide} src={gromko}></Image>
      </Box>
      <Flex mt={16} className={styled.hide}>
        <Box as="div" className={styled.components1}>
          <Button className={styled.btn1} size="sm" ml="4" mt="5" fontSize="lg">
            1
          </Button>{" "}
          <br />
          <Text color={"white"} as="b" ml="4" fontSize="2xl">
            ЗАПИШИТЕСЬ
          </Text>
          <Text color={"white"} ml="4">
            на консультатцию
          </Text>
          {/* <Image src={box3} m={5} className={styled.boxes}></Image> */}
        </Box>
        <Box as="div" className={styled.components2}>
          <Button className={styled.btn} size="sm" ml="4" mt="5" fontSize="lg">
            2
          </Button>{" "}
          <br />
          <Text color={"white"} as="b" ml="4" fontSize="2xl">
            ПРОЙДИТЕ ОПРОС
          </Text>
          <Text color={"white"} ml="4">
            в удобное время
          </Text>
          {/* <Image src={box3} m={5} className={styled.boxes}></Image> */}
        </Box>{" "}
        <Box as="div" className={styled.component3}>
          <Button className={styled.btn2} size="sm" ml="4" mt="5" fontSize="lg">
            3
          </Button>{" "}
          <br />
          <Text color={"white"} as="b" ml="4" fontSize="2xl">
            РЕЗУЛЬТАТЫ{" "}
          </Text>
          <Text color={"white"} ml="4">
            получите на e-mail
          </Text>
          {/* <Image src={box3} m={5} className={styled.boxes}></Image> */}
        </Box>
      </Flex>
    </Container>
  );
}
