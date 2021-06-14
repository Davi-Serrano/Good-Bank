import MyMoney from "./MyMoney/myMoney"
import Expenses from "./Expenses/expenses"
import Balance from "./Balance/balance"
import Deposit from "./Deposit/deposit"


var money = 5
var expenses = 3

const Section = () => 


<div>
        <MyMoney MyMoney={money} />
        <Expenses MyExpense={expenses} />
        <Balance MyMoney={money} MyExpense={expenses}/>
        <Deposit />
</div>

export default Section