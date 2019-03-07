export const setNotification = (content) => {
  return {
    type: 'SET_NOTIFICATION',
    data:
      content,
  }
}


const initialState = 'You are notified. Happy?'

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)
  switch (action.type) {
    case 'SET_NOTIFICATION':
      state = action.data
      return state
    default:
      return state
  }
}

export default reducer