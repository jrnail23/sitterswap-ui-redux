export const addMember = (member) => {
  return {
    type: 'addMember',
    member
  }
}

export const setErrors = (errors) => {
  return {
    type: 'setErrors',
    errors
  }
}

export const setMemberState = ({fieldName, value}) => {
  return {
    type: 'setMemberState',
    fieldName,
    value
  }
}
