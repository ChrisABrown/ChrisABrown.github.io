import React, { useState } from 'react'
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { saveDeliveryAddress } from '../actions/cartActions'
import CheckoutProcess from '../components/CheckoutProcess'
import FormContainer from '../components/FormContainer'

const DeliveryScreen = ({ navigate }) => {
  const cart = useSelector((state) => state.cart)
  const { deliveryAddress } = cart

  const [address, setAddress] = useState(deliveryAddress.address)
  const [city, setCity] = useState(deliveryAddress.city)
  const [state, setState] = useState(deliveryAddress.state)
  const [ZIPCode, setZIPCode] = useState(deliveryAddress.ZIPCode)

  const dispatch = useDispatch()

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(saveDeliveryAddress({ address, city, state, ZIPCode }))
    navigate('/payment')
  }

  return (
    <FormContainer>
      <CheckoutProcess step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='address'>
          <FormLabel>Address</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter Address'
            value={address}
            required
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='city'>
          <FormLabel>City</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter City'
            value={city}
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='state'>
          <FormLabel>State</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter State'
            value={state}
            required
            onChange={(e) => setState(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='ZIPCode'>
          <FormLabel>ZIP Code</FormLabel>
          <FormControl
            type='text'
            placeholder='Enter ZIP Code'
            value={ZIPCode}
            required
            onChange={(e) => setZIPCode(e.target.value)}
          />
        </FormGroup>
        <Button type='submit' variant='primary'>
          Continue
        </Button>
      </Form>
    </FormContainer>
  )
}

export default DeliveryScreen

// {
//   "user": {
//     "firstName": "James",
//     "lastName": "Johnson",
//     "email": "johnson@johnson.com"
//   },
//   "orderedItems": [],
//   "shipping address": {
//     "street address": "130 Maple lane",
//     "city": "New York",
//     "state": "TX",
//     "zip-code": 73028
//   },
//   "paymentMethod": "Paypal",
//   "paymentResult": "Success",
//   "isPaid": true,
//   "deliveryCharge": 4,
//   "isDelivered": true
// }
