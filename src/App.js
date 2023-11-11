import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from "./pages/Home"
import Card from "./components/Card";
import AboutUS from './pages/AboutUs';
// import ContactUs from './pages/ContactUs';

function App() {



  return (
    <div className="App">
      
      
       <Switch>
          <Route  path="/" exact component={Home}/>
          <Route  path="/AboutUS" exact component={AboutUS}/>
          {/* <Card/> */}
          {/* <Route  path="/ContactUS" exact component={ContactUs}/> */}
      </Switch>
     
    </div>
  );
}

export default App;
