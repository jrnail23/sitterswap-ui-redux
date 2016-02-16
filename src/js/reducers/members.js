export default (state = [], action) => {
  switch (action.type) {
    case 'addMember':
      const newState = state.slice()
      newState.push(action.member)
      return newState
    default:
      return state
  }
}
