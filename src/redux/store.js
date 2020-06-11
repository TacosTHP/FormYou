import rootReducer from './reducers/index'
import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk';

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)

store.subscribe(() => console.log(store.getState()));

export default store
