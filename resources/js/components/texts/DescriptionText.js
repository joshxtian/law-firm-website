import { Text } from '@chakra-ui/layout'
import React from 'react'

const DescriptionText = (props) => {
  return (
    <Text as="p" fontSize="20px">
      {props.children}
    </Text>
  )
}

export default DescriptionText
