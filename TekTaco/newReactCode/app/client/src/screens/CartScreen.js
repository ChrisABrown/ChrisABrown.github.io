import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Message from '../components/Message'
import { Row, Col, ListGroup, Button, Image, Form, Card } from 'react-bootstrap'
import { addToCart } from '../actions/cartActions'
import { useDispatch, useSelector } from 'react-redux'

const CartScreen = ({ location, sku, navigate }) => {
  const [searchParams] = location
  const qty = searchParams.get('qty')
  const dispatch = useDispatch()

  useEffect(() => {
    if (sku) {
      dispatch(addToCart(sku, qty))
    }
  }, [dispatch, sku, qty])
  return <div>Cart</div>
}

export default CartScreen
