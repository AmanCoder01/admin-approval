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
import PrivateRoute from './components/PrivateRoute';
import OpenRoute from './components/OpenRoute';

function App() {

  return (
    <>
      <div className="bg-richblack-900 h-[91vh]">
        <div >
          <Navbar />
        </div>
        <div className="mt-[4rem]">
          <Routes>
            <Route path="/" element={<OpenRoute>
              <Welcome />
            </OpenRoute>} />

            <Route path="/signup" element={<OpenRoute>
              <Signup />
            </OpenRoute>} />

            <Route path="/login" element={<OpenRoute>
              <Login />
            </OpenRoute>} />

            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} />


            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>d
    </>
  )
}

export default App
