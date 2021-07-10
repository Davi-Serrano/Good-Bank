import "./header.css"

const Header = () =>{

    function lala(){
        document.querySelector("header").style.backgroundColor = "black" ;
        document.querySelector("h1").style.color = "white" ;
        document.querySelector("footer").style.backgroundColor = "black" ;
        document.querySelector("h3").style.color = "white" ;
        document.querySelector(".center").style.backgroundColor = "rgba(0, 0, 0, 0.5)" ;
        document.querySelector(".center").style.color = "white" ;
        document.querySelector(".button").style.backgroundColor = "rgba(0, 0, 0, 0.5)" ;
    }
    
    return(
        
        <header>
        <h1 onClick={lala}>Good Bank</h1>
    </header>
        )
        
}
        export default Header