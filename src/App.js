
 import BorderCard from "./components/common/BorderCard";
// import NavBar from "./components/Navbar/NavBar";
// import Header from "./components/Header";
import Apods from "./components/apod/Apods";


function App() {

  return (
    <div className="App">
      {/* <NavBar></NavBar> */}
      
      <BorderCard>
      <Apods />
      </BorderCard>
    
    </div>
  );
}

export default App;
