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
    const [searchUrl, setSearchUrl] = useState(`https://api.edamam.com/search?app_id=f604900f&app_key=b523b505a718166bca1753372a51616f&q=`)
    const [hasToken, setHasToken] = useState(false)

    return (
        <AppRouter hasToken={hasToken} setHasToken={setHasToken} searchUrl={searchUrl} setSearchUrl={setSearchUrl} searchResults={searchResults} setSearchResults={setSearchResults} />
    )
}

export default App
