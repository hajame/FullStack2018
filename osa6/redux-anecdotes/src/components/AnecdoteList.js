import React from 'react'
import { voteFor } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

const AnecdoteList = ({ store }) => {
  const anecdotes = store.getState().anecdotes

  const vote = (anecdote) => {
    console.log('vote', anecdote)
    store.dispatch(
      voteFor(anecdote.id)
    )
    store.dispatch(
      setNotification(`you voted '${anecdote.content}'`)
    )
    setTimeout(() => {
      store.dispatch(setNotification(null))
    }, 5000)
  }

  return (
    <div>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList