import React from 'react'
import MenuItemList from './MenuItemList'
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.css'

const Home = () => {
  return (
    <>
      <Header />
      <main className='py-3'>
        <Container>
          <h1>Welcome to TekTacos!</h1>
          <MenuItemList />
        </Container>
      </main>
      <Footer />
    </>
  )
}

export default Home
