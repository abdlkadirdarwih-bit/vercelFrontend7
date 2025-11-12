

import React, { useState } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";

export default function ChangePasswordPage() {
  const location = useLocation();
  const emailFromLogin = location.state?.email || "";
  const [email, setEmail] = useState(emailFromLogin);
      const [oldPassword, setOldPassword] = useState("");  // 🆕 added
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [msg, setMsg] = useState("");
 const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setMsg("");

    if (newPassword !== confirm) {
      setMsg("Passwords do not match");
      return;
    }

    try {
      const res = await axios.post(`${backendUrl}/api/auth/change-password`,  {
                    // const res = await axios.post('http://localhost:3001/api/auth/change-password', {

        email,
       oldPassword,
        newPassword,
      });
      setMsg(res.data.message);
    } catch (err) {
      setMsg(err.response?.data?.message || "Error updating password");
    }
  };

  return (
    <div className="container">
      <form className="form-box" onSubmit={handleChangePassword}>
        <h2>Change Password</h2>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Old Password"
          value={oldPassword}
          onChange={(e) => setOldPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Confirm Password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          required
        />

        <button type="submit">Update Password</button>
        <p className="link">
          <Link to="/">Back to Login</Link>
        </p>

        {msg && <p className="msg">{msg}</p>}
      </form>
    </div>
  );
}
