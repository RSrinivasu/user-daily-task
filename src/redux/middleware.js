import {createStore , applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import reduser from './reducer'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const persistConfig ={
    key:'root',
    storage
}

const presistedReducer = persistReducer(persistConfig, reduser)

const middleware = applyMiddleware(
    createLogger(),
    thunk
)


export let store = process.env.NODE_ENV === 'production' ?createStore(presistedReducer):createStore(presistedReducer, middleware)
export let persistor = persistStore(store)