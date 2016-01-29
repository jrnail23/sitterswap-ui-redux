import React from 'react'
import { connect } from 'react-redux'

const Members = ({members}) => (
  <div>
    <h1>Members</h1>
    {
      members.map(member => <p key={member}>{member}</p>)
    }
  </div>
)

const mapStateToProps = (members) => {
  return { members }
}

export default connect(mapStateToProps)(Members)
