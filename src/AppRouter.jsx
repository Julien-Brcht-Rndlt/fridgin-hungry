import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import RecipeCards from './Components/RecipeCards/RecipeCards'
import Contact from './Components/Contact/Contact'

const AppRouter = ({ searchResults, setSearchResults}) => {

    return(
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home setSearchResults={setSearchResults}/>
                </Route>
                <Route exact path='/recipes'>
                    <RecipeCards searchResults={searchResults}/>
                </Route>
                <Route path='/recipes/:id' render={ (props) => (<RecipeCards {...props} searchResults={searchResults} />) } />
                <Route path='/contact'>
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppRouter