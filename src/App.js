import React from 'react'
import Container from '@material-ui/core/Container'
import {Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header'
import AlertControl from './components/UI/AlerctControl'
import GlobalStatistics from './pages/GlobalStatistics'
import CountryStatistics from './pages/CountryStatistics'
import About from './pages/About'

function App() {
  return (
    <>
      <Header/>
      <AlertControl />
      <Container maxWidth="md">
        <Switch>
          <Route exact path="/" component={GlobalStatistics}/>
          <Route exact path="/country" component={CountryStatistics}/>
          <Route exact path="/about" component={About}/>
        </Switch>
      </Container>
    </>
  )
}

export default App
