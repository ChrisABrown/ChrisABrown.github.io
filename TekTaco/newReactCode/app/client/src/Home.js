import EmployeeCreate from "./EmployeeCreate";
import EmployeeList from "./EmployeeList";
import NavBar from "./NavBar";

function AdminPage() {
  return (
    <div className="container">
      <NavBar />
      <h1>First Name</h1>
      <EmployeeCreate />
      <hr />
      <h1>Employees</h1>
      <EmployeeList />
    </div>
  );
}

export default AdminPage;
