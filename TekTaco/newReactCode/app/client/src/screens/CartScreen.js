import React, { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import Message from '../components/Message'
import {
  Row,
  Col,
  ListGroup,
  Button,
  Image,
  Form,
  Card,
  ListGroupItem,
} from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

const CartScreen = ({ location, navigate }) => {
  const [searchParams] = location
  const qty = searchParams.get('qty')
  const dispatch = useDispatch()
  const { sku } = useParams()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  useEffect(() => {
    if (sku) {
      dispatch(addToCart(sku, qty))
    }
  }, [dispatch, sku, qty])

  const removeFromCartHandler = (sku) => {
    dispatch(removeFromCart(sku))
  }

  const checkoutHandler = () => {
    function isLoggedIn() {
      if (userInfo === null) {
        return false
      } else {
        return true
      }
    }
    if (isLoggedIn()) {
      navigate('/shipping')
    } else {
      navigate('/login')
    }
  }
  return (
    <Row>
      <Col md={8}>
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Message>
            {' '}
            Your cart is empty <Link to='/'>Return</Link>
          </Message>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item key={item.menuItem}>
                <Row>
                  <Col md={3}>
                    <Link to={`/menuItems/${item.menuItem}`}>
                      <Image src={item.image} alt={item.name} fluid rounded />
                      {item.name}
                    </Link>
                  </Col>
                  <Col md={2}>${Number(item.price).toFixed(2)}</Col>
                  <Col md={2}>
                    <Form.Select
                      value={item.quantity}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.menuItem, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.inStock).keys()].map((b) => (
                        <option key={b + 1} value={b + 1}>
                          {b + 1}
                        </option>
                      ))}
                    </Form.Select>
                  </Col>
                  <Col md={2}>
                    <Button
                      type='button'
                      variant='light'
                      onClick={() => removeFromCartHandler(item.menuItem)}
                    >
                      Remove
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>
                Subtotal (
                {cartItems.reduce(
                  (acc, item) => acc + Number(item.quantity),
                  0
                )}
                ) items
              </h2>
              $
              {cartItems
                .reduce(
                  (acc, item) => acc + Number(item.quantity * item.price),
                  0
                )
                .toFixed(2)}
            </ListGroupItem>
            <ListGroupItem>
              <Button
                type='button'
                className='btn-block'
                disabled={cartItems.length === 0}
                onClick={checkoutHandler}
              >
                Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
      <Col md={2}></Col>
    </Row>
  )
}

export default CartScreen
