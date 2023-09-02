import {configureStore} from '@reduxjs/toolkit/dist'
import Auth from './Api/Auth'
import Renter from './Api/Renter';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import {itemSlice} from './Api/item-slice';
const Store  = configureStore({
    reducer :{
        [Auth.reducerPath]:Auth.reducer,
        [Renter.reducerPath]:Renter.reducer,
        [itemSlice.reducerPath]:itemSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
    .concat(Auth.middleware)
    .concat(Renter.middleware)
    .concat(itemSlice.middleware)
  
})
setupListeners(Store.dispatch)
export default Store;