import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import Main from './pages/Main'
import Notes from './pages/Notes'
import None from './pages/404'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="ui grid container">
          <Header />
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/notes/:id' component={Notes} />
            <Route component={None} />
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;