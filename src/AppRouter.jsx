import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRecipesRoute from './Components/ProtectedRecipesRoute'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import RecipeCards from './Components/RecipeCards/RecipeCards'
import Contact from './Components/Contact/Contact'

const AppRouter = ({ hasToken, setHasToken, searchResults, setSearchResults}) => {

    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home setHasToken={setHasToken} setSearchResults={setSearchResults}/>
                </Route>
                <Route path='/home'>
                    <Home setHasToken={setHasToken} setSearchResults={setSearchResults}/>
                </Route>
                <ProtectedRecipesRoute exact path='/recipes' hasToken={hasToken} searchResults={searchResults} component={RecipeCards} />
                <ProtectedRecipesRoute path='/recipes/:id' hasToken={hasToken} searchResults={searchResults} component={RecipeCards} />
                <Route path='/contact'>
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter