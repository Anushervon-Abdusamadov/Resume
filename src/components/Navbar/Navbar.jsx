import styled from "./Navbar.module.scss";
import { IconButton, Image } from "@chakra-ui/react";
import illustr from "../../assets/main_illustr.svg";
import vector from "../../assets/Vector.svg";
// import Sign-up from "../../pages/SignUp/SignUp.jsx";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Container, Flex, Text, Button } from "@chakra-ui/react";

import { useQueryHook } from "../MainContent/UseHooks/Query.jsx";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  HamburgerIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const { isSmallDevice } = useQueryHook();
  const navigate = useNavigate();

  return (
    <div className={styled.header}>
      <Container maxW="1200px" mt="10">
        <Flex justify="space-between">
          <span>
            <Flex>
              <img src={vector} alt="" />
              <Text as="b" mx="1" my="-1">
                БАНК РЕЗЮМЕ
              </Text>{" "}
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

        <Flex my="40" justify="space-between" className={styled.image}>
          <span>
            <h1 as="b" className={styled.ssotka}>
              КОМАНДЫ МЕЧТЫ <br className={styled.br} /> СОЗДАЮТСЯ ЗДЕСЬ
            </h1>
            <Text className={styled.sotka}>
              помощник в поиске работы и сотрудников{" "}
              <br className={styled.br} /> в сфере образования
            </Text>
            <Button my="10" className={styled.sotka} colorScheme="telegram">
              Начать
            </Button>
          </span>
          <span>
            <Image
              w="100"
              my="-55"
              src={illustr}
              className={styled.img}
              alt=""
            />
          </span>
        </Flex>
      </Container>
    </div>
  );
}
