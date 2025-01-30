import InvestmentPhoto from './assets/investment-calculator-logo.png';
import { useState } from 'react';
import UserInput from './components/UserInput.jsx';
import Results from './components/Results.jsx';
function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:15000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
  })
  function handleChange(identifier,newValue){
    setUserInput((prevUserInput)=>{
        return {
            ...prevUserInput,[identifier]:+newValue
        }
    });
}
const inputIsValid=userInput.duration>=1;
  return (
    <>
      <div id='header'>
        <img src={InvestmentPhoto}></img>
        <h1>Investment Calculator</h1>
      </div>
      <UserInput handleChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className='center'>Please enter a duration greater than zero</p>}
      {inputIsValid&&<Results input={userInput}/>}
    </>
  )
}

export default App
