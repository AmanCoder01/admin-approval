import { useState } from 'react'
import {
  Route,
  Routes
} from "react-router-dom";
import Welcome from './components/Welcome';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Signup from './components/Signup';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {

  return (
    <>
      <div className="bg-richblack-900 h-[91vh]">
        <div >
          <Navbar />
        </div>
        <div className="mt-[4rem]">
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
