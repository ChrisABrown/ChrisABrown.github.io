import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  Outlet,
  Route,
  Routes,
  useNavigate,
  useSearchParams,
} from 'react-router-dom'
import { listMenuItems } from './actions/menuItemActions.js'
import Footer from './components/Footer'
import Header from './components/Header'
import { CartProvider } from './context/CartContext'
import './index.css'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'

export default function App() {
  const location = useSearchParams()
  const navigate = useNavigate()
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
              <Route
                path='/menuItems/:sku'
                element={<MenuScreen navigate={navigate} location={location} />}
              />
              <Route
                path='/cart/:sku?'
                element={<CartScreen navigate={navigate} location={location} />}
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
