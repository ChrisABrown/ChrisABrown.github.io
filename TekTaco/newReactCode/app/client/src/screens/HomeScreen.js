import React from 'react'
import MenuItem from '../components/MenuItem'
import { Row, Col } from 'react-bootstrap'
import Loader from '../components/Loader'
import Message from '../components/Message'

const HomeScreen = ({ loading, error, menuItems }) => {
  return (
    <>
      <h1>Latest Menu Additions</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Row>
          {Object.values(menuItems).map((item) => {
            return (
              <Col sm={12} md={6} lg={4} xl={3} key={item.sku}>
                <MenuItem item={item} />
              </Col>
            )
          })}
        </Row>
      )}
    </>
  )
}

export default HomeScreen
