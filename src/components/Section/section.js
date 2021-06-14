import MyMoney from "./MyMoney/myMoney"
import Expenses from "./Expenses/expenses"
import Balance from "./Balance/balance"



const Section = (props) => {
        
        var money = props.DpVal
        var expenses = 3
        
        return(
                
                <div>
                        <MyMoney MyMoney={money} />
                        <Expenses MyExpense={expenses} />
                        <Balance MyMoney={money} MyExpense={expenses}/>
                </div>
)}

export default Section