import React, { Component } from 'react'; 
// import Directory from './DirectoryComponents';
// import CampsiteInfo from './CampsiteInfoComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import ContactUs from './ContactComponent';
import MenuPage from './MenuComponent';
import { Fade } from 'react-animation-components'

// import Contact from './ContactComponent';
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
                <Fade in>
                    <Header/>
                    <Switch>
                        <Route path= '/home' component={Home} /> 
                        <Route exact path= '/contactus' component={ContactUs} /> 
                        <Route exact path= '/menu' component={MenuPage} /> 
                        <Redirect to='/home'/>
                    </Switch> 
                    <Footer/>
                </Fade>
             
            </div>
        );
    }
}

export default Main;