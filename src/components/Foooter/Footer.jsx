import styled from "./Footer.module.scss";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Flex,
  Box,
  Text,
  Button,
  Container,
  Link,
  Image,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import donm from "../../assets/donm@2x.svg";
import mosru from "../../assets/mosru@2x 1.svg";

export default function Footer() {
  return (
    <>
      <Container maxW="1200px" mt="16">
        {" "}
        <Flex mt="16" className={styled.flex} justifyContent="space-between">
          <Box w="35vw" className={styled.boxes}>
            <Text as="b" className={styled.txt} fontSize="4xl">
              ОСТАЛИСЬ ВОПРОСЫ?
            </Text>
            <p>
              {" "}
              Ответы на часто задаваемые вопросы здесь. Специалисты службы
              поддержки банка резюме могут оказывать вам помощь в заполнении
              резюме.Если у вас возникли сложности или вопросы, вы можете
              связаться с нами.
            </p>
            <Button mt={5} className={styled.otsukas} colorScheme="telegram">
              Обратная связь
            </Button>
          </Box>
          <Box w="35vw" my="4" className={styled.boxes}>
            {" "}
            <Accordion allowMultiple>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #AADCF3",
                        }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Как пользоваться банком резюме
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      style={{ backgroundColor: "#f4f9fb" }}
                      pb={4}
                    >
                      Ответы на часто задаваемые вопросы здесь. Специалисты
                      службы поддержки банка резюме могут оказывать вам помощь в
                      заполнении резюме.Если у вас возникли сложности или
                      вопросы, вы можете связаться с нами.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>{" "}
            <Accordion allowMultiple mt={"5"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #AADCF3",
                        }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Как пользоваться банком резюме
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      style={{ backgroundColor: "#f4f9fb" }}
                      pb={4}
                    >
                      Ответы на часто задаваемые вопросы здесь. Специалисты
                      службы поддержки банка резюме могут оказывать вам помощь в
                      заполнении резюме.Если у вас возникли сложности или
                      вопросы, вы можете связаться с нами.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>{" "}
            <Accordion allowMultiple mt={"5"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #AADCF3",
                        }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Как пользоваться банком резюме
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      style={{ backgroundColor: "#f4f9fb" }}
                      pb={4}
                    >
                      Ответы на часто задаваемые вопросы здесь. Специалисты
                      службы поддержки банка резюме могут оказывать вам помощь в
                      заполнении резюме.Если у вас возникли сложности или
                      вопросы, вы можете связаться с нами.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>{" "}
            <Accordion allowMultiple mt={"5"}>
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        style={{
                          borderRadius: "50px",
                          border: "1px solid #AADCF3",
                        }}
                      >
                        <Box as="span" flex="1" textAlign="left">
                          Как пользоваться банком резюме
                        </Box>
                        {isExpanded ? (
                          <MinusIcon fontSize="12px" />
                        ) : (
                          <AddIcon fontSize="12px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      style={{ backgroundColor: "#f4f9fb" }}
                      pb={4}
                    >
                      Ответы на часто задаваемые вопросы здесь. Специалисты
                      службы поддержки банка резюме могут оказывать вам помощь в
                      заполнении резюме.Если у вас возникли сложности или
                      вопросы, вы можете связаться с нами.
                    </AccordionPanel>
                  </>
                )}
              </AccordionItem>
            </Accordion>
          </Box>
        </Flex>
      </Container>
      <Container maxW="100vw" style={{ backgroundColor: "#f4f9fb" }}>
        <Container maxW="1200px" mt="16">
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
