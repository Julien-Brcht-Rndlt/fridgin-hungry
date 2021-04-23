import React, { useState } from 'react'
import './App.css'
import AppRouter from './Components/AppRouter'

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
        <div>
            <AppRouter searchResults={searchResults} setSearchResults={setSearchResults}/>
        </div>
    )
}

export default App
