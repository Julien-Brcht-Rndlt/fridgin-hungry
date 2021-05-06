import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRecipesRoute = ({ hasToken, path, searchUrl, setSearchUrl, searchResults, setSearchResults, component: Component }, ...rest) => {

    return (
        <Route {...rest} path={path} render={props => {
            return (
                hasToken ? <Component {...props}
                                searchUrl={searchUrl}
                                setSearchUrl={setSearchUrl}
                                searchResults={searchResults}
                                setSearchResults={setSearchResults} /> : <Redirect to='/'
                            />
            )
        }} />
    )
}

export default ProtectedRecipesRoute