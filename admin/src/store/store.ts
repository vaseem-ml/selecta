import { create } from 'domain';
import { createStore, applyMiddleware} from 'redux';
import rootReducer from './reducers/root.reducer';
import thunkMiddleware from 'redux-thunk'
//const store = createStore(rootReducer);

const store = createStore(rootReducer, applyMiddleware(
  thunkMiddleware
))


export default store;
