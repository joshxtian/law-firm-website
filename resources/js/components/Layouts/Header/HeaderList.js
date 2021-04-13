import { Heading, Link, ListItem } from '@chakra-ui/layout'
import React from 'react'

const HeaderList = (props) => {
  return (
    <ListItem _notFirst={{ml:5}}>
      <Link href={props.to}>
        <Heading fontSize={{base:"11px",md:"20px", lg:"20px"}} color="brand.100" textTransform="uppercase">
          {props.label}
        </Heading>
      </Link>
    </ListItem>
  )
}

export default HeaderList
