export default (state = {member: {
  firstName: '',
  lastName: '',
  emailAddress: ''
}, errors: {}}, action) => {
  switch (action.type) {
    case 'setMemberState':
      const updatedMember = Object.assign({}, state.member, {[action.fieldName]: action.value})
      return Object.assign({}, state, {member: updatedMember})
    case 'setErrors':
      return Object.assign({}, state, {errors: action.errors})
    default:
      return state
  }
}
