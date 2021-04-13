import { Link } from "@chakra-ui/layout";
import { Heading } from "@chakra-ui/layout";
import { ListItem } from "@chakra-ui/layout";
import { MenuList } from "@chakra-ui/menu";
import { MenuItem } from "@chakra-ui/menu";
import { MenuButton } from "@chakra-ui/menu";
import { Menu } from "@chakra-ui/menu";

const HeaderMenuList = () => {
    return (
        <ListItem
            _notFirst={{ ml: 5 }}
            fontSize={{ base: "11px", md: "20px", lg: "20px" }}
            color="brand.100"
            textTransform="uppercase"
        >
            <Menu isLazy>
                <MenuButton textTransform="uppercase">
                    <Heading
                        fontSize={{ base: "11px", md: "20px", lg: "20px" }}
                        color="brand.100"
                        textTransform="uppercase"
                    >
                        The Firm
                    </Heading>
                </MenuButton>
                <MenuList>
                    <MenuItem>Our Victories</MenuItem>
                    <MenuItem>
                        <Link href="/testimony">Client Testimonies</Link>
                    </MenuItem>
                    <MenuItem>Our Lawyers</MenuItem>
                </MenuList>
            </Menu>
        </ListItem>
    );
};

export default HeaderMenuList;
