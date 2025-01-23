import React,{useState} from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import RollDice from './RollDice';
import one from '../images/1.jpg';
import two from '../images/2.png';
import three from '../images/3.png';
import four from '../images/4.png';
import five from '../images/5.png';
import six from '../images/6.png';
import Rules from './Rules';

function GamePlay() {

  const [selectedNum,setSelectedNum]=useState(null);
  const [currDice,setCurrDice]=useState(one);
  const [score,setScore]=useState(0);
  const [error,setError]=useState(null);
  const [rules,setRules]=useState(false);

  const genRandomNum=(min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
}

const diceImages=[one,two,three,four,five,six];

const rollDice=()=>{
    const currNum=genRandomNum(1,7);
    setCurrDice(diceImages[currNum - 1]);

    if(!selectedNum){
      setError("You have not selected any number");
      return;
    }

    setError("");

    if (selectedNum===currNum){
      setScore((prev)=>prev+currNum);
    }else{
      setScore((prev)=>prev-2);
    }
    setSelectedNum(null);
}

const resetScore=()=>{
  setScore(0);
}

const handleRules=()=>{
  setRules((prev)=>!prev);
}

  return (
    <>
    <main className='pt-[10px]'>
        <div className='flex justify-around items-end'>
            <TotalScore score={score}/>
            <NumberSelector selectedNum={selectedNum} setSelectedNum={setSelectedNum} error={error}
            setError={setError}/>
        </div>
        <RollDice currDice={currDice} setCurrDice={setCurrDice} rollDice={rollDice}/>

        <div className='flex flex-col justify-center gap-[5px] items-center'>

          <button className='bg-white text-xl font-bold px-[10px] py-[10px] rounded-md w-[250px]
             hover:scale-110 hover:bg-gray-200 transition duration-400 ease-in mt-10' 
             onClick={resetScore}>Reset Game</button>

              <button className='bg-white text-xl font-bold px-[10px] py-[10px] rounded-md w-[250px]
             hover:scale-110 hover:bg-gray-200 transition duration-400 ease-in mt-5' 
             onClick={handleRules}>
              Show Rules</button>

        </div>
        {
          rules ? <Rules /> : ""
        }
        
    </main>
    </>
  )
}

export default GamePlay
