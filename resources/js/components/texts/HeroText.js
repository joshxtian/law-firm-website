import { Heading } from "@chakra-ui/layout"

const HeroText = (props) => {
  return (
    <Heading textAlign="center" textTransform="uppercase" whiteSpace={{base:"normal",md:"nowrap"}} color="white" fontSize={{base:"40px",md:"70px"}}>
      {props.children}
    </Heading>
  )
}

export default HeroText
