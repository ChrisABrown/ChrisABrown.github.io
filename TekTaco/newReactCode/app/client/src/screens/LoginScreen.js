import React, { useState, useEffect } from 'react'
import { Link, redirect } from 'react-router-dom'
import {
  Button,
  Row,
  Col,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'

const LoginScreen = ({ location }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const [searchParams] = location
  const registrar = searchParams ? searchParams[1] : '/'

  const { loading, userInfo, error } = userLogin

  const submitHandler = (e) => {
    e.prevent.default()
    dispatch(login(username, password))
  }

  useEffect(() => {
    if (userInfo) {
      redirect(registrar)
    }
  }, [userInfo, registrar])

  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && <Message variant='danger'>{error}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='username'>
          <FormLabel>Username</FormLabel>
          <FormControl
            type='username'
            placeholder='Enter username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          ></FormControl>
        </FormGroup>
        <FormGroup controlId='password'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></FormControl>
        </FormGroup>
        <Button type='submit' variant='primary'>
          Sign In
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          New User?{' '}
          <Link
            to={registrar ? `register?redirect=${registrar}` : '/register'}
            style={{ color: '#6fa8dc' }}
          >
            Click here to Register
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default LoginScreen
