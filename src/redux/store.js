import { configureStore } from '@reduxjs/toolkit'
import { adminReducer } from './reducers/adminReducer';
import { authReducer } from './reducers/userReducer';

const store =configureStore({
    reducer:{
        auth:authReducer,
        admin:adminReducer
    }
})

export default store;

export const server = "https://mbaburgerwala.herokuapp.com/api/v1";