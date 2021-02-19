import React, { useState } from "react";
import Login from "./components/Login";
const App = () => {
  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const login = (details) => {
    console.log(details);
    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      setUser({
        name: details.name,
        email: details.email,
      });
      console.log("LoggedIn");
    } else {
      console.log("Check USerName or password");
      setError("Check Username or password");
    }
  };
  const Logout = () => {
    console.log("Logout");
    setUser({
      name: "",
      email: "",
    });
  };
  return (
    <div className="App">
      {user.email != "" ? (
        <div className="welcome">
          <h2>
            welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <Login login={login} error={error} />
      )}
    </div>
  );
};

export default App;
