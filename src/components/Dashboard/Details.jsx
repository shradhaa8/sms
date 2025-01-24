import React from 'react'
import Card from './Card'
import { FaBook, FaUser } from 'react-icons/fa'

const Details = () => {
  return (
    <div className='p-6'>
        <h3 className='text 3-xl font-bold'>Student Overview</h3>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-6'> 
        <Card icon={<FaUser/>} text={"Total Students"} number={15} color="bg-cyan-500"/>
        <Card icon={<FaBook/>} text={"Total Courses"} number={8}  color="bg-orange-500"/>
        </div>
      
    </div>
  )
}

export default Details
