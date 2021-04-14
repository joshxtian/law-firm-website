import { Image } from "@chakra-ui/image"
import { Box } from "@chakra-ui/layout"

const GalleryItem = ({id,alt,src}) => {
  return (
    <Image alt={alt} src={src} boxSize={"450px"} objectFit="cover"/>
  )
}

export default GalleryItem
