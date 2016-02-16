import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { Router, browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import routes from './routes'

const reducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(browserHistory)

const finalCreateStore = compose(
  applyMiddleware(thunk),
  applyMiddleware(reduxRouterMiddleware),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)

const store = finalCreateStore(reducer)

reduxRouterMiddleware.listenForReplays(store)

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>,
  document.getElementById('app')
)
