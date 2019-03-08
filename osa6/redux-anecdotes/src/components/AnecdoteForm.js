import React from 'react'
import { createAnecdote } from './../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const AnecdoteForm = ({ createAnecdote }) => {

  const addNew = async (event) => {
    event.preventDefault()
    const content = event.target.content.value
    event.target.content.value = ''
    const newAnec = await anecdoteService.createNew(content)
    createAnecdote(newAnec)
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