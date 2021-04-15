import { Box, Container, Flex, List } from "@chakra-ui/layout";
import React from "react";
import Logo from "../../ui/Logo";
import HeaderList from "./HeaderList";
import HeaderMenuList from "./HeaderMenuList";

const Header = (props) => {
    return (
        <Box as="header" px={{base:"30px",xl:"100px"}} py={3}>
            <Container maxW="8xl">
                <Flex justify="space-between" flexDir={{base:"column",xl:"row"}}>
                    <Flex justify={{base:"center",xl:"flex-start"}} flex={{base:0,lg:1}}>
                        <Logo h={{base:50, xl:75}}/>
                    </Flex>

                    <Flex justify={{base:"center",xl:"flex-start"}} mt={{base:5, xl:0}}>
                        <List display="flex" alignItems="center">
                            <HeaderList to="/" label="Home" />
                            <HeaderMenuList/>
                        </List>
                    </Flex>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
