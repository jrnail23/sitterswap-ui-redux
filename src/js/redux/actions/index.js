import {CALL_API} from '../middleware/members-api'

export const SET_MEMBER_ERRORS = 'SET_MEMBER_ERRORS'
export const SET_MEMBER_STATE = 'SET_MEMBER_STATE'

export const MEMBER_ADD_REQUEST = 'MEMBER_ADD_REQUEST'
export const MEMBER_ADD_SUCCESS = 'MEMBER_ADD_SUCCESS'
export const MEMBER_ADD_FAILURE = 'MEMBER_ADD_FAILURE'

export const addMember = (member) => {
  return (dispatch, getState) => {
    dispatch(postNewMember(member))
  }
}

const postNewMember = (member) => {
  return {
    [CALL_API]: {
      types: [
        MEMBER_ADD_REQUEST,
        MEMBER_ADD_SUCCESS,
        MEMBER_ADD_FAILURE
      ],
      endpoint: 'members',
      body: member,
      httpMethod: 'POST'
    }
  }
}

export const setErrors = (errors) => {
  return {
    type: SET_MEMBER_ERRORS,
    errors
  }
}

export const setMemberState = ({fieldName, value}) => {
  return {
    type: SET_MEMBER_STATE,
    fieldName,
    value
  }
}

export const MEMBERS_FETCH_REQUEST = 'MEMBERS_FETCH_REQUEST'
export const MEMBERS_FETCH_SUCCESS = 'MEMBERS_FETCH_SUCCESS'
export const MEMBERS_FETCH_FAILURE = 'MEMBERS_FETCH_FAILURE'

const fetchMembers = () => {
  return {
    [CALL_API]: {
      types: [
        MEMBERS_FETCH_REQUEST,
        MEMBERS_FETCH_SUCCESS,
        MEMBERS_FETCH_FAILURE
      ],
      endpoint: 'members'
    }
  }
}

export const loadMembers = () => {
  return (dispatch, getState) => {
    return dispatch(fetchMembers())
  }
}
