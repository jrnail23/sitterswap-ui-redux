import React, {Component, PropTypes} from 'react'
import NewMemberForm from './new-member-form'

class AddMemberPage extends Component {
  memberFormIsValid = () => {
    const {member, setErrors} = this.props

    let formIsValid = true
    const errors = {}

    if (!member.firstName) {
      errors.firstName = 'First name is required'
      formIsValid = false
    }

    if (!member.lastName) {
      errors.lastName = 'Last name is required'
      formIsValid = false
    }

    if (!member.emailAddress) {
      errors.emailAddress = 'Email address is required'
      formIsValid = false
    }

    setErrors(errors)

    return formIsValid
  }

  onChange = (e) => {
    const {target: {name, value}} = e
    this.props.setMemberState({fieldName: name, value})
  }

  onSave = (e) => {
    e.preventDefault()
    if (!this.memberFormIsValid()) {
      return
    }

    const {addMember, member} = this.props

    addMember(member)
  }

  render () {
    const {member, errors} = this.props
    return (
      <div>
        <h1>Add New Member</h1>
        <NewMemberForm member={member}
          onChange={this.onChange}
          onSave={this.onSave}
          errors={errors} />
      </div>
    )
  }
}

AddMemberPage.propTypes = {
  member: PropTypes.object.isRequired,
  setMemberState: PropTypes.func.isRequired,
  setErrors: PropTypes.func.isRequired,
  addMember: PropTypes.func.isRequired,
  errors: PropTypes.object
}

export default AddMemberPage
