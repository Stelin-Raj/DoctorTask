import React, {Fragment} from "react";
import './App.css';
import Loginform from "./components/Loginform";
import Registration from "./components/RegisterForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";

function App() {
  return (
<Fragment>

  
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Loginform/>} />
          <Route path="/dashboard" element={<Dashboard />} />
         {/* <Route path="/users/edit/:id" element={<EditUser />} /> */}

        </Routes>
      </BrowserRouter>
</Fragment>
  );
}

export default App;
