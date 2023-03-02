import './App.css';
import React, {useEffect} from "react";
import {useTelegram} from "./hooks/UseTelegram";
import Header from "./components/Header/Header";

function App() {

    const {tg, onToggleButton} = useTelegram();


    useEffect(() => {
        tg.ready()
    }, [])

    return (
        <div className="App">
            <Header/>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
}

export default App;
