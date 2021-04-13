import { Button } from "@chakra-ui/button";
import { FormControl } from "@chakra-ui/form-control";
import { Input } from "@chakra-ui/input";
import {
    Box,
    Container,
    Flex,
    HStack,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import SectionTitle from "../components/texts/SectionTitle";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

const ContactSection = () => {
    return (
        <IconContext.Provider value={{ color: "#4574E5", size: 35 }}>
            <Box as="section" h={{base:"auto",xl:"70vh"}} bg="brand.100" py={"50px"}>
                <Container maxW={{base:"xl",md:"7xl"}}>
                    <SectionTitle secondary>Testify to our works</SectionTitle>
                    <Stack direction={{base:"column-reverse",md:"row"}} my={50}>
                        <Box w={{base:"100%",md:"50%"}} p={{base:"10px",md:"10px",lg:"20px"}}>
                            <VStack spacing="40px">
                                <Flex w={"100%"}>
                                    <Box bg={"white"} borderRadius="full" p="2">
                                        <IoLocationSharp />
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        ml="10px"
                                    >
                                        <Text
                                            as="h1"
                                            fontSize="20px"
                                            color="white"
                                        >
                                            123 Main Street, New York, NY 10030
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex w={"100%"}>
                                    <Box bg={"white"} borderRadius="full" p="2">
                                        <MdEmail />
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        ml="10px"
                                    >
                                        <Text
                                            as="h1"
                                            fontSize="20px"
                                            color="white"
                                        >
                                            JLaw89@gmail.com
                                        </Text>
                                    </Box>
                                </Flex>
                                <Flex w={"100%"}>
                                    <Box bg={"white"} borderRadius="full" p="2">
                                        <AiFillPhone />
                                    </Box>
                                    <Box
                                        display="flex"
                                        alignItems="center"
                                        ml="10px"
                                    >
                                        <Text
                                            as="h1"
                                            fontSize="20px"
                                            color="white"
                                        >
                                            0959-459-2955
                                        </Text>
                                    </Box>
                                </Flex>
                            </VStack>
                        </Box>
                        <Box w={{base:"100%",md:"50%"}} p={{base:"10px",md:"10px",lg:"20px"}}>
                            <form>
                                <Stack>
                                    <HStack>
                                        <FormControl id="name">
                                            <Input
                                                bg="white"
                                                size="lg"
                                                placeholder="Your Name"
                                            />
                                        </FormControl>
                                        <FormControl id="email">
                                            <Input
                                                bg="white"
                                                size="lg"
                                                placeholder="Your Email"
                                            />
                                        </FormControl>
                                    </HStack>
                                    <VStack>
                                        <FormControl id="message">
                                            <Textarea
                                                bg="white"
                                                size="lg"
                                                placeholder="Message"
                                                rows={10}
                                                resize="none"
                                            />
                                        </FormControl>
                                    </VStack>
                                    <Button>Send Testimonial</Button>
                                </Stack>
                            </form>
                        </Box>
                    </Stack>
                </Container>
            </Box>
        </IconContext.Provider>
    );
};

export default ContactSection;
