import React, { useState } from 'react'
import './App.css'
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
    const [searchResults, setSearchResults] = useState([])

    return (
        <>
            <Header />
            <Home searchResults={searchResults} setSearchResults={setSearchResults}/>
            <Footer />
        </>
    )
}

export default App
