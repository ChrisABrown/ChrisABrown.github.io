import axios from 'axios'

export const URL = 'http://localhost:8080/api/v1/menuItems'

export async function fetchMenuItems() {
  try {
    const res = await axios.get(`${URL}`)
    if (res.data.status !== 200) {
      throw new Error('Something went wrong')
    }
    return res
  } catch (error) {
    return error
  }
}

export async function fetchMenuItemBySku(sku) {
  try {
    const res = await axios.get(`${URL}/${sku}`)
    if (res.data.status === 302) {
      return res
    }
  } catch (error) {
    return error
  }
}
