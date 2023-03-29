import React, { useEffect } from 'react'
import {
  Button,
  Card,
  Col,
  Image,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { createOrder } from '../actions/orderActions'
import CheckoutProcess from '../components/CheckoutProcess'
import Message from '../components/Message'

const SubmitOrderScreen = ({ navigate }) => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart)
  const orderCreate = useSelector((state) => state.orderCreate)
  const { order, success, error } = orderCreate

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  cart.itemsPrice = cart.cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  cart.deliveryCharge = (cart.itemsPrice < 25 ? 5 : 0).toFixed(2)

  cart.taxPrice = Number((0.0825 * cart.itemsPrice).toFixed(2))
  cart.totalPrice =
    Number(cart.itemsPrice) +
    Number(cart.deliveryCharge) +
    Number(cart.taxPrice)

  const submitOrderHandler = () => {
    dispatch(
      createOrder({
        user: userInfo.username,
        orderedItems: cart.cartItems,
        deliveryAddress: cart.deliveryAddress,
        paymentMethod: cart.paymentMethod,
        price: cart.itemsPrice,
        deliveryCharge: cart.deliveryCharge,
        taxPrice: cart.taxPrice,
        totalPrice: cart.totalPrice,
      })
    )
  }

  useEffect(() => {
    if (success) {
      navigate(`/order/${order.orderId}`)
    }
    // eslint-disable-next-line
  }, [success, navigate])

  return (
    <>
      <CheckoutProcess step1 step2 step3 step4 />

      <Row>
        <Col md={8}>
          <ListGroup variant='flush'>
            <ListGroupItem>
              <h2>Shipping</h2>
              <p>
                <strong>Address: </strong>
                {cart.deliveryAddress.address}, {cart.deliveryAddress.city}{' '}
                {cart.deliveryAddress.state}, {cart.deliveryAddress.ZIPCode}
              </p>
            </ListGroupItem>

            <ListGroupItem>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {cart.paymentMethod}
              </p>
            </ListGroupItem>

            <ListGroupItem>
              <h2>Ordered Items</h2>
              <>
                {cart.cartItems.length === 0 ? (
                  <Message> Your cart is Empty</Message>
                ) : (
                  <ListGroup variant='flush'>
                    {cart.cartItems.map((item, index) => (
                      <ListGroupItem key={index}>
                        <Row>
                          <Col md={1}>
                            <Link to={`/menuItems/${item.menuItem}`}>
                              <Image
                                src={item.image}
                                alt={item.name}
                                fluid
                                rounded
                              />
                            </Link>
                          </Col>
                          <Col>{item.name}</Col>
                          <Col md={4}>
                            {item.quantity} x ${item.price.toFixed(2)} = $
                            {(item.quantity * item.price).toFixed(2)}
                          </Col>
                        </Row>
                      </ListGroupItem>
                    ))}
                  </ListGroup>
                )}
              </>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroupItem>
                <h2>Order Summary</h2>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Menu Items</Col>
                  <Col>${Number(cart.itemsPrice).toFixed(2)}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Delivery</Col>
                  <Col>${cart.deliveryCharge}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Tax</Col>
                  <Col>${cart.taxPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                <Row>
                  <Col>Total</Col>
                  <Col>${cart.totalPrice}</Col>
                </Row>
              </ListGroupItem>
              <ListGroupItem>
                {error && <Message variant='danger'>{error}</Message>}
              </ListGroupItem>
              <ListGroupItem>
                <Button
                  type='button'
                  className='btn-block'
                  disabled={cart.cartItems === 0}
                  onClick={submitOrderHandler}
                >
                  Submit Order
                </Button>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default SubmitOrderScreen
