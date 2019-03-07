import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import App from './App'
import anecdoteReducer, { createAnecdote } from './reducers/anecdoteReducer'
import notificationReducer, { setNotification } from './reducers/notificationReducer'

const reducer = combineReducers({
  anecdotes: anecdoteReducer,
  notification: notificationReducer
})

const store = createStore(reducer)

// THE FOLLOWING WORKS, TRY IT!
// store.subscribe(() => console.log(store.getState()))
// store.dispatch(createAnecdote('this is a new anecdote'))
// store.dispatch(setNotification('your new notification!!'))

const render = () => {
  ReactDOM.render(
    <App store={store} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)