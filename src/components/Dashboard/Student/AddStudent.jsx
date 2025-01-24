import React from 'react'

const AddStudent = () => {
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
    
        <h3 className='text-2xl font-bold mb-6'>
          Add Student
        </h3>
        <form > 
          <div >
          <label className='text-sm font-medium text-gray-700'>Full Name</label>
          <input type='text' name='name' className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter your name' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Email</label>
          <input type='email' name='email' className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter your email' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Age</label>
          <input type='number' name='age' className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter your age' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Course Enrolled</label>
          <input type='text' name='course_enrolled' className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter course enrolled' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Upload Image</label>
          <input type='file' name='image' className='mt-1 w-full p-2 border border-gray-300 rounded-md' accept='image/'/>
          </div>
          <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md'>
            Add Student
          </button>

        </form>
      </div>
    
  )
}

export default AddStudent
