import { Switch, Route, Link } from "react-router-dom";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Movie } from "./components/Movies";
import { MoviesList } from "./components/MoviesList";
import { Login } from "./components/Login";
import AddReview from "./components/AddReview";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function App() {
  const [user, setUser] = useState(null);

  async function login(user = null) {
    setUser(user);
  }
  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <style type="text/css">
        {`
        .link{
          color: white !important;
          text-decoration: none;
        }
        `}
      </style>
      <Navbar bg="primary" variant="light">
        <Container>
          <Navbar.Brand href="/" className="link">
            Movie Reviews
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>
              <Link to={"/movies"} className="link">
                Movies
              </Link>
            </Nav.Link>
            <Nav.Link variant="flat">
              {user ? (
                <a onClick={logout}>Logout User</a>
              ) : (
                <Link to={"/login"} className="link">
                  Login
                </Link>
              )}
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Switch>
        <Route exact path={["/", "/movies"]} component={MoviesList}></Route>
        <Route
          path="/movies/:id/review"
          render={(props) => <AddReview {...props} user={user} />}
        ></Route>
        <Route
          path="/movies/:id/"
          render={(props) => <Movie {...props} user={user} />}
        ></Route>
        <Route
          path="/login"
          render={(props) => <Login {...props} login={login} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
