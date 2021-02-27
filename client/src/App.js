import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [state, setState] = useState({ msg: "" });

  const makeRequest = async () => {
    try {
      const { data } = await axios.get("/api/test");
      setState(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    makeRequest();
  }, []);

  return <div className="App">{state.msg}</div>;
}

export default App;
