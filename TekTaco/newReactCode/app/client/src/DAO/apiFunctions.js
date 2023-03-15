export const URL = 'http://localhost:8080/'

const getHeaders = new Headers()
getHeaders.append('Content-Type', 'application/json')

const myInit = {
  method: 'GET',
  headers: getHeaders,
  mode: 'cors',
  cache: 'default',
}
const getReq = new Request(`${URL}api/v1/menuItems`)

export async function fetchMenuItems() {
  try {
    const res = await fetch(getReq, myInit)

    return await res.json()
  } catch (error) {
    return console.log(error)
  }
}

export async function fetchMenuItemById(id) {
  try {
    const response = await fetch(`${URL}api/v1/menuItems/getOne/${id}`, {
      cache: 'force-cache',
    })

    return await response.json()
  } catch (error) {
    return console.log(error)
  }
}
