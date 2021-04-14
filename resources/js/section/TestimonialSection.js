import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import testimonials from "../data/testimonials.obj";
import SectionTitle from "../components/texts/SectionTitle";
import Testimonials from "../components/texts/Testimonials";
import { Button } from "@chakra-ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "@chakra-ui/layout";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Spinner } from "@chakra-ui/spinner";
import { Center } from "@chakra-ui/layout";

const TestimonialSection = () => {
    const isMount = useRef(false);
    const [verifiedTestimonials, setVerifiedTestimonials] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        if (!isMount.current) {
            const fetchTestimonies = async () => {
                setIsLoading(true);
                await axios
                    .get(`http://127.0.0.1:8000/api/testimony/verified/3`, {
                        headers: { "Content-Type": "application/json" },
                    })
                    .then((response) => {
                        setIsLoading(false);
                        setVerifiedTestimonials(response.data);
                    });
                isMount.current = true;
            };
            fetchTestimonies();
        }
    }, [isMount, verifiedTestimonials]);

    return (
        <Box
            as="section"
            mt="100px"
            py={"50px"}
            bgGradient="linear(to-b,white,#4574E5)"
        >
            <Container maxW="8xl">
                {isLoading ? (
                    <Center>
                        <Spinner
                            thickness="4px"
                            speed="0.65s"
                            emptyColor="gray.200"
                            color="brand.100"
                            size="xl"
                        />
                    </Center>
                ) : (
                    <>
                        {verifiedTestimonials && (
                            <>
                                <SectionTitle>Testimonials</SectionTitle>{" "}
                                <SimpleGrid
                                    columns={{ base: 1, md: 3 }}
                                    spacing={5}
                                >
                                    {verifiedTestimonials &&
                                        verifiedTestimonials.map(
                                            (item, index) => {
                                                return (
                                                    <Testimonials
                                                        message={item.message}
                                                        name={item.name}
                                                        rating={item.rating}
                                                    />
                                                );
                                            }
                                        )}
                                </SimpleGrid>
                                <Box textAlign="center" mt={"55px"}>
                                    <Heading color="white" fontSize="33px">
                                        There's More where that came from!
                                    </Heading>

                                    <Link href="/testimony">
                                        <Button
                                            my={5}
                                            size="lg"
                                            rightIcon={<BsArrowRightShort />}
                                        >
                                            Read more testimonials
                                        </Button>
                                    </Link>
                                </Box>
                            </>
                        )}
                    </>
                )}
            </Container>
        </Box>
    );
};

export default TestimonialSection;
