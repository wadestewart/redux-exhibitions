// Import dependencies
import { createStore, compose, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

// Import root reducer
import rootReducer from './reducers/index'

// Import data
import exhibitions from './data/exhibitions'
import artworks from './data/artworks'

// Create an object for default data
const defaultState = {
    exhibitions,
    artworks
}

// Create a browser history
const history = createHistory()

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history)

// Make redux dev tools available in the console
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Create store
const store = createStore(rootReducer, defaultState, composeEnhancers(applyMiddleware(middleware)))

export {history}
export default store
