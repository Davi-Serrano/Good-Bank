const Deposit = () => {

    function da(){
        alert("olá")
    }
    return(
        <div>
            <h1 > Deposit: <input type="number" min="1"></input> </h1>
            <button onClick={da}>Deposit</button>
        </div>
        
    )


}

export default Deposit