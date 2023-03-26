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
import { getUserDetails, updateUserProfile } from '../actions/userActions'
import Loader from '../components/Loader'
import Message from '../components/Message'

const ProfileScreen = ({ navigate }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userDetails = useSelector((state) => state.userDetails)
  const { loading, user, error } = userDetails

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile)
  const { success } = userUpdateProfile

  useEffect(() => {
    if (!userInfo) {
      navigate('/login')
    } else {
      if (!user.username) {
        dispatch(getUserDetails('/profile'))
      } else {
        setFirstName(user.firstName)
        setLastName(user.lastName)
        setEmail(user.email)
      }
    }
  }, [userInfo, user, dispatch, navigate])

  const submitHandler = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      setMessage('Passwords do not match')
    } else {
      dispatch(
        updateUserProfile(user.username, {
          firstName,
          lastName,
          email,
          password: `${user.password}`,
        })
      )
    }
  }

  return (
    <Row>
      <Col md={3}>
        <h2>User Profile</h2>
        {message && <Message variant='danger'>{message}</Message>}
        {error && <Message variant='danger'>{error}</Message>}{' '}
        {success && <Message variant='success'>{success}</Message>}
        {loading && <Loader />}
        <Form onSubmit={submitHandler}>
          <FormGroup controlId='firstName'>
            <FormLabel>First Name</FormLabel>
            <FormControl
              type='firstName'
              placeholder='Enter your first name'
              value={firstName}
              onInput={(e) => setFirstName(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId='lastName'>
            <FormLabel>Last Name</FormLabel>
            <FormControl
              type='lastName'
              placeholder='Enter your last name'
              value={lastName}
              onInput={(e) => setLastName(e.target.value)}
            />
          </FormGroup>
          <FormGroup controlId='email'>
            <FormLabel>Email</FormLabel>
            <FormControl
              type='email'
              placeholder='Enter your email'
              value={email}
              onInput={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId='password'>
            <FormLabel>Password</FormLabel>
            <FormControl
              type='password'
              placeholder='Enter password'
              value={password}
              onInput={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup controlId='confirmPassword'>
            <FormLabel>Confirm your Password</FormLabel>
            <FormControl
              type='password'
              placeholder='Confirm password'
              value={confirmPassword}
              onInput={(e) => setConfirmPassword(e.target.value)}
            />
          </FormGroup>

          <Button type='submit' variant='primary'>
            Update
          </Button>
        </Form>
      </Col>
      <Col md={9}>
        <h2>My Orders</h2>
      </Col>
    </Row>
  )
}

export default ProfileScreen
