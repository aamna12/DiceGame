import React from 'react'

function TotalScore({score}) {
  return (
    <>
    <div className='text-white max-w-[200px] text-center'>
        <h1 className='text-[90px]'>{score}</h1>
        <p className='text-[24px] font-medium'>Total Score</p>
    </div>
    </>
  )
}

export default TotalScore
