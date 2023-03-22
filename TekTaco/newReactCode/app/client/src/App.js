import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom'
import { listMenuItems } from './actions/menuItemActions.js'
import Footer from './components/Footer'
import Header from './components/Header'
import './index.css'
import CartScreen from './screens/CartScreen'
import HomeScreen from './screens/HomeScreen'
import MenuScreen from './screens/MenuScreen'
import LoginScreen from './screens/LoginScreen.js'

export default function App() {
  const location = useSearchParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const menuItemList = useSelector((state) => state.menuItemList)
  const { loading, error, menuItems } = menuItemList

  useEffect(() => {
    dispatch(listMenuItems())
  }, [dispatch])

  const { sku } = useParams()

  return (
    <>
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
            />
            <Route
              path='/menuItems/:sku'
              element={<MenuScreen navigate={navigate} />}
            />
            <Route
              path='/cart/:sku?'
              element={
                <CartScreen sku={sku} navigate={navigate} location={location} />
              }
            />
            <Route
              path='/login'
              element={<LoginScreen location={location} />}
            />
          </Routes>
        </Container>
      </main>
      <Footer />
      <Outlet />
    </>
  )
}
