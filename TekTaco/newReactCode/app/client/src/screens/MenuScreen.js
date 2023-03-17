import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
import { fetchMenuItemBySku } from '../api/menuItemFunctions'

const MenuScreen = () => {
  const [menuItem, setMenuItem] = useState({})
  const { sku } = useParams()

  useEffect(() => {
    fetchMenuItemBySku(sku).then((product) => {
      setMenuItem(product.data)
    })
  }, [sku])

  return (
    <div key={menuItem._id}>
      <Link className='btn btn-light my-3'> Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={menuItem.image} alt={menuItem.name} fluid />
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h3>{menuItem.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <Rating
                value={parseInt(menuItem.rating)}
                text={`${menuItem.numOfReviews} reviews`}
              />
            </ListGroupItem>
            <ListGroupItem>Price: ${menuItem.price}</ListGroupItem>
            <ListGroupItem>Description: {menuItem.description}</ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <Row>
                <Col>Price:</Col>
                <Col>{menuItem.price}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Col>Status:</Col>
                <Col>{menuItem.inStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
              </Row>
            </ListGroupItem>
            <ListGroupItem>
              <Row>
                <Button
                  className='btn-block'
                  type='button'
                  disabled={menuItem.inStock === 0}
                >
                  Add to Cart
                </Button>
              </Row>
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    </div>
  )
}

export default MenuScreen
