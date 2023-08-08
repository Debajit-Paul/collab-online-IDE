import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const EditorPage = () => {
  return (
    <div className='flex flex-col'>
        <Navbar/>
      <div className='m-2'>
        <Sidebar/>
        <div>
          
        </div>
      </div>
    </div>
  )
}

export default EditorPage