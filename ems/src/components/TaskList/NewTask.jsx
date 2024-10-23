import React from 'react'

const NewTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-blue-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>19 oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete this project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero ipsam natus accusamus corporis praesentium.
            </p>
            <div className=' mt-4'>
                <button className='bg-green-500 py-1 px-2 text-sm'>Accept Task</button>
            </div>
        </div>
  )
}

export default NewTask