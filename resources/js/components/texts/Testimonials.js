import { Box, Text } from "@chakra-ui/layout";

const Testimonials = ({ message, name, rating }) => {
    return (
        <Box textAlign="center">
            <Text
                fontSize="18px"
                fontWeight="600"
                color="black"
                minH={54}
                maxH={60}
            >
                {message.length > 80 ? message.substring(0, 80) + "..." : message}
            </Text>
            <Text as="strong" fontSize="19px" my={10}>
                {name}
            </Text>
            <Text fontSize="20px">
                {Array(rating)
                    .fill()
                    .map((rate) => {
                        return <>⭐</>;
                    })}
            </Text>
        </Box>
    );
};

export default Testimonials;
