import { Heading } from "@chakra-ui/layout"

const HeroText = (props) => {
  return (
    <Heading textAlign="center" textTransform="uppercase" whiteSpace={{base:"normal",md:"nowrap"}} color="white" fontSize={{base:"50px",md:"80px"}}>
      {props.children}
    </Heading>
  )
}

export default HeroText
