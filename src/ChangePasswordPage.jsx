



import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import   "./ChangePasswordPage.css";

export default function ChangePasswordPage() {
    const [email, setEmail] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log({ oldPassword, newPassword, confirm });
  // };

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
<div className="change-container">
  <form className="change-form" onSubmit={handleChangePassword}>
    <h2>Change Password</h2>

 <div className="input-group">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
    </div>
    <div className="input-group">
      <input
        type={showOld ? "text" : "password"}
        placeholder="Old Password"
        value={oldPassword}
        onChange={(e) => setOldPassword(e.target.value)}
        required
      />
      <span className="toggle-icon" onClick={() => setShowOld(!showOld)}>
        {showOld ? <EyeOff size={20} /> : <Eye size={20} />}
      </span>
    </div>

    <div className="input-group">
      <input
        type={showNew ? "text" : "password"}
        placeholder="New Password"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
        required
      />
      <span className="toggle-icon" onClick={() => setShowNew(!showNew)}>
        {showNew ? <EyeOff size={20} /> : <Eye size={20} />}
      </span>
    </div>

    <div className="input-group">
      <input
        type={showConfirm ? "text" : "password"}
        placeholder="Confirm Password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        required
      />
      <span className="toggle-icon" onClick={() => setShowConfirm(!showConfirm)}>
        {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
      </span>
    </div>

    <button type="submit">Update Password</button>
  </form>
</div>

  );
}







// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, Link } from "react-router-dom";
// import { Eye, EyeOff } from "lucide-react"; // 👈 install this icon library

// export default function ChangePasswordPage() {
//   const location = useLocation();
//   const emailFromLogin = location.state?.email || "";
//   const [email, setEmail] = useState(emailFromLogin);
//       const [oldPassword, setOldPassword] = useState("");  // 🆕 added
//   const [newPassword, setNewPassword] = useState("");
//   const [confirm, setConfirm] = useState("");
//   const [msg, setMsg] = useState("");
//       const [showPassword, setShowPassword] = useState(false); // 👈 for toggle
//  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  // const handleChangePassword = async (e) => {
  //   e.preventDefault();
  //   setMsg("");

  //   if (newPassword !== confirm) {
  //     setMsg("Passwords do not match");
  //     return;
  //   }

  //   try {
  //     const res = await axios.post(`${backendUrl}/api/auth/change-password`,  {
  //                   // const res = await axios.post('http://localhost:3001/api/auth/change-password', {

  //       email,
  //      oldPassword,
  //       newPassword,
  //     });
  //     setMsg(res.data.message);
  //   } catch (err) {
  //     setMsg(err.response?.data?.message || "Error updating password");
  //   }
  // };

//   return (
//     <div className="container">
//       <form className="form-box" onSubmit={handleChangePassword}>
//         <h2>Change Password</h2>
//         <input
//           type="email"
//           placeholder="Enter Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Old Password"
//           value={oldPassword}
//           onChange={(e) => setOldPassword(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="New Password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />

//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={confirm}
//           onChange={(e) => setConfirm(e.target.value)}
//           required
//         />

//         <button type="submit">Update Password</button>
//         <p className="link">
//           <Link to="/">Back to Login</Link>
//         </p>

//         {msg && <p className="msg">{msg}</p>}
//       </form>
//     </div>
//   );
// }
