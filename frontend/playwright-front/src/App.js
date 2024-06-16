import React, { useState } from "react";
import "./App.css";
import {
  Route,
  Routes,
  Link,
  Navigate,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { Home } from "./Home";
import { Login } from "./Login";
import { Logout } from "./Logout";

// Hardcoded users
const users = [
  { username: "user1", password: "password1", name: "User One" },
  { username: "user2", password: "password2", name: "User Two" },
];

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const { username: inputUsername, password } = e.target.elements;

    const user = users.find(
      (u) => u.username === inputUsername.value && u.password === password.value
    );

    if (user) {
      setLoggedIn(true);
      setUsername(user.name);
      setError("");
      navigate("/");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
  };

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {loggedIn ? (
              <li>
                <Link to="/logout" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
      <Routes>
        <Route
          exact
          path="/"
          element={<Home loggedIn={loggedIn} username={username} />}
        />
        <Route
          path="/login"
          element={<Login handleLogin={handleLogin} error={error} />}
        />
        <Route path="/logout" element={<Logout />} />
      </Routes>
    </div>
  );
};

export default App;
