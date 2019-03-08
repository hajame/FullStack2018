export const createAnecdote = (content) => {
  return {
    type: 'NEW_ANECDOTE',
    data: {
      content,
      id: (100000 * Math.random()).toFixed(0),
      votes: 0
    }      
  }
}

export const voteFor = (id) => {
  return {
    type: 'VOTE',
    data: { id }      
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes
  }
}

const reducer = (state = [], action) => {
  // console.log('anecdoteReducer: state, action: ', state, action)
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecToChange = state.find(a => a.id === id)
      const changedAnec = {
        ...anecToChange,
        votes: anecToChange.votes + 1
      }
      return state
        .map(anec => anec.id !== id ? anec : changedAnec)
        .sort((a, b) => b.votes-a.votes)
    case 'NEW_ANECDOTE':
      return state
        .concat(action.data)
        .sort((a, b) => b.votes-a.votes)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default reducer