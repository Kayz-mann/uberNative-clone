import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from '../features/counter/counterSlice'
import navReducer from "./slices/navSlice"

export default configureStore({
  reducer: {
    nav: navReducer,
  },
})
