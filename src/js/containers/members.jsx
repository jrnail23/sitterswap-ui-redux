import React, { PropTypes } from 'react'
import MembersPage from '../components/members'
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

const MembersContainer = ({members}) => (
    <MembersPage members={members} />
)

MembersContainer.propTypes = {
  members: PropTypes.arrayOf(PropTypes.object).isRequired
}

const mapStateToProps = ({members}) => ({ members })

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(AppActions, dispatch)})

export default connect(mapStateToProps, mapDispatchToProps)(MembersContainer)
