import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter , Route , Switch } from 'react-router-dom';
import Home from '../Screens/Home';
import Signup from '../Screens/Signup';
import Login from '../Screens/Login';
import DefaultNavBar from '../components/DefaultNavBar';
import HomeView from '../ScreenSnippets/HomeView';
import ContactUs from '../ScreenSnippets/ContactUs';
import Footer from '../components/Footer';
import Header from '../components/Header';
import AboutUs from '../ScreenSnippets/AboutUs';

class App extends Component{

    render(){
        return(
               <BrowserRouter>
                         <Switch>
                         
                         <Route exact path="/homeview">
                              <HomeView />
                         </Route>

                         <Route exact path="/">
                              <Home />
                         </Route>

                         <Route exact path="/signup">
                              <Signup />
                         </Route>

                         <Route exact path="/login">
                              <Login />
                         </Route>

                         <Route exact path="/nav">
                              <DefaultNavBar />
                         </Route>

                         <Route exact path="/contact">
                              <ContactUs />
                         </Route>

                         <Route exact path="/footer">
                              <Footer />
                         </Route>

                         <Route exact path="/header">
                              <Header />
                         </Route>

                         <Route exact path="/aboutus">
                              <AboutUs />
                         </Route>

                         </Switch>
               </BrowserRouter>
        )
    }

}

ReactDom.render(<App />, document.getElementById('app'))