import React, { useContext, useState } from "react";
import UserContext from "../Context/UserContext";

function Login() {
  const [Username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const { Setuser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    Setuser({ Username, password });
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <div className="avatar">👤</div>

      <h2 className="heading">Customer Login</h2>
      <p className="subheading">Login to continue</p>

      <div className="input-group">
        <input
          type="text"
          placeholder="Username"
          value={Username}
          onChange={(e) => setusername(e.target.value)}
          required
        />
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="login-btn">
        LOGIN
      </button>
    </form>
  );
}

export default Login;
