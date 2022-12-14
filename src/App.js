import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/baseStyles.js";
import LandingHome from "./pages/landing/Landing";
import ScanLoading from "./pages/mahasiswa/ScanLoading";
import Scanning from "./pages/mahasiswa/Scanning";
import Dashboard from "./pages/admin/Dashboard";
import Absensi from "./pages/admin/absensi/Absensi.jsx";
import Profile from "./pages/mahasiswa/profile/Profile";
import Login from "./pages/mahasiswa/login/Login";
import LoginAdmin from "./pages/admin/login/Login";
import Scanner from "./pages/mahasiswa/scanner/Scanner";
import "./styles/baseStyles.js";
import Buku from "./pages/admin/buku/Buku.jsx";
// import AbsenList from "./pages/admin/AbsenList";


const App = () => {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/" element={<LandingHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginAdmin" element={<LoginAdmin />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/scanner" element={<Scanner />} />
          <Route path="/scanning" element={<Scanning />} />
          <Route path="/scanload" element={<ScanLoading />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/absensi" element={<Absensi />} />
          <Route path='/buku' element={< Buku />} />
          {/* <Route path='/absenlist' element={<AbsenList />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default App;