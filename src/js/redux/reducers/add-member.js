import * as ActionTypes from '../actions'

export default (
  state = {
    member: {
      firstName: null,
      lastName: null,
      emailAddress: null
    },
    errors: {}
  },
  action) => {
  switch (action.type) {
    case ActionTypes.MEMBER_ADD_SUCCESS:
      console.warn('MEMBER_ADD_SUCCESS', action)
      throw new Error('need to hook up API middleware to follow location for HTTP 201')
      // const newState = state.slice()
      // newState.push(action.member)
      // return newState
    case ActionTypes.SET_MEMBER_STATE:
      const updatedMember = Object.assign({},
        state.member,
        {
          [action.fieldName]: action.value
        }
      )
      return Object.assign({},
        state,
        {
          member: updatedMember
        }
      )
    case ActionTypes.SET_MEMBER_ERRORS:
      return Object.assign({},
        state,
        {
          errors: action.errors
        }
      )
    default:
      return state
  }
}
