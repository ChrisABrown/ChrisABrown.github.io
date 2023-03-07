import EmployeeCreate from "./EmployeeCreate";
import EmployeeList from "./EmployeeList";
import NavBar from "./NavBar";

export default function AdminPage() {
  return (
    <div className="container">
      <NavBar />
      <h1>Admin</h1>
      <EmployeeCreate />
      <hr />
      <h1>Current Employees: </h1>
      <EmployeeList />
    </div>
  );
}
