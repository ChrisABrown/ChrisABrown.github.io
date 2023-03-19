import React from 'react'
import {
  Button,
  Col,
  FormControl,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import Rating from '../components/Rating'

export default function MenuItemDetails({
  menuItem,
  quantity,
  navigate,
  sku,
  setQuantity,
}) {
  const cartURL = `/cart/${sku}?qty=${quantity}`

  const addToCartHandler = () => {
    navigate(`${cartURL}`)
  }

  return (
    <Row>
      <Col md={6}>
        <Image src={menuItem.image} alt={menuItem.name} fluid />
        <ListGroup variant='flush'>
          <ListGroupItem>
            <h3>{menuItem.name}</h3>
          </ListGroupItem>
          <ListGroupItem>
            <Rating
              value={Number(menuItem.rating)}
              text={`${menuItem.numOfReviews} reviews`}
            />
          </ListGroupItem>
          <ListGroupItem>
            <strong>Price:</strong> ${Number(menuItem.price).toFixed(2)}
          </ListGroupItem>
          <ListGroupItem>
            <strong>Description:</strong> {menuItem.description}
          </ListGroupItem>
        </ListGroup>
      </Col>
      <Col md={3}>
        <ListGroup variant='flush'>
          <ListGroupItem>
            <Row>
              <Col>
                <strong>Price:</strong>
              </Col>
              <Col>${Number(menuItem.price).toFixed(2)}</Col>
            </Row>
          </ListGroupItem>
          <ListGroupItem>
            <Row>
              <Col>
                <strong>Status:</strong>
              </Col>
              <Col>{menuItem.inStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
            </Row>
          </ListGroupItem>
          {menuItem.inStock > 0 && (
            <ListGroupItem>
              <Row>
                <Col>
                  <strong>Qty:</strong>
                </Col>
                <Col>
                  <FormControl
                    as='select'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  >
                    {[...Array(menuItem.inStock).keys()].map((b) => (
                      <option key={b + 1} value={b + 1}>
                        {b + 1}
                      </option>
                    ))}
                  </FormControl>
                </Col>
              </Row>
            </ListGroupItem>
          )}
          <ListGroupItem>
            <Row>
              <Button
                onClick={addToCartHandler}
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
  )
}
