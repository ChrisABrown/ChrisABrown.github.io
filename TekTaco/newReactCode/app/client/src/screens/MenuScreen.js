import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { listMenuItemDetails } from '../actions/menuItemActions'
import Loader from '../components/Loader'
import MenuItemDetails from '../components/MenuItemDetails'
import Message from '../components/Message'

const MenuScreen = ({ navigate }) => {
  const [quantity, setQuantity] = useState(1)

  const dispatch = useDispatch()
  const { sku } = useParams()

  const menuItemDetails = useSelector((state) => state.menuItemDetails)

  const { loading, error, menuItem } = menuItemDetails

  useEffect(() => {
    dispatch(listMenuItemDetails(sku))
  }, [dispatch, sku])

  return (
    <>
      <Button className='btn btn-light my-3' onClick={() => navigate('/')}>
        Go Back
      </Button>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <MenuItemDetails
          key={sku}
          sku={sku}
          navigate={navigate}
          menuItem={menuItem}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      )}
    </>
  )
}

export default MenuScreen
