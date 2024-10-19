import React from 'react'

const Login = () => {
    const submitHandler=(e)=>{
        e.preventDefault()
        console.log('Form submitted')
    }
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 rounded-xl border-emerald-600 p-20'>
            <form 
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input required className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400' type='email' placeholder='Enter your email'/>
                <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full placeholder:text-gray-400 mt-3' type='password' placeholder='Enter your password'/>
                <button className='mt-7 text-white outline-none border-none bg-emerald-700 text-lg py-2 px-8 w-full rounded-full placeholder:text-white'>Log In</button>
            </form>
        </div>
    </div>
  )
}

export default Login