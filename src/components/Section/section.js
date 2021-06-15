import { useState, useEffect } from "react"

import MyMoney from "./MyMoney/myMoney"
import Expenses from "./Expenses/expenses"
import Balance from "./Balance/balance"

import "./section.css"



const Section = (props) => {
       
        const [ money, setMoney] = useState(0)
        const [expense, setExpense ] = useState(0)

        //Deposit is the input value of Deposit
        const deposit = parseInt(props.Value)
        //depId is used for useEfeccts instance
        var depId = props.depId 
        
        //addExpnese is the input value of Expense
        const addexpenses = parseInt(props.Addexpen)
        //expenId is used for useEfeccts instance
        var expenId = props.expenId
        
        const balance = money - expense
        //Add the Deposit in the Money Bank
        useEffect( ()=> {

                setMoney( deposit + money)       
                
        }, [depId] )
        
        useEffect( ()=> {

                setExpense( addexpenses + expense)

        }, [expenId])        
      
        return(
                
                <div className="section">
                        <MyMoney  MyMoney={money} />
                        <Expenses  MyExpense={expense} />
                        <Balance  MyBalance={balance}/>
                </div>
)}

export default Section