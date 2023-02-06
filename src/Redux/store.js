import SignUpReducer from './Reducers/SignUpSlice'
import {createStore,configureStore} from '@reduxjs/toolkit'
const store=configureStore({
    reducer:{SignUpReducer:SignUpReducer}
})
export default store;
