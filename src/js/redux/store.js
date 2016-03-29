import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import { browserHistory } from 'react-router'
import { syncHistory, routeReducer } from 'react-router-redux'
import thunk from 'redux-thunk'
import reducers from './reducers'
import membersApi from './middleware/members-api'
import createLogger from 'redux-logger'

const rootReducer = combineReducers(Object.assign({}, reducers, {
  routing: routeReducer
}))

const reduxRouterMiddleware = syncHistory(browserHistory)

export default (initialState) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(thunk, membersApi, reduxRouterMiddleware, createLogger()),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  reduxRouterMiddleware.listenForReplays(store)

  return store
}
