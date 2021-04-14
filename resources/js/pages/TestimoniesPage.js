import { Heading } from "@chakra-ui/layout";
import { List } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Spinner } from "@chakra-ui/spinner";
import { propNames } from "@chakra-ui/styled-system";
import { TabPanels } from "@chakra-ui/tabs";
import { TabPanel } from "@chakra-ui/tabs";
import { Tab } from "@chakra-ui/tabs";
import { TabList } from "@chakra-ui/tabs";
import { Tabs } from "@chakra-ui/tabs";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import TestimonialItem from "../components/testimonials/TestimonialItem";
import SectionTitle from "../components/texts/SectionTitle";
import testimonials from "../data/testimonials.obj";

const TestimoniesPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const isMount = useRef(false);
    const [testimonies, setTestimonies] = useState([]);
    const [uTestimony, setUTestimony] = useState([]);
    useEffect(() => {
        if (!isMount.current) {
            const fetchTestimonies = async () => {
                setIsLoading(true);
                await axios
                    .get("http://127.0.0.1:8000/api/testimony", {
                        headers: { "Content-Type": "application/json" },
                    })
                    .then((response) => setTestimonies(response.data));

                await axios
                    .get("http://127.0.0.1:8000/api/testimony/unverified", {
                        headers: { "Content-Type": "application/json" },
                    })
                    .then((response) => {
                        setIsLoading(false);
                        setUTestimony(response.data);
                    });
                isMount.current = true;
            };
            fetchTestimonies();
        }
    }, [isMount, testimonies, uTestimony]);

    return (
        <>
            <Box
                as="section"
                h={{ base: "30vh", lg: "30vh", xl: "40vh" }}
                backgroundImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)) ,url('./img/ph9.jpg')"
                backgroundSize="cover"
                backgroundPostition="center center"
                mb={20}
            >
                <Container
                    maxW="6xl"
                    display="flex"
                    textAlign="center"
                    alignItems="center"
                    height="100%"
                >
                    <SectionTitle mx={{ base: "auto", md: 0 }} secondary>
                        Testimonials
                    </SectionTitle>
                </Container>
            </Box>
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
                    <Container maxW="6xl" my="100">
                        {uTestimony.length > 0 || testimonies.length > 0 ? (
                            <>
                                <Tabs>
                                    <TabList>
                                        <Tab>
                                            <Heading
                                                fontSize={{
                                                    base: "11px",
                                                    md: "20px",
                                                    lg: "20px",
                                                }}
                                                color="green"
                                                textTransform="uppercase"
                                            >
                                                Verified Testimonies
                                            </Heading>
                                        </Tab>
                                        <Tab>
                                            <Heading
                                                fontSize={{
                                                    base: "11px",
                                                    md: "20px",
                                                    lg: "20px",
                                                }}
                                                color="red"
                                                textTransform="uppercase"
                                            >
                                                Testimonies to be reviewed
                                            </Heading>
                                        </Tab>
                                    </TabList>

                                    <TabPanels>
                                        {/* Verified Testimonies */}
                                        <TabPanel>
                                            <List spacing={3}>
                                                {testimonies ? (
                                                    testimonies
                                                        .filter((item) => {
                                                            return (
                                                                item.isVerified ===
                                                                1
                                                            );
                                                        })
                                                        .map((item, index) => {
                                                            return (
                                                                <TestimonialItem
                                                                    key={
                                                                        index +
                                                                        1
                                                                    }
                                                                    {...item}
                                                                />
                                                            );
                                                        })
                                                ) : (
                                                    <Heading
                                                        color="gray"
                                                        textTransform="uppercase"
                                                    >
                                                        There are no
                                                        testimonials yet
                                                    </Heading>
                                                )}
                                            </List>
                                        </TabPanel>
                                        <TabPanel>
                                            <List spacing={3}>
                                                {uTestimony &&
                                                    uTestimony.map(
                                                        (item, index) => {
                                                            return (
                                                                <TestimonialItem
                                                                    key={
                                                                        index +
                                                                        1
                                                                    }
                                                                    {...item}
                                                                />
                                                            );
                                                        }
                                                    )}
                                            </List>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </>
                        ) : (
                            <>
                                <Heading color="gray" textTransform="uppercase">
                                    There are no testimonials yet
                                </Heading>
                            </>
                        )}
                    </Container>
                </>
            )}
        </>
    );
};

export default TestimoniesPage;
