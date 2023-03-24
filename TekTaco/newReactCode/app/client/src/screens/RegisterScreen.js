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
import { register } from '../actions/userActions'
import FormContainer from '../components/FormContainer'
import Loader from '../components/Loader'
import Message from '../components/Message'

const RegisterScreen = ({ navigate, location }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const searchParams = location
  const userRegister = useSelector((state) => state.userRegister)

  const registrar = searchParams.search
    ? searchParams.search.split('=')[1]
    : '/'

  const { loading, userInfo, error } = userRegister

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(register(firstName, lastName, email, password))
    }
  }

  useEffect(() => {
    if (userInfo) {
      navigate(registrar)
    }
  }, [userInfo, registrar, navigate])

  return (
    <FormContainer>
      <h1>Register New User</h1>
      {/* TODO: cannot be blank */}
      {error && <Message variant='danger'>Cannot be blank</Message>}{' '}
      {message && <Message variant='danger'>{message}</Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
        <FormGroup controlId='firstName'>
          <FormLabel>First Name</FormLabel>
          <FormControl
            type='firstName'
            placeholder='Enter your first name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId='lastName'>
          <FormLabel>Last Name</FormLabel>
          <FormControl
            type='lastName'
            placeholder='Enter your last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </FormGroup>
        <FormGroup controlId='email'>
          <FormLabel>Email</FormLabel>
          <FormControl
            type='email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId='password'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId='confirmPassword'>
          <FormLabel>Password</FormLabel>
          <FormControl
            type='password'
            placeholder='Confirm password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </FormGroup>

        <Button type='submit' variant='primary'>
          Register
        </Button>
      </Form>
      <Row className='py-3'>
        <Col>
          Already have an account?{' '}
          <Link
            to={registrar ? `/login?redirect=${registrar}` : '/login'}
            style={{ color: '#6fa8dc' }}
          >
            Login
          </Link>
        </Col>
      </Row>
    </FormContainer>
  )
}

export default RegisterScreen
