import React from "react";
import "./App.css";
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Main></Main>
      <About></About>
    </div>
  );
}

export default App;
