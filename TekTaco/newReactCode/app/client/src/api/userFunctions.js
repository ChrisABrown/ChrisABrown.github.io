import axios from 'axios'

export const userURL = 'http://localhost:8080/api/v1/admin/'

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
    return await res.data.data
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
}
