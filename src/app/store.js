import { configureStore } from '@reduxjs/toolkit'

// configureStore creates a Redux store with good defaults
// It automatically sets up Redux DevTools and some middleware
export const store = configureStore({
  reducer: {
    // This is where we'll register our reducers
    // The key (counter) will be the name of the state slice
    // counter: counterReducer
  }
})