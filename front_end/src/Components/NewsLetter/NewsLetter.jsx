import React from 'react'

function NewsLetter() {
  return (
    <div className='w-[80%] flex flex-col items-center justify-center m-auto px-0 py-[140px] mb-[150px] bg-[linear-gradient(180deg,#fde1ff_0%,#e1ffea22_80%)] gap-[30px]'>
        <h1 className='text-[#454545] text-[55px] font-semibold '>Get Exclusive Offers On Your Email</h1>
        <p className='text-[#454545] text-xl '>Subscribe to our newsletter and stay Updated</p>
        <div className='flex items-center justify-between bg-white w-[730px] h-[70px] rounded-[80px] border-[1px] border-[#e3e3e3] border-solid'>
            <input className='w-[500px] ml-[30px] border-none outline-none text-[#616161] font-poppins text-[16px]' type="email" placeholder='Your Email Id' />
            <button className='w-[210px] h-[70px] rounded-[80px] bg-black text-white text-[16px] cursor-pointer'>Subscribe</button>
        </div>
    </div>
  )
}

export default NewsLetter