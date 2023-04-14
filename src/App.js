import { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

import {
  Routes,
  Route
} from "react-router-dom";

function App() {
  const[mode,setMode]=useState("light");//weather darkmode is enabled or not
  const[alert,setAlert]=useState(null);//Alert

  const showAlert=(message,type)=>{
    setAlert({msg:message,
      type:type})

      setTimeout(() => {
        setAlert(null)
      }, 1500);

  }

  const toggleMode=()=>{
    if (mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      showAlert("Dark mode has been enabled","success")
      document.title="TextUtils - drak mode"
    //  setInterval(() => {
     //   document.title="TextUtils is amazing"

    //  }, 2000);
  //    setInterval(() => {
    //    document.title="install TextUtils"

   //   }, 1500);
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      showAlert("Light mode has been enabled","success")
      document.title="TextUtils - light mode"

    }

  }
  return (
    <>
        <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} toggleMode={toggleMode}/>

      <Alert alert={alert}/>
        <div className="container my-3">

      <Routes>

          <Route exact path="/about" element={<About/>}>
          </Route>
  
          <Route exact path="/" element={<Textform  showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>}>    
          </Route>

      </Routes>
        </div>


    </>
  );
}

export default App;
