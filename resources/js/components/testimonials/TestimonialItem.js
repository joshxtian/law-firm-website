import { Button } from "@chakra-ui/button";
import { VStack } from "@chakra-ui/layout";
import { Flex } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import { Divider } from "@chakra-ui/layout";
import { Text } from "@chakra-ui/layout";
import { ListItem } from "@chakra-ui/layout";
import axios from "axios";
import React, { useEffect, useState } from "react";

const TestimonialItem = (props) => {
    const deleteHandler = async () => {
        if (window.confirm("Are You Sure to DELETE This?")) {
            axios.delete(`http://127.0.0.1:8000/api/testimony/${props.id}`);
            window.location.reload();
        }
    };
    const updateHandler = async () => {
        if (window.confirm("Are You Sure to VERIFY this review?")) {
            axios.put(`http://127.0.0.1:8000/api/testimony/${props.id}`);
            window.location.reload();
        }
    };

    return props.isVerified ? (
        <>
            <ListItem>
                <VStack align="stretch">
                    <Flex>
                        <Text
                            fontSize="20px"
                            as="strong"
                            textTransform="uppercase"
                        >
                            {props.name}{" "}
                        </Text>
                        <Text mx={5} fontSize="19px">
                            {Array(props.rating)
                                .fill()
                                .map((rate) => {
                                    return <>⭐</>;
                                })}
                        </Text>
                    </Flex>

                    <Text as="p" fontSize={20}>
                        {props.message}
                    </Text>
                </VStack>
            </ListItem>

            <Divider _last={{ display: "none" }} />
        </>
    ) : (
        <>
            <ListItem>
                <Flex flexDir="column">
                    <VStack align="stretch">
                        <Flex>
                            <Text
                                fontSize="20px"
                                as="strong"
                                textTransform="uppercase"
                            >
                                {props.name}{" "}
                            </Text>
                            <Text mx={5} fontSize="19px">
                                {Array(props.rating)
                                    .fill()
                                    .map((rate) => {
                                        return <>⭐</>;
                                    })}
                            </Text>
                        </Flex>

                        <Text as="p" fontSize={20}>
                            {props.message}
                        </Text>
                    </VStack>

                    <Flex alignItems="center" my={2}>
                        <Button
                            variant="solid"
                            onClick={updateHandler}
                            colorScheme="green"
                        >
                            Verify
                        </Button>
                        <Button
                            variant="solid"
                            onClick={deleteHandler}
                            colorScheme="red"
                            ml={2}
                        >
                            Remove
                        </Button>
                    </Flex>
                </Flex>
            </ListItem>

            <Divider _last={{ display: "none" }} />
        </>
    );
};

export default TestimonialItem;
