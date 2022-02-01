import Navbar from "./components/Navbar";
import "./App.css";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alerts from "./components/Alerts";
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import About from "./components/About";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "black";
      handleAlert("Dark Mode Enabled", "success");
    } else {
      setmode("light");
      document.body.style.backgroundColor = "#fff";
      handleAlert("Light Mode Enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="TextUtils" AboutText="AboutUs" HomeText="Home" mode={mode} toggleMode={toggleMode}/>
      <Alerts alert={alert} />
      <div className="container my-3">
          <TextForm heading = "Enter Text To Analyze Below" mode={mode}/>
      </div>
    </>
  );
}

export default App;
