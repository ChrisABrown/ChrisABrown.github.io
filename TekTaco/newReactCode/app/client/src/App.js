import EmployeeCreate from "./EmployeeCreate";
import EmployeeList from "./EmployeeList";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="container">
      <NavBar />
      <h1>Create Review</h1>
      <EmployeeCreate />
      <hr />
      <h1>Employees</h1>
      <EmployeeList />
    </div>
  );
}

export default App;
