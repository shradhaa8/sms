import React from 'react'
import { Link } from 'react-router-dom';

const StudentList = () => {
  return (
    <div className='p-6'>
        <div className='text-center'>
        <h3 className='text-2xl font-bold'>Manage Students</h3>
    </div>
    <div className='flex justify-between items-center'>
        <input
            type='text' placeholder='Search Student' className='px-4 py-0.5 border' 
        />
        <Link to="/admin-dashboard/addstudent" className="px-4 py-1 bg-cyan-500 rounded text-white">
        Add Student
        </Link>
        
    </div>
    </div>
  )
}

export default StudentList
