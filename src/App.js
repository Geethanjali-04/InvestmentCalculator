import Header from './components/Header/Header';
import ResultsTable from './components/ResultsTable/ResultsTable'; 
import UserInput from './components/UserInput/UserInput';
import { useState } from 'react';
function App() {  
  const[userInput,setUserInput]=useState(null)
  const calculateHandler = (userInput) => {  
    setUserInput(userInput);
  };  

  // if userinput not null
  const yearlyData = [];  
  if(userInput) {
    
    // per-year results

    let currentSavings =+ userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput['yearly-contribution']; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput['expected-return'] / 100;
    const duration = +userInput['duration'];

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    } 
  }

    // do something with yearlyData ...

  return (
    <div>
    <Header/> 
    <UserInput onCalculate={calculateHandler}/> 
    {!userInput && <p>No investment calculated yet</p>}  
    {userInput && <ResultsTable data={yearlyData} initialInvestment={userInput['current-savings']}/>}
    
    </div>
  );
}

export default App;
