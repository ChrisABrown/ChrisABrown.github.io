import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const MenuItem = ({ item }) => {
  const menuItemURL = `/menuItems/${item.sku}`

  return (
    <Card className='my-3 py-3 rounded'>
      <Card.Body>
        <Link to={menuItemURL}>
          <Card.Img src={item.image} height={300} />
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
            {item.rating} {item.numOfReviews}
          </Rating>
        </Card.Text>
        <Card.Text as='h3'>${item.price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default MenuItem
