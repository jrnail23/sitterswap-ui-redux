import React, {PropTypes} from 'react'

const EmailLink = ({emailAddress, displayText}) => (
  <a href={'mailto:' + emailAddress}>{displayText || emailAddress}</a>
)

EmailLink.propTypes = {
  displayText: PropTypes.string,
  emailAddress: PropTypes.string.isRequired
}

export default EmailLink
