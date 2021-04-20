import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
    fab,
    faCoffee
 )

function App() {
    return (
        <>
        <Router>
            <Header />
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/recipes'>
                    <Cards />
                </Route>
                <Route exact path='/contact'>
                    <Contact />
                </Route>
            </Switch>
            <Footer />
        </Router>
        </>
    )
}

export default App
