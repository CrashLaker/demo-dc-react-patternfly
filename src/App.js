import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import routes from './routes'

const app = (props) => {
  let routesView = routes.map(elem => {
    return <Route 
                path={elem.path} 
                {...elem.props} 
                component={elem.component}></Route>
  })
  return (
    <Switch>
      {routesView}
    </Switch>
  )
}

export default withRouter(app);
