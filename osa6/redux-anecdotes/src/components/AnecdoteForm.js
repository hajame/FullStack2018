import React from 'react'
import { createAnecdote } from './../reducers/anecdoteReducer'

const AnecdoteForm = ({ store }) => {

  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    store.dispatch(
      createAnecdote(content)
    )
    event.target.content.value = ''
  }

  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name="content" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm