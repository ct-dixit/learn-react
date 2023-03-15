import React, { useState } from "react";
import "./App.css";
import Alert from "./component/Alert";
import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null); // object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "New App";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been Enabled", "success");
      document.title = "New React App";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="Berry"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-3">
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
          <TextForm
                showAlert={showAlert}
                heading="Enter The Text to Analyze Below"
                mode={mode}
              />
          </Route>
        </div>
      </Router>
    </>
  );
}

export default App;
