import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import AdminHome from './AdminHome';
import { setToken, setUserData } from '../slices/authSlice';


const Dashboard = () => {
  const { userData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(setToken(JSON.parse(localStorage.getItem("user"))));
    dispatch(setUserData(JSON.parse(localStorage.getItem("profile"))));
  }, [])

  return (
    <>
      {userData.accountType === "admin" ? <AdminHome /> : <div className='flex flex-col gap-5 items-center h-[90vh] w-[90wh] justify-center'>
        <h1 className="text-center text-3xl font-bold text-richblack-5">
          Welcome <p className='text-yellow-300'> {userData?.firstName} {userData?.lastName}</p>
        </h1>
      </div>}
    </>
  )
}

export default Dashboard
