import React, { useState, useEffect } from 'react'
import MenuItem from '../components/MenuItem'
import { Row, Col } from 'react-bootstrap'
import { fetchMenuItems } from '../DAO/apiFunctions'

const HomeScreen = () => {
  const [menuItems, setMenuItems] = useState([])

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
              <MenuItem item={item} />
            </Col>
          )
        })}
      </Row>
    </>
  )
}

export default HomeScreen
