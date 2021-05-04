import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRecipesRoute from './Components/ProtectedRecipesRoute'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import RecipeCards from './Components/RecipeCards/RecipeCards'
import AboutUs from './Components/AboutUs/AboutUs'

const AppRouter = ({ hasToken, setHasToken, searchUrl, setSearchUrl, searchResults, setSearchResults}) => {

    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home setHasToken={setHasToken} searchUrl={searchUrl} setSearchUrl={setSearchUrl} setSearchResults={setSearchResults}/>
                </Route>
                <Route path='/home'>
                    <Home setHasToken={setHasToken} setSearchResults={setSearchResults} searchUrl={searchUrl} setSearchUrl={setSearchUrl}/>
                </Route>
                <ProtectedRecipesRoute exact path='/recipes' hasToken={hasToken} searchResults={searchResults} component={RecipeCards}/>
                <ProtectedRecipesRoute exact path='/recipes/:id' hasToken={hasToken} searchResults={searchResults} component={RecipeCards}/>
                <Route path='/aboutUs'>
                    <AboutUs />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter
