import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Footer/Footer'
import Header from './Header/Header'
import Home from './Home/Home'
import RecipeCards from './RecipeCards/RecipeCards'
import Contact from './Contact/Contact'

const AppRouter = ({ searchResults, setSearchResults}) => {

    return(
        <>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home searchResults={searchResults} setSearchResults={setSearchResults}/>
                </Route>
                <Route path='/recipes'>
                    <RecipeCards searchResults={[]}/>
                </Route>
                <Route path='/recipes/:id' render={(props) => (<RecipeCards {...props} searchResults={[]} />)} />
                <Route path='/contact'>
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </Router>
        </>
    );
}

export default AppRouter;