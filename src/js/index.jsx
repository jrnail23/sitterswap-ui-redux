import React from 'react'
import { render } from 'react-dom'
import Root from './redux/containers/root'
import configureStore from './redux/store'

const store = configureStore()

render(
  <Root store={store} />,
  document.getElementById('root')
)
