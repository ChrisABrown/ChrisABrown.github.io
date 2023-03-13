import React from 'react'
import EmployeeCreate from './EmployeeCreate'
import EmployeeList from './EmployeeList'

const AdminPage = () => {
  return (
    <div className='container'>
      <h1>Admin</h1>
      <EmployeeCreate />
      <hr />
      <h1>Current Employees: </h1>
      <EmployeeList />
    </div>
  )
}

export default AdminPage
