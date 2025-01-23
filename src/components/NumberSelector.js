import React from 'react'

function NumberSelector({selectedNum,setSelectedNum,error,setError}) {

    const array=[1,2,3,4,5,6];

    const numSelectorHandler=(value)=>{
      setSelectedNum(value);
      setError("");
    }

  return (
    <>
    <div className='flex flex-col items-end'>
      <p className='text-red-700 text-[24px]'>{error}</p>
        <div className='flex gap-[24px]'>
        {
            array.map((value,index)=>(
                <div key={index} className={`h-[72px] w-[72px] text-white border-[1px]
                     border-white grid place-items-center text-[24px] font-bold cursor-pointer
                     ${value === selectedNum ? "bg-blue-950" : "bg-black"}`} 
                 onClick={()=>numSelectorHandler(value)}>{value}</div>
            ))
        }
        </div>
        <p className='text-[20px] text-white font-extrabold'>Select Number</p>
    </div>
    </>
  )
}

export default NumberSelector
