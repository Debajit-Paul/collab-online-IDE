import React from 'react'

const Sidebar = () => {
  return (
    <div className='w-[20%] h-[87.5vh] rounded-md flex flex-col bg-[#1A1A1A] border border-white'>
        <section className='flex p-3 gap-4'>
            <p className='text-white'>Choose Language:</p>
            <select name='Choose language' className=' text-white bg-transparent border border-white rounded-md'>
                <option className='text-black'>Java</option>
                <option className='text-black'>C++</option>
                <option className='text-black'>Python</option>
            </select>
        </section>
        <hr/>
        <section>

        </section>
    </div>
  )
}

export default Sidebar