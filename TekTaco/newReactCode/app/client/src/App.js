import React from 'react'
import { Container } from 'react-bootstrap'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomeScreen />} exact />
            <Route path='/menuItems/get/:id' element={<MenuScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
