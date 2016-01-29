import { List } from 'immutable'

export default (state = List(['Member Zero']), action) => {
  switch (action.type) {
    case 'addMember':
      return state.push(action.member)
    default:
      return state
  }
}
