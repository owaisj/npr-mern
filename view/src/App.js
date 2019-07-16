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
        <div>
          <Header />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center'
          }}>
            <Switch>
              <Route exact path='/' component={Main} />
              <Route exact path='/notes/:id' component={Notes} />
              <Route component={None} />
            </Switch>
          </div>
        </div>
      </Router>
    )
  }
}

export default App;