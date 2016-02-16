import React, {PropTypes} from 'react'
import {Link} from 'react-router'
import EmailLink from '../common/email-link'

const MemberRow = ({member: {key, lastName, firstName, emailAddress}}) => {
  const listName = `${lastName}, ${firstName}`
  return (
    <tr>
      <td><Link to={`/members/${key}`}>{listName}</Link></td>
      <td><EmailLink emailAddress={emailAddress} /></td>
    </tr>
  )
}

MemberRow.propTypes = {
  member: PropTypes.shape({
    key: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired
  }).isRequired
}

const MembersTable = ({members}) => (
  <div>
    <table className='table table-striped table-bordered table-condensed'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {members.map(member =>
          <MemberRow member={member} key={member.key} />
        )}
      </tbody>
    </table>
  </div>
)

MembersTable.propTypes = {
  members: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired
  }))// .isRequired
}

export default MembersTable
