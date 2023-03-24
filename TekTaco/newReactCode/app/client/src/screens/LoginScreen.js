import React, { useEffect, useState } from 'react'
import {
  Button,
  Col,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { login } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'

const LoginScreen = ({ navigate, location }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const searchParams = location

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)

  const registrar = searchParams.search
    ? searchParams.search.split('=')[1]
    : '/'

  const { loading, userInfo, error } = userLogin

  useEffect(() => {
    if (userInfo) {
      navigate(registrar)
    }
  }, [userInfo, registrar, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login(username, password))
  }
  return (
    <FormContainer>
      <h1>Sign In</h1>
      {error && (
        <Message variant='danger'>Invalid Username or Password</Message>
      )}
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
            to={registrar ? `/register?redirect=${registrar}` : '/register'}
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
