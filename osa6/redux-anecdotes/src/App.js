import React from 'react';

const App = (props) => {
  const store = props.store
  const anecdotes = store.getState()
  
  const vote = (id) => {
    console.log('vote', id)
    store.dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  const addNew = (event) => {
    event.preventDefault()
    const content = event.target.content.value
    store.dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content,
        id: (100000 * Math.random()).toFixed(0),
        votes: 0
      }
    })
    event.target.content.value = ''
  }
  
  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addNew}>
        <div><input name="content" /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App
