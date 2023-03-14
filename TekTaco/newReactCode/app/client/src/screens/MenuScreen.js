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
import { fetchMenuItemById } from '../DAO/apiFunctions'

const MenuScreen = () => {
  const [menuItem, setMenuItem] = useState({})
  const { id } = useParams()

  useEffect(() => {
    fetchMenuItemById(id).then((product) => {
      setMenuItem(product.data)
    })
  }, [id])

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
                value={menuItem.rating}
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
