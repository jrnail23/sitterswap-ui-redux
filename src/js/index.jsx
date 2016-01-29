import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'
import Members from './components/members'

const appElement = document.getElementById('app')
render(
  <Provider store={store}>
    <Members />
  </Provider>,
  appElement
)
