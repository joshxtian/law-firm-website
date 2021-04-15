import { Box } from "@chakra-ui/layout";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header/>
      <main>
        {props.children}
      </main>
      <Box h={50} bgGradient="linear(to-b,#4574E5,#2F314A)" >
        {" "}
      </Box>
      <Footer/>
    </>
  )
}

export default Layout
