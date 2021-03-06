import { useState } from "react"

import whiteTheme from "../components/Header/btn.png"
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

  function darkTheme(){
    document.querySelector("header").style.backgroundColor = "black" ;
    document.querySelector("h1").style.color = "white" ;
    document.querySelector("footer").style.backgroundColor = "black" ;
    document.querySelector("h3").style.color = "white" ;
    document.querySelector("#black").style.display = "none" ;
    document.querySelector("#white").style.display = "block" 
  }
   
  return (
    <div className="App ">
    <header>
        <h1 >Good Bank</h1>

        <div className="theme">
          <img onClick={darkTheme} id="black" src="https://lh3.googleusercontent.com/proxy/ziMW72dFsR8EwKszz-SNmYDAdG5avCD3D5WxjUHZIq8X-Sd72pVmu9Rua--du4HggfGNq5iIKTXqmZDlcRDRB38S-aniI3t2cweDVm_T5y_EUv3QhkbihyKkeeOd7PC7lbHjCtySbvBArYdh" width="50px" />
          <img onClick={darkTheme} id="white" src={whiteTheme} width="60px" />
        </div>
    </header>
        
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
