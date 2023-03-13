import React from 'react'
import { Card } from 'react-bootstrap'

const Product = ({ item }) => {
  return (
    <Card className='my-3 py-3 rounded'>
      <a href={`/menuItems/${item._id}`}>
        <Card.Img src={item.image} variant='top'></Card.Img>
      </a>
    </Card>
  )
}

export default Product
