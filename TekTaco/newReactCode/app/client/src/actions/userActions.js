import axios from "axios"
import { USER_LOGIN_REQUEST } from "../constants/userConstants"

export const login = (username, password) => (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST
    })

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }

    const {data} = await axios.post()
  } catch (error) {
    
  }
}