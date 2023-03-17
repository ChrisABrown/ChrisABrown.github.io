import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { CartProvider } from './context/CartContext'
import './index.css'
import { fetchMenuItems } from './api/menuItemFunctions.js'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import { listMenuItems } from './actions/listMenuItemsActions.js'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(listMenuItems())
  }, [dispatch])
  const menuItems = []

  const { data } = fetchMenuItems()
  console.log(data)

  return (
    <>
      <CartProvider>
        <Header />
        <main className='py-3'>
          <Container>
            <Routes>
              <Route
                path='/'
                element={
                  <HomeScreen key={menuItems._id} menuItems={menuItems} />
                }
                exact
              />
              <Route
                path='/menuItems/:sku'
                element={<MenuScreen key={menuItems._id} />}
              />
            </Routes>
          </Container>
        </main>
        <Footer />
        <Outlet />
      </CartProvider>
    </>
  )
}
