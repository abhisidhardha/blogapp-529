import {configureStore} from '@reduxjs/toolkit';
import userAuthorReducer from './slice/userAuthorslice';

export const store=configureStore({
    reducer:{
        userAuthorLoginReducer:userAuthorReducer
    }
})