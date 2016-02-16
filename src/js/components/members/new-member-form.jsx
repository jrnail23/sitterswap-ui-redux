import React, {PropTypes} from 'react'
import TextInput from '../common/text-input'
import {Link} from 'react-router'

const NewMemberForm = ({member: {firstName, lastName, emailAddress}, onChange, onSave, errors}) => (
  <div>
    <form>
      <TextInput name='firstName'
        label='First Name'
        value={firstName}
        onChange={onChange}
        error={errors.firstName} />
      <TextInput name='lastName'
        label='Last Name'
        value={lastName}
        onChange={onChange}
        error={errors.lastName} />
      <TextInput name='emailAddress'
        label='Email Address'
        value={emailAddress}
        onChange={onChange}
        error={errors.emailAddress} />

      <Link to='/members' className='btn btn-default'>Cancel</Link>
        <button type='submit'
          className='btn btn-primary'
          onClick={onSave}>Save</button>
    </form>
  </div>
)

NewMemberForm.propTypes = {
  member: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    emailAddress: PropTypes.string.isRequired
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  errors: PropTypes.object
}

export default NewMemberForm
