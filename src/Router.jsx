import React from 'react'
import Home from './pages/home'
import Media from './pages/mediaServer'
import Tech from  './pages/tech'
import { BrowserRouter, Route, Switch } from 'react-router-dom'



const Router = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/tech'>
              <Tech />
            </Route>
            {/* {/* <Route exact path='/media'>
              <Media />
            </Route> */}
            <Route exact path='/media'>
              <Media />
            </Route> 
          </Route>
        </Switch>   
      </BrowserRouter>
  )
}

export default Router
