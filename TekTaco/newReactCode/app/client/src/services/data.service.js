import axios from 'axios'

export const URL = 'http://localhost:8080/api/v1/'

const axiosInstance = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'proxy',
  },
})
const orderAxios = axios.create({
  baseURL: URL,
  withCredentials: true,
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
})

const fetchMenuItems = async () => {
  try {
    return await axiosInstance.get('menuItems').then((res) => {
      return res.data.data
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

const fetchMenuItemBySku = async (sku) => {
  try {
    return await axiosInstance.get(`menuItems/${sku}`).then((res) => {
      return res.data.data
    })
  } catch (error) {
    return console.log(error)
  }
}

const createOrder = async (order) => {
  try {
    return orderAxios.post('order', order).then((res) => {
      return res.data.data
    })
  } catch (e) {
    return console.log(e)
  }
}
const DataService = {
  createOrder,
  fetchMenuItemBySku,
  fetchMenuItems,
}

export default DataService
