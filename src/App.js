import {Switch, Route} from 'react-router-dom'

import {Component} from 'react'

import Home from './components/Home'

import About from './components/About'

import NotFound from './components/NotFound'

import Context from './context/ThemeContext'

import './App.css'

class App extends Component {
  state = {isDarkTheme: false}

  change = () => {
    this.setState(each => ({isDarkTheme: !each.isDarkTheme}))
  }

  render() {
    const {isDarkTheme} = this.state
    return (
      <Context.Provider value={{isDarkTheme, toggleTheme: this.change}}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Context.Provider>
    )
  }
}

export default App
