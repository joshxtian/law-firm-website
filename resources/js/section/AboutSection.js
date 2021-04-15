import { Image } from "@chakra-ui/image";
import { Box, Container, Stack, Text } from "@chakra-ui/layout";
import React from "react";
import DescriptionText from "../components/texts/DescriptionText";
import SectionTitle from "../components/texts/SectionTitle";
import about from "../data/about.obj";

const AboutSection = () => {
    return (
        <Box as="section">
            <SectionTitle>our story</SectionTitle>
            {about.map((info) => {
                return (
                    <>
                        <Container maxW="8xl">
                            <Stack
                                direction={{
                                    base: "column-reverse",
                                    xl: info.reversed === true ? "row-reverse" : "row",
                                }}
                                my={50}
                            >
                                <Box
                                    w={{ base: "100%", xl: "50%" }}
                                    px={{ base: 0, xl:5}}
                                >
                                    {info.paragraph.map(par=>{
                                        return <>
                                        <DescriptionText>
                                            {par}
                                        </DescriptionText>
                                        <br />
                                        </>
                                    })}
                                </Box>
                                <Box w={{ base: "100%", xl: "50%" }}>
                                    <Image src={info.image} />
                                </Box>
                            </Stack>
                        </Container>
                    </>
                );
            })}
        </Box>
    );
};

export default AboutSection;
