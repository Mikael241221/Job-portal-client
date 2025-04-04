import React from 'react'
import {FaEnvelopeOpenText, FaRocket} from "react-icons/fa6"

const Newsletter = () => {
  return (
    <div>
      <div>
        <h3  className='text-lg font-bold mb-2 flex items-center gap-2'> <FaEnvelopeOpenText/>
        Email me for job
        </h3>
        <p className='text-black/75 text-base mb-4'>ut esse eiusmod. sit enim labore dolore. Aute ea fugiat commodo ea foes</p>
        <div className='w-full space-y-4'>
          <input type="email" name="email" id='email' placeholder='name@.com' 
          className='w-full block py-2 pl-3 border focus:outline-none'/>
          <input type="submit" value={"Subscribe"} className='w-full block py-2 pl-3 border focus:outline-none
          bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'/>
        </div>
      </div>
      {/* 2nd part  */}
      <div className='mt-20'>
        <h3  className='text-lg font-bold mb-2 flex items-center gap-2'> 
          <FaRocket/>
        Get noticed fast
        </h3>
        <p className='text-black/75 text-base mb-4'>ut esse eiusmod. sit enim labore dolore. Aute ea fugiat commodo ea foes</p>
        <div className='w-full space-y-4'>
          <input type="submit" value={"Upload Your CV"} className='w-full block py-2 pl-3 border focus:outline-none
          bg-blue-500 rounded-sm text-white cursor-pointer font-semibold'/>
        </div>
      </div>

    </div>
  )
}

export default Newsletter
