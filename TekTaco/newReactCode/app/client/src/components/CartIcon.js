import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import { CartContext } from '../context/CartContext'

function CartIcon() {
  const { cart } = useContext(CartContext)

  return (
    <Container position='relative'>
      <i className='fas fa-shopping-cart' />
      {cart.length > 0 && (
        <Container position='absolute' top={0} right={0}>
          <p>{cart.length}</p>
        </Container>
      )}
    </Container>
  )
}

export default CartIcon
