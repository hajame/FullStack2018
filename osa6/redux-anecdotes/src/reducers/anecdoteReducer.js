import anecdoteService from '../services/anecdotes'

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export const voteFor = anecdote => {
  return async dispatch => {   
    const updatedAnec = await anecdoteService.voteFor(anecdote)
    dispatch({
      type: 'VOTE',
      data: updatedAnec
    })
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

const reducer = (state = [], action) => {
  // console.log('anecdoteReducer: state, action: ', state, action)
  switch (action.type) {
    case 'VOTE':
      const changedAnec = action.data
      return state
        .map(anec => anec.id !== changedAnec.id ? anec : changedAnec)
        .sort((a, b) => b.votes - a.votes)
    case 'NEW_ANECDOTE':
      return state
        .concat(action.data)
        .sort((a, b) => b.votes - a.votes)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export default reducer