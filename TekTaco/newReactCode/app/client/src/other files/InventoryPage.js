import React from 'react'
import InventoryList from './InventoryList'
import MenuItemCreate from './MenuItemCreate'

const InventoryPage = () => {
  return (
    <div className='container'>
      <h1>Inventory</h1>
      <MenuItemCreate />
      <hr />
      <h1>Current MenuItems: </h1>
      <InventoryList />
    </div>
  )
}

export default InventoryPage
