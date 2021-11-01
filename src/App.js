import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from 'react'
import Alert from './components/Alert'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// import About from "./components/About";
function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMod = () => {
    if (Mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#121841";
      showAlert("Dark mod has been enable", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mod has been enable", "success");
    }
  }
  return (
    <>
      {/* <Router>
        <Navbar title="Help desk" Mode={Mode} toggleMod={toggleMod} />
        <Alert alert={alert} /> */}
      <div className="container">
        {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/"> */}
        <TextForm showAlert={showAlert} Heading="Enter your text" Mode={Mode} />
        {/* </Route>
          </Switch> */}
      </div>
      {/* </Router> */}


    </>
  );
}

export default App;
