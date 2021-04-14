import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import testimonials from "../data/testimonials.obj";
import SectionTitle from "../components/texts/SectionTitle";
import Testimonials from "../components/texts/Testimonials";
import { Button } from "@chakra-ui/button";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "@chakra-ui/layout";

const TestimonialSection = () => {
    return (
        <Box
            as="section"
            h={{ base: "auto", xl: "60vh" }}
            mt="100px"
            py={"50px"}
            bgGradient="linear(to-b,white,#4574E5)"
        >
            <SectionTitle>Testimonials</SectionTitle>
            <Container maxW="8xl">
                <SimpleGrid columns={{base:1,md:3}} spacing={5}>
                    {testimonials.slice(0, 3).map((item, index) => {
                        return (
                            <Testimonials
                                message={item.message}
                                name={item.name}
                                rating={item.rating}
                            />
                        );
                    })}
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
            </Container>
        </Box>
    );
};

export default TestimonialSection;
