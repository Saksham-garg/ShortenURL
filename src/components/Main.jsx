import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
function Main() {
  const [name, setname] = useState("");
  const [url, setUrl] = useState("");

  function save() {
    const res = axios
      .post("https://gotiny.cc/api", {
        input: name,
      })
      .then((res) => {
        console.log(res.data[0].code);
        setUrl(res.data[0].code);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="Main">
      <div className="input--area">
        <input
          type="text"  placeholder="Enter the URL to Shorten"
          value={name}
          name="name"
          onChange={(event) => {
            setname(event.target.value);
          }}
        ></input>
        <button type="button" onClick={save}>
          Short URL
        </button>
      </div>

      <div className="get--url">{<h1>{`https://gotiny.cc/${url}`}</h1>}</div>
    </div>
  );
}

export default Main;
