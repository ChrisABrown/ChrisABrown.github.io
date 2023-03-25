import axios from 'axios'

export const userURL = 'http://localhost:8080/api/v1/admin/'

// const axiosInstance = axios.create({})

export async function userLogin(username, password) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post(
      `${userURL}login`,
      { username, password },
      config
    )
    console.log(res.data)
    return await res.data
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}

export async function userRegister(firstName, lastName, email, password) {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  try {
    const res = await axios.post(
      `${userURL}user`,
      { firstName, lastName, email, password },
      config
    )
    return await res.data.data
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
