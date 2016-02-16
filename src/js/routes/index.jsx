import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import CoreLayout from '../layouts/core-layout'
import HomeView from '../views/home'
import NotFoundView from '../views/not-found'
import MembersContainer from '../containers/members'
import AddMemberContainer from '../containers/add-member'

export default (
  <Route path='/' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='members/add' component={AddMemberContainer} />
    <Route path='members' component={MembersContainer} />
    <Route path='404' component={NotFoundView} />
    <Redirect from='*' to='404' />
  </Route>
)
