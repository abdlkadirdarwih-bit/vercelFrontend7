

import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react"; // 👈 install this icon library

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
    const [showPassword, setShowPassword] = useState(false); // 👈 for toggle

  const navigate = useNavigate();
const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleLogin = async (e) => {
    e.preventDefault();
    setMsg("");
    // 'http://localhost:3001/'
    try {
      // const res = await axios.post('http://localhost:5000/api/auth/login', {
            const res = await axios.post(`${backendUrl}/api/auth/login`, {
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
        <h2>Login7bb </h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        {/* <input
                    type={showPassword ? "text" : "password"} // 👈 toggle type
          // type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> */}

<div className="password-container">
          <input
            type={showPassword ? "text" : "password"} // 👈 toggle type
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {/* 👇 Icon button */}
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </span>
        </div>


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
