import React from 'react'
import Logo from "../assets/pepsi.png";

const Card = () => {
  return (
    <div className='flex flex-col  items-center justify-center w-[120px]  md:w-[320px]'>
      <div className="card ">
          <img src={Logo} alt="" className='w-20 md:w-24' />
        </div>
        <h1 className='text-white text-center mt-2'>Pepsi</h1>
    </div>
  )
}

export default Card
