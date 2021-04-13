import { Button } from "@chakra-ui/button";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/layout";
import React from "react";
import HeroText from "../components/texts/HeroText";

const HeroSection = () => {
    return (
        <Box
            as="section"
            h="80vh"
            backgroundImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)) ,url('./img/ph5.jpg')"
            backgroundSize="cover"
            backgroundPostition="center"
            backgroundAttachment="fixed"
            mb={20}
        >
            <Container
                maxW="6xl"
                display="flex"
                textAlign="center"
                alignItems="center"
                height="100%"
            >
                
                <Box mx="auto">
                    <HeroText>The Leading</HeroText>
                    <HeroText>
                        <Text as="span" color="yellow">
                            Law Firm
                        </Text> {" "}
                        In
                    </HeroText>
                    <HeroText>The Philippines</HeroText>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;
