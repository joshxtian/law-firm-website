import { Container } from "@chakra-ui/layout";
import { List } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import victories from "../data/victories.obj";
import SectionTitle from "../components/texts/SectionTitle";
import VictoryItem from "../components/victories/VictoryItem";

const VictoriesPage = () => {
    return (
        <>
            <Box
                as="section"
                h={{ base: "30vh", lg: "30vh", xl: "40vh" }}
                backgroundImage="linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.3)) ,url('./img/courtroom.jpeg')"
                backgroundSize="cover"
                backgroundPostition="center top"
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
                        Case Victories
                    </SectionTitle>
                </Container>
            </Box>

            <Container maxW={"6xl"} my="100">
                <List spacing={5}>
                  {victories.map(victory=>{
                    return <VictoryItem key={victory.id} {...victory}/>
                  })}
                </List>
            </Container>
        </>
    );
};

export default VictoriesPage;
