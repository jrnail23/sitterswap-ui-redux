import React, { PropTypes} from 'react'
import AddMemberPage from '../components/members/add'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

const AddMemberContainer = ({member, errors, actions: {setMemberState, setErrors, addMember}}) => (
  <AddMemberPage
    member={member}
    errors={errors}
    setMemberState={setMemberState}
    setErrors={setErrors}
    addMember={addMember} />
)

AddMemberContainer.propTypes = {
  member: PropTypes.object.isRequired,
  errors: PropTypes.object,
  actions: PropTypes.shape({
    setMemberState: PropTypes.func.isRequired,
    setErrors: PropTypes.func.isRequired,
    addMember: PropTypes.func.isRequired
  }).isRequired
}

const mapStateToProps = ({addMember: {member, errors}}) => ({member, errors})

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(AppActions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(AddMemberContainer)
