import React, { Component } from 'react';
// import Directory from './DirectoryComponents';
// import CampsiteInfo from './CampsiteInfoComponent';
// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import Home from './HomeComponent';
// import Contact from './ContactComponent';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import { COMMENTS } from '../shared/comments';
// import { PARTNERS } from '../shared/partners';
// import { PROMOTIONS } from '../shared/promotions';
// import { CAMPSITES } from '../shared/campsites';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
        
        };
    }

    render() {

        return (
            <div>
                {/* <h1>Hello World</h1> */}
                <Home />
            
            </div>
        );
    }
}

export default Main;