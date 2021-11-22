import React from "react";
import { Dice } from "./features/counter/Dice";
import { Scoresheet } from "./features/counter/Scoresheet";
import "./App.css";

function App() {
    return (
        <div className="App">
            <header className="App-header">Yatzy</header>
            <Dice />
            <Scoresheet />
        </div>
    );
}

export default App;
