import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {
  const[student, setStudent] = useState({
    s_name:'',
    email:'',
    age:'',
    course_enrolled:'',
    image:''
  })
  
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    const formData = new FormData(); 
    formData.append('s_name', student.s_name);
    formData.append('email', student.email);
    formData.append('age', student.age);
    formData.append('course_enrolled', student.course_enrolled);
    if (student.image) {
        formData.append('myfile', student.image);
    }
    try {
        const response = await axios.post('http://localhost:5000/api/student/addstudent', formData, {
            headers: {
                "auth-token": localStorage.getItem('token') 
            }
        });

        console.log(response.data);
        props.showAlert && props.showAlert("Added successfully", "success");
        if(response.data.success){
          navigate("/admin-dashboard/students")
        }

        setStudent({
          s_name:'',
          email:'',
          age:'',
          course_enrolled:'',
          image:''
        });

    } catch (error) {
      if(error.response && !error.response.data.success){
        alert(error.response.data.error)
    }
};
  }

const handleChange = (e) => {
    if (e.target.type === "file") {
        setStudent({
            ...student,
            [e.target.name]: e.target.files[0] 
        });
        console.log(e.target.files[0]);
    } else {
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        });
    }
};
  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md w-96'>
    
        <h3 className='text-2xl font-bold mb-6'>
          Add Student
        </h3>
        <form encType="multipart/form-data" onSubmit={handleSubmit}> 
          <div >
          <label className='text-sm font-medium text-gray-700'>Full Name</label>
          <input type='text' id='s_name' name='s_name' onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter your name' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Email</label>
          <input type='email' name='email' onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter your email' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Age</label>
          <input type='number' name='age' onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter your age' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Course Enrolled</label>
          <input type='text' name='course_enrolled' onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-md' placeholder='Enter course enrolled' required/>
          </div>
          <div>
          <label className='text-sm font-medium text-gray-700'>Upload Image</label>
          <input type='file' name='image' onChange={handleChange} className='mt-1 w-full p-2 border border-gray-300 rounded-md' accept='image/'/>
          </div>
          <button type='submit' className='w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded-md'>
            Add Student
          </button>

        </form>
      </div>
    
  )
}

export default AddStudent
