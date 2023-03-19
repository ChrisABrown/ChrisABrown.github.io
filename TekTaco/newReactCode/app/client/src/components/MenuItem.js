import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const MenuItem = ({ item }) => {
  const menuItemURL = `/menuItems/${item.sku}`

  return (
    <Card className='my-3 py-3 rounded'>
      <Link to={menuItemURL}>
        <Card.Img src={item.image} height={300}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={menuItemURL}>
          <Card.Title as='div'>
            <strong>{item.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as='div'>
          <Rating
            value={item.rating}
            text={`${item.numOfReviews} reviews`}
            className='my-3'
          >
            {item.rating} from {item.numOfReviews} reviews
          </Rating>
        </Card.Text>
        <Card.Text as='h3'>${item.price.toFixed(2)}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MenuItem
