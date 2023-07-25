//When the user changes the input we have to update the state (onChange prop and function to update the changes )(ie:i will handle the userInput with useState),
//to display the relevant changes in ui we will use the two way biding using (value = {UserInput['current savings']}) props


import { useState } from "react";   
const initialUserInput = {
    'current-savings':1000,
    'yearly-contribution' : 1200,
    'expected-return' : 7,
    'duration' : 10
}
const UserInput = (props) =>{
    // by using use state setting initial value  
    const [userInput,setUserInput]=useState(initialUserInput);


    // IF submit clicked   

    const onSubmitHandler =(event)=>{ 
        event.preventDefault();
        console.log('geetha');  
        props.onCalculate(userInput);
    }  
    // if reset clicked
    const resetHandler =() =>{
        setUserInput(initialUserInput);
    }
    //if input changes
    const onInputChangeHandler = (input,value)=>{
        setUserInput((prevInput)=>{
            return {...userInput,[input]:+value};
        })
    } ;        




    return (  <form onSubmit={onSubmitHandler} className="form">  
    <div className="input-group">
    <p>
        <label htmlFor="current-savings">Current Savings ($)</label>
        <input  onChange = {(event)=>{onInputChangeHandler('current-savings',event.target.value)}} type="number" value = {userInput['current-savings']} id="current-savings" />
    </p>
    <p>
        <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
        <input onChange = {(event)=>{onInputChangeHandler('yearly-contribution',event.target.value)}} value = {userInput['yearly-contribution']} type="number" id="yearly-contribution" />
    </p>
    </div>
    <div className="input-group">
    <p>
        <label htmlFor="expected-return">
        Expected Interest (%, per year)
        </label>
        <input onChange = {(event)=>{onInputChangeHandler('expected-return',event.target.value)}} value = {userInput['expected-return']}  type="number" id="expected-return" />
    </p>
    <p>
        <label htmlFor="duration">Investment Duration (years)</label>
        <input onChange = {(event)=>{onInputChangeHandler('duration',event.target.value)}} value = {userInput['duration']} type="number" id="duration" />
    </p>
    </div>
    <p className="actions">
    <button  onClick={resetHandler} type="reset" className="buttonAlt">
        Reset
    </button>
    <button type="submit" className="button">
        Calculate
    </button>
    </p>
</form>
);
}  
export default UserInput;