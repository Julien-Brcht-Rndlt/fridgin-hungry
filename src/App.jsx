import React, { useState } from 'react'
import './App.css'
import AppRouter from './AppRouter'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(
    fab,
    fas
)

function App() {
    const [searchResults, setSearchResults] = useState([])
    const [hasToken, setHasToken] = useState(false)

    return (
            <AppRouter hasToken={hasToken} setHasToken={setHasToken} searchResults={searchResults} setSearchResults={setSearchResults}/>
    )
}

export default App
