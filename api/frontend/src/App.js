import React, {Component} from 'react';
import './App.css';
import SksMain from "./components/SksMain";
import {BrowserRouter} from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <div className="App">
                        <SksMain/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;
