import { SimpleGrid } from "@chakra-ui/layout";
import { Container } from "@chakra-ui/layout";
import { Center } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import GalleryItem from "../components/gallery/GalleryItem";
import gallery from "../data/gallery.obj";

const GallerySection = () => {
    return (
        <Box as="section">
            <Container maxW={"9xl"}>
                <Center>
                    {" "}
                    <SimpleGrid columns={3} spacing={3}>
                        {/* Insert Gallery Items */}
                        {gallery.map((image) => {
                            return <GalleryItem key={image.id} {...image} />;
                        })}
                    </SimpleGrid>
                </Center>
            </Container>
        </Box>
    );
};

export default GallerySection;
