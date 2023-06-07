import React from 'react'
import {FcGoogle} from 'react-icons/fc'

export default function OAuth() {
  return (
    <button
    className='flex items-center justify-center w-full py-2 text-[12px] font-medium text-white uppercase transition duration-200 bg-red-700 rounded cursor-pointer px-7 hover:bg-red-600 ease-in-out active:bg-red-950 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out'
    >
        <FcGoogle className='mr-2 text-base'/>
        Continue with Google
    </button>
  )
}
 