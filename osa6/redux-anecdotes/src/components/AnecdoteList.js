import React from 'react'
import { connect } from 'react-redux'
import { voteFor } from './../reducers/anecdoteReducer'
import { setNotification } from './../reducers/notificationReducer'

const AnecdoteList = ({ 
  voteFor, 
  setNotification,
  anecdotes,
  filter 
}) => {
  const vote = (anecdote) => {
    console.log('vote', anecdote)
    voteFor(anecdote.id)
    
    setNotification(`you voted '${anecdote.content}'`)
    
    setTimeout(() => {
      setNotification(null)
    }, 5000)
  }

  return (
    <div>
      {anecdotes
        .filter(a => a.content.toLowerCase()
          .includes(filter.toLowerCase())
        )
        .map(anecdote =>
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

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

const mapDispatchToProps = {
  voteFor, 
  setNotification
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(AnecdoteList)