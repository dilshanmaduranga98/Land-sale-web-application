import React, { useState } from 'react'

export default function Signin() {

  const [formInfo, setFormInfo] = useState(
    {
      email: "",
      password: "",
    }
    );

    const {email, password} = formInfo;
    
    function onchange(e)
    {
      setFormInfo((prevState) =>
      ({
        ...prevState,
        [e.target.id]: e.target.value,
      }))
    }

    
  return (
    <section>
      <h1 
      className="mt-6 text-3xl font-bold text-center">Sign In</h1>
      
      <div 
      className="flex flex-wrap items-center justify-center max-w-6xl px-6 py-12 mx-auto">
        <div 
        className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
          <img 
          src='/signin-bacground 1.jpg' 
          alt="random" 
          className='w-full'/>
        </div>
        
        <div className="w-full md:w=[67%] lg:w-[40%] lg:ml-20">
          <form>

            <input 
            className='w-full px-4 py-2 my-10 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded' 
            type='email' 
            id='email' 
            value={email} 
            onChange={onchange} 
            placeholder='Email address'/>
            
            <div>
            <input 
            className='w-full px-4 py-2 text-xl text-gray-700 transition ease-in-out bg-white border-gray-300 rounded' 
            type='text' 
            id='email' 
            value={password} 
            onChange={onchange} 
            placeholder='Password'/>
            </div>
            
          </form>
        </div>
        
      </div>
    </section>
  )
}
