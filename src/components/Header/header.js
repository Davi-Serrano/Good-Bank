import "./header.css"

const Header = () =>{

    function darkTheme(){
        document.querySelector("header").style.backgroundColor = "black" ;
        document.querySelector("h1").style.color = "white" ;
        document.querySelector("footer").style.backgroundColor = "black" ;
        document.querySelector("h3").style.color = "white" ;
        document.querySelector(".center").style.backgroundColor = "rgba(0, 0, 0, 0.5)" ;
        document.querySelector(".center").style.color = "white" ;
        document.querySelector(".button").style.backgroundColor = "rgba(0, 0, 0, 0.5)" ;
        document.querySelector("input").style.color = "white" ;
    }
    
    return(
        
        <header>
        <h1>Good Bank</h1>
        <div className="theme">
          <img onClick={darkTheme} src="https://lh3.googleusercontent.com/proxy/ziMW72dFsR8EwKszz-SNmYDAdG5avCD3D5WxjUHZIq8X-Sd72pVmu9Rua--du4HggfGNq5iIKTXqmZDlcRDRB38S-aniI3t2cweDVm_T5y_EUv3QhkbihyKkeeOd7PC7lbHjCtySbvBArYdh" width="50px" />
        </div>
    </header>
        )
        
}
        export default Header