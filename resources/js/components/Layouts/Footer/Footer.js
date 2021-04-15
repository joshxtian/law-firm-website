import { Image } from "@chakra-ui/image";
import { Container } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { ListItem } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/layout";
import { Link } from "@chakra-ui/layout";
import { List } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import {AiFillInstagram} from 'react-icons/ai';
import {GrLinkedinOption} from 'react-icons/gr';

const Footer = () => {
    return (
        <Box as="footer" bg="#2F314A" py={10}>
            <Container maxW="6xl">
                <Flex flexDir={{base:"column",md:"row"}} px={10} pt={10} pb={5}>
                    <Image src="./img/white.png" objectFit="contain" />
                    <VStack margin={{base:"5px auto",md:"0px 0px 0px auto"}}>
                        <List w={"100%"} display="flex" flexDir="row">
                            <ListItem>
                                <Link to="/" fontSize={20} color="white">
                                    <FaFacebookF />
                                </Link>
                            </ListItem>
                            <ListItem ml="15px">
                                <Link to="/" fontSize={20} color="white">
                                    <AiOutlineTwitter />
                                </Link>
                            </ListItem>
                            <ListItem ml="15px">
                                <Link to="/" fontSize={20} color="white">
                                    <AiFillInstagram />
                                </Link>
                            </ListItem>
                            <ListItem ml="15px">
                                <Link to="/" fontSize={20} color="white">
                                    <GrLinkedinOption />
                                </Link>
                            </ListItem>
                        </List>
                        <List w={"100%"} display="flex" flexDir="row">
                            <ListItem>
                                <Link to="/" fontSize={20} color="white">
                                    Home
                                </Link>
                            </ListItem>
                            <ListItem ml="15px">
                                <Link to="/" fontSize={20} color="white">
                                    The Firm
                                </Link>
                            </ListItem>
                        </List>
                    </VStack>
                </Flex>
                <Divider />
                <Text
                    color="white"
                    fontWeight="600"
                    fontSize="15px"
                    textAlign={"center"}
                    mt={50}
                >
                    This website does not represent a real company. Only for
                    educational purposes.
                </Text>
                <Text textAlign="center" color="white" mt={50}>
                    © 2021 Joshua Christian Saturno. All rights reserved.
                </Text>
            </Container>
        </Box>
    );
};

export default Footer;
