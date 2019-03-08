import React from 'react'
import { createAnecdote } from './../reducers/anecdoteReducer'
import { connect } from 'react-redux'

const AnecdoteForm = ({ createAnecdote }) => {

  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    createAnecdote(content)

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

export default connect(
  null,
  { createAnecdote }
)(AnecdoteForm)