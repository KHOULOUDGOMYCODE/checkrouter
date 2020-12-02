import React from 'react'
import {Route} from 'react-router-dom'
import App from '../App'
import Desc from './Desc'
import Trailer from './Trailer'

function Router() {

  
    return (
        <div>
          <Route exact path='/' component={App}/> 
          <Route path='/desc/:title' component={Desc}/> 
          <Route path='/trailer/:title' component={Trailer}/> 
          
        </div>
    )
}

export default Router