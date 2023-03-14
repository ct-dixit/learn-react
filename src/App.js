import React, { useState } from 'react';
import './App.css';
import Alert from './component/Alert';
// import About from './component/About';
import Navbar from './component/Navbar';
import TextForm from './component/TextForm';


function App() {

  const [mode, setMode] = useState('light')
  const [alert, setAlert] = useState(null)  // object

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1000)
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark Mode has been Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been Enabled", "success")
    }
  }

  return (
    <>
      <Navbar title="Berry" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextForm showAlert={showAlert} heading="Enter The Text to Analyze Below" mode={mode} />
        {/* <About/>    */}
      </div>
    </>
  );
}

export default App;
