import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedRecipesRoute = ({ hasToken, path, searchResults, component: Component }, ...rest) => {

    return(
        <Route {...rest} path={path} render={ props => {
            return(

                hasToken ? <Component {... props} searchResults={searchResults} /> : <Redirect to='/' />  

            )
        }} />    
    )
}

export default ProtectedRecipesRoute