import axios from 'axios'

export const userURL = 'http://localhost:8080/api/v1/admin/'
const token = null

export async function userLogin({ username, password }) {
  try {
    const res = await axios.post(`${userURL}auth-login`, {
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        username,
        password,
      },
    })
    res.data[1] = token

    if (res.status === 200) {
      return res.data
    }
    console.log(res.message)
  } catch (error) {
    return error
  }
}
