import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/UseTelegram";

function App() {

    const {tg, onToggleButton} = useTelegram();


    useEffect(() => {
        tg.ready()
    },[])

  return (
    <div className="App">
        <button onClick={onToggleButton}></button>
    </div>
  );
}

export default App;
