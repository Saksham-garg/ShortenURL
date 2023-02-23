import axios from "axios";
import React,{ useState,useEffect } from "react";
import "./App.css";
import Navbar from './components/Navbar'
function App() {
  const [name, setname] = useState("");
  const [url,setUrl] = useState("");

  function save(){
      const res = axios.post("https://gotiny.cc/api",{
        input:name
      }).then((res)=>{
        console.log(res.data[0].code)
        setUrl(res.data[0].code)
      })
      .catch((err)=>{
        console.log(err);
      })
    }

  return (
    <div className="App">
      <Navbar></Navbar>
      <input
        type="text"
        value={name}
        name="name"
        onChange={(event) => {
          setname(event.target.value);
        }}
      ></input>
      <button type="button" onClick={save}>
        Short URL
      </button>
      <div>{ <h1>{`https://gotiny.cc/${url}`}</h1>}</div>
    </div>
  );
}

export default App;
