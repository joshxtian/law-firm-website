import { Heading } from '@chakra-ui/layout'
import { propNames } from '@chakra-ui/styled-system'
import React from 'react'

const SectionTitle = (props) => {
  return (
    <Heading textAlign="center" textTransform="uppercase" fontSize="40px" color={props.secondary ? "white" : "brand.100"} mb={50}>{props.children}</Heading>
  )
}

export default SectionTitle
