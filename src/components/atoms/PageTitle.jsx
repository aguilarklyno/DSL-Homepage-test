import React from 'react'

export default function PageTitle(props) {
  return (
    <>
      <div className='w-full h-28 sm:h-[7rem] bg-black mt-8 flex justify-center items-center'>
        <div className='flex flex-col justify-center items-start w-10/12 sm:w-8/12 lg:w-7/12 space-y-2'>
          <p className='text-white text-lg lg:text-2xl font-semibold '>
              {props.title}
          </p>
          <p className='text-gray-500 text-xs'>
            {props.subtitle}
          </p>
        </div>
      </div>
    </>
  )
}

