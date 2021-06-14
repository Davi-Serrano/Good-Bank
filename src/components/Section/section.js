import { useState, useEffect } from "react"

import MyMoney from "./MyMoney/myMoney"
import Expenses from "./Expenses/expenses"
import Balance from "./Balance/balance"



const Section = (props) => {
       
        const [ money, setMoney] = useState(0)
        const [expense, setExpense ] = useState(0)


        const deposit = parseInt(props.Value)
        var depId = props.depId 
        
        const addexpenses = parseInt(props.Addexpen)
        var expenId = props.expenId
        

        var balance = money - expense
        //Add the Deposit in the Money Bank
        useEffect( ()=> {

                setMoney( deposit + money)       
                
        }, [depId] )
        
        useEffect( ()=> {

                setExpense( addexpenses + expense)

        }, [expenId])
        

      
        return(
                
                <div>
                        <MyMoney MyMoney={money}  />
                        <Expenses MyExpense={expense} />
                        <Balance MyBalance={balance}/>
                </div>
)}

export default Section