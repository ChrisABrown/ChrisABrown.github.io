import React, { useState, useEffect } from 'react'
import Product from '../components/Product'
import { Row, Col } from 'react-bootstrap'

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState([])
  const fetchMenuItems = async () => {
    const URL = 'http://localhost:8080/'
    try {
      const response = await fetch(`${URL}menuItems`, {})

      return await response.json()
    } catch (error) {
      return console.log(error)
    }
  }

  useEffect(() => {
    fetchMenuItems().then((items) => {
      setMenuItems(items.data)
    })
  }, [])

  return (
    <>
      <h1>Latest Menu Additions</h1>
      <Row>
        {Object.values(menuItems).map((item) => {
          return (
            <Col sm={12} md={6} lg={4} xl={3} key={item._id}>
              <Product item={item} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
