
//mandatory  إلزامي    ماندَتاري 
//Pending  قيد الانتظار   باندينغ

// https://vercel-frontend-alpha-dun.vercel.app/
// https://vercel-backend-265q.vercel.app/
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import ChangePasswordPage from "./ChangePasswordPage";
import RegisterPage from "./RegisterPage";

function App() {

  return (
    <>

<div className='page'>
       <div className="contacts-table-messages-wrapper">
  <table className="contacts-table-messages">
    {/* <thead className="thead-messages">
      <tr className="tr-messages">
        <th className="thead-messages-th">#</th>
        <th className="thead-messages-th">Full Name</th>
        <th className="thead-messages-th">Email / Phone</th>
        <th className="thead-messages-th">Title</th>
        <th className="thead-messages-th">Notes</th>
      </tr>
    </thead> */}
    <tbody>
      {/* {contacts.map((c, idx) => (
        <tr key={idx} className="tr-messages">
          <td>{idx + 1}</td>
          <td>{c.fullname}</td>
          <td>{c.phonenumber}</td>
          <td>{c.titlename}</td>
          <td>{c.additionalnotes}</td>
        </tr>
      ))} */}
    </tbody>
  </table>
</div>
</div>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
                <Route path="/register" element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
