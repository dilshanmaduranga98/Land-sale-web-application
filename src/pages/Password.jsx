import React, { useState } from 'react'
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
import { Link } from 'react-router-dom';
import OAuth from '../components/OAuth';

export default function Password() {

  const [email, setEmail] = useState("");
    
  function onchange(e)
    {
      setEmail(e.target.value);
    }


    
    
  return (
    <section className="relative w-full overflow-hidden h-[90vh] bg-gradient-to-l from-black to-white-0">
     
      <h1 
      className="mt-6 text-[2.5em] font-bold text-center flex justify-end mr-[16%] items-center text-white">Forgot password</h1>
      
      <div 
      className="flex flex-wrap items-center justify-center max-w-6xl px-6 py-6 mx-auto">
        <div 
        className="md:w-[67%] lg:w-[50%] mb-12 md:mb-6 ">
         
        </div>
        
        <div className="w-full md:w=[67%] lg:w-[40%] lg:ml-20">
          <form>

            <input 
            className='w-full px-4 py-2 my-10 transition ease-in-out bg-white border-gray-300 rounded text-md gray-700' 
            type='email' 
            id='email' 
            value={email} 
            onChange={onchange} 
            placeholder='Email address'/>
            
            
            <div className='flex justify-between mt-4 text-[10px] whitespace-nowrap sm:text-lg'>
              <p className='mb-6 text-[12px] sm:text-[14px] text-white'>Don't have an account?
                <Link to="/signup" className='ml-1 font-bold text-red-400 ease-in-out duation-200 tr-ansition hover:text-red-600 '>Register</Link>
              </p>

              <p className='text-[12px] sm:text-[14px]'>
                <Link to="/signin" className='text-blue-600 transition duration-200 ease-in-out hover:text-blue-800 '>Sign in instead</Link>
              </p>
            </div>
          
          
          <button type='submit' className='w-full py-1.5 text-white bg-blue-600 px-7 rounded hover:bg-blue-800 transition duration-200'>Send reset password
          </button>

          <div className='flex items-center my-4 before:border-t before:flex-1 before:border-gray-300 after:border-t after:flex-1 after:border-gray-300'>
            <p className='mx-4 font-semibold text-center text-white'>OR</p>
          </div>

          <div>
            <OAuth/>
          </div>
          </form>
        </div>
        
      </div>
      <div className='absolute top-0 w-full h-full -z-10'>
        <img src='/modern-residential-district-with-green-roof-balcony-generated-by-ai.jpg' className='object-cover w-full h-full'/>
      </div>
    </section>
  )
}
