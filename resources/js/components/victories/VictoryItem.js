import { Heading } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { VStack } from "@chakra-ui/layout";
import { ListItem } from "@chakra-ui/layout";

const VictoryItem = ({ prosecution, defendant, year, description }) => {
    return (
        <>
            <ListItem>
                <VStack alignItems="left">
                    <Heading color="brand.100" fontSize={24}>
                        {prosecution} vs. {defendant} - {year}
                    </Heading>
                    <Text fontSize={20} as="p">
                        {description}
                    </Text>
                </VStack>
            </ListItem>
            <Divider colorScheme="facebook" _last={{display:"none"}}/>
        </>
    );
};

export default VictoryItem;
