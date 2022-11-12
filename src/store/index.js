import { configureStore } from "@reduxjs/toolkit"

import toursReducer from "../components/tours/toursSlice"
import sortReducer from "../components/sortButtons/sortSlice"

const stringMiddleware = () => (next) => (action) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {
        tours: toursReducer,
        sort: sortReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'

})

export default store

// import { configureStore, combineReducers } from "@reduxjs/toolkit"
// import { 
//         persistStore, 
//         persistReducer,
//         FLUSH,
//         REHYDRATE,
//         PAUSE,
//         PERSIST,
//         PURGE,
//         REGISTER,
//         }
//         from 'redux-persist'
// import storage from 'redux-persist/lib/storage' 
// import sortReducer from "../components/sortButtons/sortSlice";
// import toursReducer from "../components/tours/toursSlice"

// const rootReducer = combineReducers({
//         tours: toursReducer,
//         sort: sortReducer
//     });

// const persistConfig = {
//     key: 'root',
//     storage,
// }


// const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production',
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({
//             serializableCheck: {
//             ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//             },
//         }), 

// })

// export const persistor = persistStore(store);
// export default store