const axios = require('axios')
const express = require('express')
const cors = require('cors')
// const mongoose = require("mongoose");
const { randomBytes } = require('crypto')

const app = express()

app.use(express.json())
app.use(cors())

const menuItems = {}

app.get('api/v1/menuItems/get', (req, res) => {
  res.send(menuItems)
})

app.post('api/v1/menuItems/add-new-menuItem', async (req, res) => {
  const sku = randomBytes(4).toString('hex')

  const { menuItem } = req.body

  menuItems[sku] = {
    menuItem: {
      sku,
      name: menuItem['name'],
      price: parseInt(menuItem['price']),
      image: menuItem['image'],
      numberInStock: parseInt(menuItem['inStock']),
      productType: menuItem['productType'],
      description: menuItem['description'],
      rating: menuItem['rating'],
      numberOfReviews: menuItem['numOfReviews'],
    },
  }

  await axios
    .post('http://localhost:8080/api/v1/menuItems/add-new-menuItem', {
      type: 'MenuItemCreated',
      data: {
        sku,
        menuItem,
      },
    })
    .catch((err) => console.error(err))

  res.status(201).send(menuItems[sku])
})

app.listen(4004, () => {
  console.log('listening on 4004 - MenuItems')
})
