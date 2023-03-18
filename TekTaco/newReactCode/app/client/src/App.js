import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import { Outlet, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { CartProvider } from './context/CartContext'
import './index.css'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import CartScreen from './screens/CartScreen'
import { listMenuItems } from './actions/listMenuItemsActions.js'

export default function App() {
  const dispatch = useDispatch()

  const menuItemList = useSelector((state) => state.menuItemList)
  const { loading, error, menuItems } = menuItemList

  useEffect(() => {
    dispatch(listMenuItems())
  }, [dispatch])

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
                  <HomeScreen
                    key={menuItems.sku}
                    menuItems={menuItems}
                    loading={loading}
                    error={error}
                  />
                }
                exact
              />
              <Route path='/menuItems/:sku' element={<MenuScreen />} />
              <Route path='/cart/:sku?' element={<CartScreen />} />
            </Routes>
          </Container>
        </main>
        <Footer />
        <Outlet />
      </CartProvider>
    </>
  )
}
