import React, {Component, PropTypes} from 'react'
import MembersPage from '../../components/members'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as AppActions from '../actions'

const mapStateToProps = ({members}) => ({ members })

const mapDispatchToProps = (dispatch) => ({actions: bindActionCreators(AppActions, dispatch)})

@connect(mapStateToProps, mapDispatchToProps)
export default class MembersContainer extends Component {
  static propTypes = {
    members: PropTypes.arrayOf(PropTypes.object).isRequired,
    actions: PropTypes.shape({
      loadMembers: PropTypes.func.isRequired
    }).isRequired
  }

  componentWillMount () {
    this.props.actions.loadMembers()
  }

  render () {
    return <MembersPage members={this.props.members} />
  }
}
