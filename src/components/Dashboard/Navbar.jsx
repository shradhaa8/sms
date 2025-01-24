import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center text-white justify-between h-12 bg-cyan-500 px-5'>
      <p>Welcome</p>
      <button className='px-4 py-1 bg-cyan-600 hover:bg-cyan-700'>Logout</button>
    </div>
  )
}

export default Navbar
