import axios from 'axios'

export const userURL = ''

const axiosInstance = axios.create({
  baseURL: userURL,
  withCredentials: true,
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': true,
  },
})

const userLogin = async (username, password) => {
  try {
    return await axiosInstance
      .post('login', {
        username,
        password,
      })
      .then((res) => {
        return res.data
      })
  } catch (error) {
    return Promise.reject(error)
  }
}

const userLogout = async () => {
  try {
    return await axiosInstance.post('logout').then((res) => {
      return res.data
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

const userRegister = async (firstName, lastName, email, password) => {
  try {
    return await axiosInstance.post('user', {
      firstName,
      lastName,
      email,
      password,
    })
  } catch (error) {
    return Promise.reject(error)
  }
}

const userDetails = async (username) => {
  const userDetails = `user/${username}/profile`
  try {
    const res = await axiosInstance.get(userDetails)
    console.log(res)
    return res.data.data
  } catch (error) {
    return console.log(error)
  }
}

const newUserDetails = async (username, user) => {
  const userDetails = `user/${username}`

  const { firstName, lastName, email, password } = user
  try {
    const res = await axiosInstance.put(userDetails, {
      firstName,
      lastName,
      email,
      password,
    })

    return res.data.data
  } catch (error) {
    return Promise.reject(error)
  }
}

const AuthService = {
  userRegister,
  userDetails,
  userLogin,
  userLogout,
  newUserDetails,
}
export default AuthService
