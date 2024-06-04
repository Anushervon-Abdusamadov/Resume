import styled from "./Error.module.scss";
import {
  Flex,
  Box,
  Text,
  Button,
  Container,
  Link,
  Image,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import donm from "../../assets/donm@2x.svg";
import mosru from "../../assets/mosru@2x 1.svg";
import vector from "../../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import { useQueryHook } from "../../components/MainContent/UseHooks/Query.jsx";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";

export default function Error() {
  const { isSmallDevice } = useQueryHook();
  const navigate = useNavigate();

  return (
    <>
      <Container maxW="1200px" mt="10">
        <Flex justify="space-between">
          <span>
            <Flex>
              <Image src={vector} alt="" />
              <Text as="b" mx="1" my="-1">
                БАНК РЕЗЮМЕ
              </Text>
            </Flex>
          </span>
          {isSmallDevice ? (
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                variant="outline"
              />
              <MenuList>
                <MenuItem icon={<AddIcon />} command="⌘T">
                  Женщины очень милосердные,
                </MenuItem>
                <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
                  они могут простить мужчину
                </MenuItem>
                <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
                  если он ни в чём не виноват.
                </MenuItem>
                <MenuItem icon={<EditIcon />} command="⌘O">
                  © Джейсон Стэтхэм
                </MenuItem>
              </MenuList>
            </Menu>
          ) : (
            <span>
              <Button
                onClick={() => navigate("/sign_up")}
                mx="5"
                colorScheme="telegram"
                variant="solid"
              >
                Вход
              </Button>
              <Button colorScheme="telegram" variant="outline">
                Регистрация
              </Button>
            </span>
          )}
        </Flex>
        <Flex mt="16">
          <Box as="div" alignItems="center" className={styled.section_third}>
            <Box flexWrap="wrap">
              <Box as="div" className={styled.component1}>
                404
              </Box>
            </Box>
            <Box className={styled.text}>
              <Text as="b" fontSize="3xl" className={styled.txt}>
                ОЙ, ЧТО-ТО ПОШЛО НЕ ТАК. СТРАНИЦА НЕ НАЙДЕНА.
              </Text>
              <p>Такой страницы не существует или она была перенесена.</p>
              <Button
                onClick={() => navigate("/")}
                mt={5}
                className={styled.sotka}
                colorScheme="telegram"
              >
                На главную
              </Button>
              <Flex mt="5" display="inline-block">
                <Link color="rgba(0, 125, 182, 1)" fontSize="md">
                  Служба поддержки
                </Link>{" "}
                <br />
                <Link color="rgba(0, 125, 182, 1)" fontSize="md">
                  Помощь
                </Link>
              </Flex>
            </Box>

            <Button mt={5} className={styled.otsuka} colorScheme="telegram">
              Записаться
            </Button>
          </Box>
        </Flex>
      </Container>
      <Container maxW="100vw" bg="#f4f9fb">
        <Container maxW="1200px" mt="16">
          <Flex pt="16" flexWrap="wrap" justifyContent="space-around" h="30vh">
            <Link color="rgba(0, 125, 182, 1)" fontSize="md">
              Служба поддержки
            </Link>
            <Box>
              <Link>Пользовательское соглашение</Link>
              <br />
              <Link>Правовая информация</Link>
            </Box>
            <Box>
              <Link>Контанкты</Link>
              <br />
              <Link>Помощь (FAQ)</Link>
            </Box>
            <Box style={{ display: "flex" }}>
              <Image src={donm} className={styled.img} />
              <Image src={mosru} className={styled.img} />
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
          </Text>
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
