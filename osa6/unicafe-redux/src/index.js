import React from 'react';
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducer'

const store = createStore(reducer)

const App = () => {

  const votingAction = (value) => () => {
    store.dispatch({
      type: value
    })
  }
  const reset = () => {
    store.dispatch({
      type: 'ZERO'
    })
  }

  return (
    <div>
      <button onClick={votingAction('GOOD')}>hyvä</button> 
      <button onClick={votingAction('OK')}>neutraali</button> 
      <button onClick={votingAction('BAD')}>huono</button>
      <button onClick={reset}>nollaa tilastot</button>
      <div>hyvä {store.getState().good}</div>
      <div>neutraali  {store.getState().ok}</div>
      <div>huono  {store.getState().bad}</div>
    </div>
  )
}

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'))
}

renderApp()
store.subscribe(renderApp)
