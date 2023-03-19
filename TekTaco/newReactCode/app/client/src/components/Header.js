import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import CartIcon from './CartIcon'
const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>
              <img
                src='https://cdn4.iconfinder.com/data/icons/food-delivery-21/64/taco-2-512.png'
                alt='Corn and flour tortilla'
                height={50}
                width={50}
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <CartIcon />
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to='/login'>
                <Nav.Link>
                  <i className='fas fa fa-user'> Login </i>
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
