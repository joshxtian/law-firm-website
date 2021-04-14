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
import { useState } from "react";
import axios from "axios";
import { Select } from "@chakra-ui/select";

const ContactSection = () => {
    const [messageInfo, setMessageInfo] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [rating, setRating] = useState(5);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setMessageInfo((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            };
        });
    };

    const handleRatingChange = (e) => {
        const { name, value } = e.target;
        setRating(value);
    };

    const submitHandler = (e) => {
        e.preventDefault();

        if (
            messageInfo.name.trim() === "" ||
            messageInfo.email.trim() === "" ||
            messageInfo.message.trim() === "" ||
            !messageInfo.name ||
            !messageInfo.email ||
            !messageInfo.message ||
            !messageInfo.email.includes("@" || rating === null || rating > 5 || rating < 1)
        ) {
            console.log("Wrong information");
        } else {
            axios
                .post("http://127.0.0.1:8000/api/testimony", {
                    name: messageInfo.name,
                    email: messageInfo.email,
                    message: messageInfo.message,
                    rating: rating,
                })
                .then((response) => console.log(response));
        }
    };

    return (
        <IconContext.Provider value={{ color: "#4574E5", size: 35 }}>
            <Box
                as="section"
                h={{ base: "auto", xl: "80vh" }}
                bg="brand.100"
                py={"50px"}
            >
                <Container maxW={{ base: "xl", md: "7xl" }}>
                    <SectionTitle secondary>Testify to our works</SectionTitle>
                    <Stack
                        direction={{ base: "column-reverse", md: "row" }}
                        my={50}
                    >
                        <Box
                            w={{ base: "100%", md: "50%" }}
                            p={{ base: "10px", md: "10px", lg: "20px" }}
                        >
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
                        <Box
                            w={{ base: "100%", md: "50%" }}
                            p={{ base: "10px", md: "10px", lg: "20px" }}
                        >
                            <form onSubmit={submitHandler}>
                                <Stack>
                                    <HStack>
                                        <FormControl id="name">
                                            <Input
                                                isRequired
                                                bg="white"
                                                size="lg"
                                                name="name"
                                                onChange={handleChange}
                                                placeholder="Your Name"
                                            />
                                        </FormControl>
                                        <FormControl id="email">
                                            <Input
                                                isRequired
                                                bg="white"
                                                size="lg"
                                                name="email"
                                                onChange={handleChange}
                                                placeholder="Your Email"
                                            />
                                        </FormControl>
                                    </HStack>

                                    <FormControl id="message">
                                        <Textarea
                                            isRequired
                                            bg="white"
                                            size="lg"
                                            name="message"
                                            onChange={handleChange}
                                            placeholder="Message"
                                            rows={10}
                                            resize="none"
                                        />
                                    </FormControl>
                                    <Select
                                        m={0}
                                        variant="solid"
                                        colorScheme="blue"
                                        placeholder="Rate Us"
                                        name="rating"
                                        defaultValue={rating}
                                        onChange={handleRatingChange}
                                        isRequired
                                    >
                                        {Array(5)
                                            .fill()
                                            .map((rate, index) => {
                                                return (
                                                    <option
                                                        key={index + 1}
                                                        value={index + 1}
                                                    >
                                                        {index + 1}
                                                    </option>
                                                );
                                            })}
                                    </Select>

                                    <Button type="submit">
                                        Send Testimonial
                                    </Button>
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
