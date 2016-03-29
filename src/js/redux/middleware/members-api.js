import 'isomorphic-fetch'
import {apiRootUrl} from '../config'
import Bromise from 'bluebird'

const callApi = (endpoint, httpMethod = 'GET', body = null) => {
  const absoluteUrl = (endpoint.indexOf(apiRootUrl) === 0)
    ? endpoint
    : apiRootUrl + endpoint

  const options = {
    method: httpMethod,
    body: body !== null ? JSON.stringify(body) : null,
    headers: {'Content-Type': 'application/json'}
    // credentials: 'omit' // omit || same-origin || include
  }

  console.log('API Request', {url: absoluteUrl, options})

  // http://github.github.io/fetch/#options
  return fetch(absoluteUrl, options)
    .then(response => response.json().then(json => ({json, response})))
    .then(({json, response}) => {
      console.log('API Response', {request: {url: absoluteUrl, options}, response, json})
      return response.ok
        ? json
        : Bromise.reject(json)
    })
}

export const CALL_API = Symbol('Call API')

export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  console.log('CALL_API', action)

  let {endpoint} = callAPI
  const {types, body, httpMethod} = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specifiy a string endpoint URL.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be string')
  }

  const actionWith = (data) => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types

  next(actionWith({type: requestType}))

  return callApi(endpoint, httpMethod, body)
    .then(
      response => next(actionWith({
        response,
        type: successType
      })),
      error => next(actionWith({
        type: failureType,
        error: error.message || 'Something bad happened'
      }))
    )
}
