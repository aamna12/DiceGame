import React from 'react'

function Rules() {
  return (
    <div className='flex justify-center items-center mb-5'>
    <div className='bg-gray-100 p-[15px] max-w-[800px] mx-0 my-auto mt-[40px] rounded-md'>
      <h2 className='text-[24px] font-extrabold '>How to play dice game</h2>
      <div className='mt-[5px] '>
        <ul className='list-disc pl-5'>
        <li>Select any number</li>
        <li>Click on dice image</li>
        <li>After clicking on the dice, if selected number is equal to the number on the dice you gain points 
            else you loose 2 points</li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Rules
