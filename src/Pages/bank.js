import { useState } from "react"

import Header from "../components/Header/header";
import Section from "../components/Section/section";
import Footer from "../components/Footer/footer";

import "./bank.css"

function Nav() {
  
  const  [ value, setValue ] = useState((0)) //Deposit Value
  const  [ depId, setdepId ] = useState(0)  //Deposit Identification
  
  const  [ expense, setExpense ] = useState(0) //Add expenseExpense Value
  const  [ expenId, setExpenId ] = useState(0)  //Expense Identification
  
//Make the deposit and Verification if value is > 0
  function makeDeposit () {
    var DpVal = document.getElementById("DpVal").value
    
    if( DpVal > 0 ){
    
      setValue(DpVal)
      setdepId(depId + 1)
      
    }
  }

  //Add Expense and Verification if value is > 0
  function addExpense(){
    var Addexpen = document.getElementById("AddExpen").value
     
    if(Addexpen > 0 ){

      setExpense( Addexpen)
      setExpenId( expenId + 1)

    }
  }
   
  return (
    <div className="App">
        <Header />
        
        <Section Value={value} 
                depId={depId} 
                
                Addexpen={expense} 
                expenId={expenId}/>
  
       {/* Make deposit  */}
       
       <div className="box">
            <div>
                <h1 > Deposit: <input type="number" id="DpVal" min="1"></input> </h1>
                <h1 > Description: <input type="textr" placeholder="optinal" id="Dptext" ></input></h1>
                <button onClick={makeDeposit}>Deposit</button>
          
            </div>
          
            {/* Add Expense */}
            <div>
                <h1 > Add Expense: <input type="number" id="AddExpen" min="1"></input> </h1>
                <h1 > Description: <input type="textr" placeholder="optinal" id="Expentext" ></input></h1>
                <button onClick={addExpense}>Add</button>
          
            </div>
      </div>


        <Footer />
    </div>
  );
}


export default Nav;
