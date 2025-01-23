import React from 'react';
import one from '../images/1.jpg';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';

function RollDice({currDice,setCurrDice,rollDice}) {

  return (
    <>
    <div className='text-white flex flex-col items-center mt-[50px]'>
        <div className='cursor-pointer'
        onClick={rollDice}>
            <img src={currDice} alt="dice" className='border-2 border-white h-[150px] rounded-2xl 
            hover:scale-105 drop-shadow-xl transform transition duration-300'/>
        </div>
        <p className='text-[24px] mt-5'>Click on Dice to Roll</p>
    </div>
    </>
  )
}

export default RollDice
