import React, { Component } from 'react'; 
// import Directory from './DirectoryComponents';
// import CampsiteInfo from './CampsiteInfoComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from './ContactComponent';
import MapSection from './map/Map';

// import Contact from './ContactComponent';
// import { COMMENTS } from '../shared/comments';
// import { PARTNERS } from '../shared/partners';
// import { PROMOTIONS } from '../shared/promotions';
// import { CAMPSITES } from '../shared/campsites';

const location = {
    address: '303 Welch Ave #7219, Ames, IA 50014',
    lat: 42.02008639080288, 
    lng: -93.6504589601404
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path= '/home' component={Home} /> 
                    <Route exact path= '/contactus' component={ContactUs} /> 
                    <Redirect to='/home'/>
                </Switch> 
                <MapSection google={window.google} location={location} zoom={17} />
                <Footer/>
             
            </div>
        );
    }
}

export default Main;