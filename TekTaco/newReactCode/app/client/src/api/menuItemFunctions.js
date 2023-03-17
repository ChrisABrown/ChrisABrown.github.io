import axios from 'axios'

export const URL = 'http://localhost:8080/api/v1/menuItems'

export async function fetchMenuItems() {
  try {
    const res = await axios.get(`${URL}`)

    return console.log(res)
  } catch (error) {
    return console.log(error)
  }
}

export async function fetchMenuItemBySku(sku) {
  try {
    const response = await fetch(`${URL}/getOne/${sku}`)

    return await response.json()
  } catch (error) {
    return console.log(error)
  }
}
