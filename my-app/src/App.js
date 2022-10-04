import { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  useEffect(() => {
    // const req = new XMLHttpRequest();
    // req.open("GET", "http://localhost:3000/api/one");
    // req.send();
    fetch("http://127.0.0.1:3000/api/one", {
      method: "get",
    }).then(async (rs) => {
      const a = await rs.json();
      console.log(a);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
