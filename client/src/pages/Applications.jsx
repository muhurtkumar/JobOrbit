import React from 'react'
import Navbar from '../components/Navbar'
import { useState } from 'react'
import profile_upload_icon from "../assets/profile_upload_icon.svg";

const Applications = () => {

  const [isEdit, setIsEdit] = useState(false);
  const [resume, setResume] = useState(null);

  return (
    <>
      <Navbar />
      <div className='container px-4 min-h-[65vh] 2xl:px-20 max-auto my-10'>
        <h2 className='text-xl font-semibold'>Your Resume</h2>
        <div className='flex gap-2 mb-6 mt-3'>
          {
            isEdit
            ? <>
                <label className='flex items-center' htmlFor="resumeUpload">
                  <p className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg mr-2'>Select Resume</p>
                  <input id='resumeUpload' onChange={e => setResume(e.target.files[0])} accept='application/pdf' type="file" hidden />
                  <img src={profile_upload_icon} alt="" />
                </label>
                <button className='bg-red-100 border border-red-400 rounded-lg px-4 py-2'>Save</button>
            </>
            : <div className='flex gap-2'>
                <a className='bg-blue-100 text-blue-600 px-4 py-2 rounded-lg' href="">
                  Resume
                </a>
                <button onClick={()=> setIsEdit(true)} className='text-gray-500 border border-gray-300 rounded-lg px-4 py-2'>Edit</button> 
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default Applications
