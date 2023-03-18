import React, { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
import { listMenuItemDetails } from '../actions/listMenuItemsActions'
import Loader from '../components/Loader'
import MenuItemDetails from '../components/MenuItemDetails'
import Message from '../components/Message'

const MenuScreen = ({ history }) => {
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()
  const { sku } = useParams()
  const menuItemDetails = useSelector((state) => state.menuItemDetails)

  const { loading, error, menuItem } = menuItemDetails

  useEffect(() => {
    dispatch(listMenuItemDetails(sku))
  }, [dispatch, sku])

  const addToCartHandler = () => {
    history.push(`/cart/${sku}?qty=${quantity}`)
  }

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        {' '}
        Go Back
      </Link>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <MenuItemDetails
          key={sku}
          menuItem={menuItem}
          quantity={quantity}
          setQuantity={setQuantity}
          addToCartHandler={addToCartHandler}
        />
      )}
    </>
  )
}

export default MenuScreen
