import React, { Component } from 'react';
import Main from './components/MainComponents';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
// import { Map, GoogleApiWrapper } from 'google-maps-react';

// const mapStyles = {
//     width: '100%',
//     height: '100%'
//   };
  
//   export class MapContainer extends Component {
//     render() {
//       return (
//         <Map
//           google={this.props.google}
//           zoom={14}
//           style={mapStyles}
//           initialCenter={
//             {
//               lat: -1.2884,
//               lng: 36.8233
//             }
//           }
//         />
//       );
//     }
//   }

//   export default GoogleApiWrapper({
//     apiKey: 'AIzaSyDEkBQ09XpIkP3VvMOWAvmfuPCOIPOiu6M'
//   })(MapContainer);

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