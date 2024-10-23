import React from 'react'

const FailedTask = () => {
  return (
    <div className='h-full flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-yellow-600 text-sm px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>19 oct 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Complete this project</h2>
            <p className='text-sm mt-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio vero ipsam natus accusamus corporis praesentium.
            </p>
        
            <div className='mt-2'>
                <button className='w-full bg-red-500'>Failed</button>
            </div>
            </div>
  )
}

export default FailedTask