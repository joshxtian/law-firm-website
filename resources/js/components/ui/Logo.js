import { Image } from "@chakra-ui/image";
import React from "react";

const Logo = (props) => {
    return (
        <a href="/">
            <Image src="./img/Saturno-legal.png" alt="Saturno Legal Co. Logo" {...props} />
        </a>
    );
};

export default Logo;
