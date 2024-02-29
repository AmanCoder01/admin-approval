import React, { useEffect, useState } from 'react'
import { approveUser, getUserDetails } from '../services/ApiCall'
import { toast } from "react-hot-toast";

const AdminHome = () => {
    const [userData, setUserData] = useState([]);
    const fetchData = async () => {
        const res = await getUserDetails();
        setUserData(res.data.data)
    }

    const submitHandler = async (userId) => {
        try {
           const res= await approveUser({userId});
        //    console.log(res);
            toast.success("Account Approved Successfully");
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, [userData])

    return (
        <div className='flex flex-col gap-5 items-center max-h-screen  w-2/5 min-w-[230px] mx-auto py-[3rem] text-richblack-5'>
            <h1 className='text-2xl font-bold pb-6'>Admin Dashboard</h1>
            {
                userData.map((item) => (
                    <div key={item._id} className='w-full flex items-center justify-between text-richblack-5 bg-richblack-700 py-2 rounded-md px-4 border border-gray-500'>
                        <h2 className='text-xl'>{item.firstName} {item?.lastName}</h2>
                        <button onClick={() => submitHandler(item._id)} className=' bg-yellow-400 text-richblack-700 font-semibold text-lg  py-[1px] px-3 rounded-md '>Verify</button>
                    </div>
                ))
            }
        </div>
    )
}

export default AdminHome
