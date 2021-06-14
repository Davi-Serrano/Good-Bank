import Header from "./components/Header/header";
import Section from "./components/Section/section";
import Footer from "./components/Footer/footer";


function App() {

    
  
  function da () {

    var DpVal = document.getElementById("DpVal")    
    return  DpVal
 
  }

  return (
    <div className="App">
        <Header />
        <Section/>
        <div>
            <h1 > Deposit: <input type="number" id="DpVal" min="1"></input> </h1>
            <button onClick={da}>Deposit</button>
        </div>
        <Footer />
    </div>
  );
}

export default App;
