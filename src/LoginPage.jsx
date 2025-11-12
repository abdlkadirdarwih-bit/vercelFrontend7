

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    // 'http://localhost:3001/'
    try {
      const res = await axios.post('http://localhost:5173/api/auth/login', {
            // const res = await axios.post(`${backendUrl}/api/auth/login`, {
                  // const res = await axios.post('https://vercel-backend7.vercel.app/api/auth/login', {

        email,
        password,
      });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="containerlogin">
      <form className="form-box" onSubmit={handleLogin}>
        <h2>Login. </h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>
        <p className="link">
          <Link to="/change-password" state={{ email }}>
            Change Password
          </Link>
        </p>

        {msg && <p className="msg">{msg}</p>}
      </form>
    </div>
  );
}
