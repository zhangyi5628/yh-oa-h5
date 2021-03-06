/**
 * Created by zhangyi on 2017/10/18.
 */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

const createStoreWithMiddleware = applyMiddleware(
    thunk
)(createStore)

function configureStore(initialState) {
    return createStoreWithMiddleware(rootReducer, initialState)
}

const store = configureStore();

export default store;
