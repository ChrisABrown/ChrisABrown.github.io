import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ item }) => {
  console.log(item)
  return (
    <Card className='my-3 py-3 rounded'>
      <a href={`/menuItems/${item._id}`}>
        <Card.Img src={item.image} variant='top'></Card.Img>
      </a>
      <Card.Body>
        <a href={`/menuItems/${item._id}`}>
          <Card.Title as='div'>
            <strong>{item.className}</strong>
          </Card.Title>
        </a>
        <Card.Text as='div'>
          <Rating
            value={item.rating}
            text={`${item.numReviews} reviews`}
            className='my-3'
          >
            {item.rating} from {item.numReviews} reviews
          </Rating>
        </Card.Text>
        <Card.Text as='h3'>${item.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
