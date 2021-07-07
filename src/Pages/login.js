import "./login.css" 

import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

function Login () {


    function colores(){

        alert("Olá mundo")

    }
        
    return (
        
        <div className="Login">
            
            <Header />

            <div className="boxcenter">
                <div className="center">

                    <h2 click={colores}>Login</h2>
                    
                    <div className="log">
                        <label>Email</label>
                        <input type="email" />
                        <label>Password</label>
                        <input type="password"/>
                        <div className="button">login</div>  
                    </div>   
                </div>
            </div>
      
            <Footer />
       </div>
    )
}

export default Login