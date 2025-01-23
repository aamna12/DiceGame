import React from 'react';
import dices from '../images/dices.jpg';

function StartGame({toggle}) {
  return (
    <>
    <div className="max-w-[1180px] flex h-[85vh] mt-14 items-center justify-center">

        <div>
          <img className="h-[60vh]" src={dices} alt="dices" />
        </div>

        <div className='ml-10'>

            <h1 className="text-white text-8xl font-bold">DICE GAME</h1>

            <button className='bg-white text-xl font-bold px-[10px] py-[10px] rounded-md w-[220px]
             hover:scale-110 hover:bg-gray-200 transition duration-400 ease-in mt-5' 
             onClick={toggle}>Play Game</button>

        </div>
        
    </div>
    </>
  )
}

export default StartGame
