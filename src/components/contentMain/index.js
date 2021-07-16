import React from 'react'
import {Route, Switch} from 'react-router-dom'
import BasicRoute from '../../router/index'

class ContentMain extends React.Component{
  render(){
    return(
      <Switch>
        <Route exact path="/" component={BasicRoute.Dashboard}/>
        <Route exact path="/about" component={BasicRoute.About}/>
        <Route  exact path="/inbox" component={BasicRoute.Inbox}/>
      </Switch>
    )
  }
}

export default ContentMain