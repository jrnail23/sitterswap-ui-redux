import * as ActionTypes from '../actions'

export default (state = [], action) => {
  switch (action.type) {
    case ActionTypes.MEMBERS_FETCH_SUCCESS:
      return action.response.slice()
    default:
      return state
  }
}
