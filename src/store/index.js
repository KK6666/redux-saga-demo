import { createStore, applyMiddleware, compose } from 'redux'  //  引入createStore方法
import reducer from './reducer'
import createSagaMiddleware from 'redux-saga'
import mySagas from './saga'

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware))
const store = createStore(reducer, enhancer)
sagaMiddleware.run(mySagas)


export default store  