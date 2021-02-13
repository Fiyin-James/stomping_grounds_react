import React, { Component } from 'react';
import Main from './components/MainComponents';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { Map, GoogleApiWrapper } from 'google-maps-react';




class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Main />
          
                </div>
            </BrowserRouter>
        );
    };
}

export default App;