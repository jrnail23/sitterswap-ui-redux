import React from 'react'
import { connect } from 'react-redux'
import NewMember from './new-member'
import { addMember } from '../actions'

const Members = ({members, dispatch}) => (
  <div>
    <h1>Members</h1>
    <NewMember onChange={e => {
      if (e.keyCode === 13) {
        dispatch(addMember(e.target.value))
        e.target.value = ''
      }
    }} />
    {
      members.map(member => <p key={member}>{member}</p>)
    }
  </div>
)

const mapStateToProps = (members) => ({ members })

// const mapDispatchToProps = (dispatch) => ({})

export default connect(mapStateToProps)(Members)
