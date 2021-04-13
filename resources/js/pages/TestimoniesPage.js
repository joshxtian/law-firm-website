import { Container } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";

const TestimoniesPage = () => {
    return (
        <Box
            as="section"
            h="80vh"
            backgroundImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)) ,url('./img/ph3.jpg')"
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
            </Container>
        </Box>
    );
};

export default TestimoniesPage;
