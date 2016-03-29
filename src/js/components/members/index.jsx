import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import MembersTable from './members-table'

const MembersPage = ({members}) => (
  <div>
    <h1>Members</h1>
    <Link to='/members/add' className='btn btn-default'>Add New Member</Link>
    {
      members.length
        ? <MembersTable members={members} />
        : <div>No members available.</div>
    }
  </div>
)

MembersPage.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MembersPage
