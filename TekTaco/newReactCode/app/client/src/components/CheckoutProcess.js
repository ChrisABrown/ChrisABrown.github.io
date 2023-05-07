import React from 'react'
import { Nav, NavItem, NavLink } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const CheckoutProcess = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className='justify-content-center mb-4'>
      <NavItem>
        {step1 ? (
          <LinkContainer to='/login'>
            <NavLink>Sign In</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Sign In</NavLink>
        )}
      </NavItem>
      <NavItem>
        {step2 ? (
          <LinkContainer to='/shipping'>
            <NavLink>Pickup or Delivery</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Pickup or Delivery</NavLink>
        )}
      </NavItem>{' '}
      <NavItem>
        {step3 ? (
          <LinkContainer to='/payment'>
            <NavLink>Payment</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Payment</NavLink>
        )}
      </NavItem>{' '}
      <NavItem>
        {step4 ? (
          <LinkContainer to='/submit-order'>
            <NavLink>Submit Order</NavLink>
          </LinkContainer>
        ) : (
          <NavLink disabled>Submit Order</NavLink>
        )}
      </NavItem>
    </Nav>
  )
}

export default CheckoutProcess