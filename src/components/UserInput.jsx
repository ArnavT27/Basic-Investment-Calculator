
export default function UserInput({handleChange , userInput}){
    
    
    return (
        <section id="user-input">
        <div className='input-group'>
        <p>
            <label>Initial Investment</label>
            <input type='number' required value={userInput.initialInvestment} onChange={(e)=>{handleChange('initialInvestment',e.target.value)}}></input>
        </p>
        <p>
            <label>Annual Investment</label>
            <input type='number' required value={userInput.annualInvestment} onChange={(e)=>{handleChange('annualInvestment',e.target.value)}}></input>
        </p>
          
        </div>
        <div className='input-group'>
        <p>
            <label>Expected Return</label>
            <input type='number' required value={userInput.expectedReturn} onChange={(e)=>{handleChange('expectedReturn',e.target.value)}}></input>
        </p>
        <p>
            <label>Duration</label>
            <input type='number' required value={userInput.duration} onChange={(e)=>{handleChange('duration',e.target.value)}}></input>
        </p>
        </div>
      </section>
    )
}